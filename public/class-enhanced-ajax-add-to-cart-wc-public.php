<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       www.theritesites.com
 * @since      1.0.0
 *
 * @package    Enhanced_Ajax_Add_To_Cart_Wc
 * @subpackage Enhanced_Ajax_Add_To_Cart_Wc/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    Enhanced_Ajax_Add_To_Cart_Wc
 * @subpackage Enhanced_Ajax_Add_To_Cart_Wc/public
 * @author     TheRiteSites <contact@theritesites.com>
 */
class Enhanced_Ajax_Add_To_Cart_Wc_Public {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		// wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/enhanced-ajax-add-to-cart-wc-public.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		$plugin = $this->plugin_name;
		$js_file = '';
		$path = realpath(dirname(__FILE__));
		if ( file_exists( $path . '/js/enhanced-ajax-add-to-cart-wc.min.js' ) && !( EAA2C_DEBUG || WP_DEBUG ) ) {
			$js_file =  plugin_dir_url( __FILE__ ) . 'js/enhanced-ajax-add-to-cart-wc.min.js';
		}
		else
			$js_file =  plugin_dir_url( __FILE__ ) . 'js/enhanced-ajax-add-to-cart-wc-public.js';

		if( !empty( $js_file ) ) {

			wp_register_script( $plugin . '-js-bundle' , $js_file, array( 'jquery', 'wc-add-to-cart' ), $this->version, false );
			
			wp_localize_script( $plugin . '-js-bundle', 'EAA2C', array(
				'ajax_url'	=> admin_url( 'admin-ajax.php' ),
				'debug' => EAA2C_DEBUG,
			));
			wp_enqueue_script( $plugin . '-js-bundle' );
		}
	}
}
