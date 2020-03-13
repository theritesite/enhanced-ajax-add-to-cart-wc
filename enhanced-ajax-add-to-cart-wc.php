<?php

/**
 * The plugin bootstrap file
 *
 * @link              www.theritesites.com
 * @since             1.0.0
 * @package           Enhanced_Ajax_Add_To_Cart_Wc
 *
 * @wordpress-plugin
 * Plugin Name:       Enhanced AJAX Add to Cart for WooCommerce
 * Plugin URI:        https://www.theritesites.com/plugins/enhanced-ajax-add-to-cart-wc
 * Description:       Creates a shortcode for you to be able to add an AJAX button with an associated quantity for you WooCommerce Product
 * Version:           1.3.2
 * Author:            TheRiteSites
 * Author URI:        https://www.theritesites.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       enhanced-ajax-add-to-cart-wc
 * Domain Path:       /languages
 * WC tested up to: 3.9
 * WC requires at least: 3.0
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

if ( ! function_exists( 'is_woocommerce_active' ) ) {
	require_once( 'woo-includes/woo-functions.php' );
}

/**
 * Current plugin version.
 */
define( 'ENHANCED_AJAX_ADD_TO_CART', '1.3.2' );
define( 'EAA2C_DEBUG', false );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-enhanced-ajax-add-to-cart-wc-activator.php
 */
function activate_enhanced_ajax_add_to_cart_wc() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-enhanced-ajax-add-to-cart-wc-activator.php';
	Enhanced_Ajax_Add_To_Cart_Wc_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-enhanced-ajax-add-to-cart-wc-deactivator.php
 */
function deactivate_enhanced_ajax_add_to_cart_wc() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-enhanced-ajax-add-to-cart-wc-deactivator.php';
	Enhanced_Ajax_Add_To_Cart_Wc_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_enhanced_ajax_add_to_cart_wc' );
register_deactivation_hook( __FILE__, 'deactivate_enhanced_ajax_add_to_cart_wc' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-enhanced-ajax-add-to-cart-wc.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_enhanced_ajax_add_to_cart_wc() {

	$plugin = new Enhanced_Ajax_Add_To_Cart_Wc();
	$plugin->run();

}
run_enhanced_ajax_add_to_cart_wc();
