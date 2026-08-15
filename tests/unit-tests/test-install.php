<?php
/**
 * Nothing in this plugin can be exercised without WooCommerce loaded and
 * without the main class existing - every other test in the suite depends
 * on both being true, so this is the first thing checked.
 *
 * @package Enhanced_Ajax_Add_To_Cart_Wc
 */
class EAA2C_Tests_Install extends WP_UnitTestCase {

	public function test_plugin_and_woocommerce_both_loaded() {
		$this->assertTrue( class_exists( 'Enhanced_Ajax_Add_To_Cart_Wc' ), 'Enhanced_Ajax_Add_To_Cart_Wc is missing.' );
		$this->assertTrue( class_exists( 'WooCommerce' ), 'WooCommerce is not loaded - every other test here would be meaningless.' );
	}

	/**
	 * The version constant, the plugin header and package.json all have to
	 * agree. trs-verify-versions.js enforces this at build time; this asserts
	 * it at runtime, where a mismatch would mean an update check compares the
	 * wrong number.
	 */
	public function test_version_constant_matches_the_plugin_header() {
		$this->assertTrue( defined( 'ENHANCED_AJAX_ADD_TO_CART' ), 'ENHANCED_AJAX_ADD_TO_CART is not defined.' );

		$header = get_file_data(
			dirname( __DIR__, 2 ) . '/enhanced-ajax-add-to-cart-wc.php',
			array( 'Version' => 'Version' )
		);

		$this->assertSame(
			$header['Version'],
			ENHANCED_AJAX_ADD_TO_CART,
			'ENHANCED_AJAX_ADD_TO_CART does not match the Version: header.'
		);
	}
}
