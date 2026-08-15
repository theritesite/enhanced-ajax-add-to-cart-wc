<?php
/**
 * EAA2C Test Bootstrapper.
 *
 * WooCommerce loads first, then this plugin - the AJAX handler under test
 * calls straight into WC()->cart->add_to_cart() and wc_get_product(), so
 * nothing in this suite can be exercised without WooCommerce loaded.
 *
 * @since   1.0.0
 * @package Enhanced_Ajax_Add_To_Cart_Wc
 */

$_tests_dir = getenv( 'WP_TESTS_DIR' ) ? getenv( 'WP_TESTS_DIR' ) : '/tmp/wordpress-tests-lib';
$_core_dir  = getenv( 'WP_CORE_DIR' ) ? getenv( 'WP_CORE_DIR' ) : '/tmp/wordpress';

if ( ! file_exists( $_tests_dir . '/includes/functions.php' ) ) {
	echo "Could not find the WordPress test library at {$_tests_dir}.\n";
	echo "Run: bin/setup-tests.sh <db-name> <db-user> [db-pass]\n";
	exit( 1 );
}

require_once $_tests_dir . '/includes/functions.php';

$GLOBALS['_eaa2c_wc_plugin'] = $_core_dir . '/wp-content/plugins/woocommerce/woocommerce.php';

if ( ! file_exists( $GLOBALS['_eaa2c_wc_plugin'] ) ) {
	echo "Could not find WooCommerce at {$GLOBALS['_eaa2c_wc_plugin']}.\n";
	echo "Run: bin/setup-tests.sh <db-name> <db-user> [db-pass]\n";
	exit( 1 );
}

/**
 * Tell WordPress that WooCommerce (and nothing else) is active.
 *
 * Enhanced_Ajax_Add_To_Cart_Wc_Dependencies::woocommerce_active_check()
 * (woo-includes/class-eaa2cwc-dependencies.php) looks for
 * 'woocommerce/woocommerce.php' in the active_plugins option. The test
 * harness loads plugins by require(), so nothing is ever "activated" and
 * that option is empty - which would make is_woocommerce_active() return
 * false. add-to-cart-pro must stay absent from this list too:
 * enhanced-ajax-add-to-cart-wc.php only instantiates and runs the plugin
 * when is_a2cp_active() is false, and this suite is testing the free
 * plugin's own behavior, not what happens once the pro plugin takes over.
 *
 * Filtering the option rather than writing it: no database state, and it
 * applies before Enhanced_Ajax_Add_To_Cart_Wc_Dependencies caches the list
 * in its static on first call.
 */
function _eaa2c_declare_woocommerce_active() {
	return array( 'woocommerce/woocommerce.php' );
}
tests_add_filter( 'pre_option_active_plugins', '_eaa2c_declare_woocommerce_active' );

/**
 * Load WooCommerce, then this plugin.
 *
 * Order matters: this plugin's dependency check reads the active_plugins
 * option to decide whether WooCommerce is present, and its AJAX handler
 * calls WooCommerce functions directly, so WooCommerce has to exist first.
 */
function _eaa2c_manually_load_plugins() {
	require_once $GLOBALS['_eaa2c_wc_plugin'];
	require dirname( __DIR__ ) . '/enhanced-ajax-add-to-cart-wc.php';
}
tests_add_filter( 'muplugins_loaded', '_eaa2c_manually_load_plugins' );

/**
 * Run WooCommerce's installer so its schema exists.
 *
 * WP_UnitTestCase wraps each test in a transaction and rolls it back, but
 * CREATE TABLE is not transactional in MySQL - so the tables must be in
 * place before the first test rather than created inside one.
 */
function _eaa2c_install_woocommerce() {
	if ( ! class_exists( 'WC_Install' ) ) {
		echo "WooCommerce loaded but WC_Install is missing - cannot create the schema.\n";
		exit( 1 );
	}

	WC_Install::install();

	// Re-read the roles WC_Install just wrote.
	$GLOBALS['wp_roles'] = null;
	wp_roles();
}
tests_add_filter( 'setup_theme', '_eaa2c_install_woocommerce' );

require $_tests_dir . '/includes/bootstrap.php';
