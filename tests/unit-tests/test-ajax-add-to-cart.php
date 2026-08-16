<?php
/**
 * The eaa2c_add_to_cart AJAX handler is this plugin's core product: the
 * customer-facing button posts here to add an item to the cart without a
 * page reload.
 *
 * WHY THESE TESTS EXIST
 * -----------------------------------------------------------------------------
 * The handler (TRS\EAA2C\Ajax::eaa2c_add_to_cart_callback(), in
 * includes/class-eaa2c-ajax.php) is registered on both
 * wp_ajax_eaa2c_add_to_cart and wp_ajax_nopriv_eaa2c_add_to_cart, which is
 * correct for a public add-to-cart action - most real shoppers are not
 * logged in, so gating this on a capability check would be a bug, not a fix.
 *
 * What is NOT correct, and what test_add_to_cart_succeeds_with_no_nonce_present
 * documents rather than silently "fixing": the callback never calls
 * check_ajax_referer() or wp_verify_nonce() on anything, and nothing in the
 * plugin ever creates a nonce for this action (grepped across includes/,
 * admin/ and public/ - the only nonce reference anywhere is a commented-out,
 * unrelated REST nonce in class-eaa2c-admin.php). A request with no nonce at
 * all succeeds exactly like one with a valid nonce would, which leaves this
 * endpoint open to CSRF: a third-party page can make a logged-in shopper's
 * browser silently add a product to their cart. Product id, variation id and
 * quantity ARE sanitized (intval(sanitize_text_field(...))) and the add still
 * goes through WooCommerce's own woocommerce_add_to_cart_validation filter
 * and stock/purchasability checks, so this is a CSRF gap, not an injection
 * or stock-manipulation one. Reported in the harness PR description; fixing
 * it is a separate, deliberate change and out of scope for a test-harness PR.
 *
 * @package Enhanced_Ajax_Add_To_Cart_Wc
 */
class EAA2C_Tests_Ajax extends WP_Ajax_UnitTestCase {

	public function test_add_to_cart_action_is_registered_for_both_logged_in_and_anonymous_users() {
		$this->assertNotFalse(
			has_action( 'wp_ajax_eaa2c_add_to_cart' ),
			'wp_ajax_eaa2c_add_to_cart is not registered - logged-in shoppers could not use the button.'
		);
		$this->assertNotFalse(
			has_action( 'wp_ajax_nopriv_eaa2c_add_to_cart' ),
			'wp_ajax_nopriv_eaa2c_add_to_cart is not registered - most real shoppers are anonymous, and this is the hook that lets them add to cart.'
		);
	}

	/**
	 * Documents current behavior. This is not an assertion that the behavior
	 * is correct - see the class docblock above - it is a record of what
	 * actually happens today, so that a future nonce fix has a red test to
	 * turn green instead of rediscovering the gap from scratch. If this test
	 * starts failing because a nonce is now required, update it to send a
	 * valid one rather than reverting the check that made it fail.
	 */
	public function test_add_to_cart_succeeds_with_no_nonce_present() {
		$product = new WC_Product_Simple();
		$product->set_name( 'EAA2C Test Widget' );
		$product->set_regular_price( '9.99' );
		$product->set_manage_stock( false );
		$product->set_status( 'publish' );
		$product_id = $product->save();

		WC()->cart->empty_cart();

		$_POST['product']  = (string) $product_id;
		$_POST['variable'] = '0';
		$_POST['quantity'] = '1';
		// Deliberately absent: any nonce field. eaa2c_add_to_cart_callback()
		// never looks for one, so this request carries none.
		unset( $_POST['_wpnonce'], $_POST['_ajax_nonce'] );

		// WP_Ajax_UnitTestCase::_handleAjax() fires do_action( 'admin_init' )
		// before dispatching the hook under test, and WooCommerce's own
		// admin_init handling (the pending-order menu-bubble count) hits a
		// known MySQL "Can't reopen table" fault under this harness's
		// transaction-wrapped test isolation - unrelated to this plugin. Left
		// alone, that prints an HTML db-error block, and the null it then
		// returns trips a PHP "null as an array offset" deprecation notice
		// a few lines later in wp-admin's own menu-bubble code - both land
		// ahead of the JSON response and break the decode below. A real
		// front-end request never fires admin_init at all, so this is a
		// side effect of the test harness, not of this plugin; silence the
		// display, not the plugin's own error handling.
		global $wpdb;
		$wpdb->hide_errors();
		$previous_display_errors = ini_set( 'display_errors', '0' );

		try {
			$this->_handleAjax( 'eaa2c_add_to_cart' );
		} catch ( WPAjaxDieContinueException $e ) {
			// Expected: wp_send_json() ends in wp_die(), which this test
			// library turns into an exception so the test can keep running.
		}

		ini_set( 'display_errors', $previous_display_errors );
		$wpdb->show_errors();

		$response = json_decode( $this->_last_response, true );

		$this->assertIsArray( $response, 'The handler did not return JSON: ' . $this->_last_response );
		$this->assertArrayHasKey(
			'added',
			$response,
			'Product was not added despite no nonce being present in the request.'
		);
		$this->assertSame( $product_id, $response['added'] );
		$this->assertSame(
			1,
			WC()->cart->get_cart_contents_count(),
			'The cart should contain the one item just added.'
		);
	}
}
