<?php

/**
 * The file that defines the core plugin class
 *
 * A class definition that includes attributes and functions used across both the
 * public-facing side of the site and the admin area.
 *
 * This is used to define internationalization, admin-specific hooks, and
 * public-facing site hooks.
 *
 * Also maintains the unique identifier of this plugin as well as the current
 * version of the plugin.
 *
 * @link       www.theritesites.com
 * @package    Enhanced_Ajax_Add_To_Cart_Wc
 * @subpackage Enhanced_Ajax_Add_To_Cart_Wc/includes
 * @author     TheRiteSites <contact@theritesites.com>
 */
class Enhanced_Ajax_Add_To_Cart_Wc {

	/**
	 * The loader that's responsible for maintaining and registering all hooks that power
	 * the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      Enhanced_Ajax_Add_To_Cart_Wc_Loader    $loader    Maintains and registers all hooks for the plugin.
	 */
	protected $loader;

	/**
	 * The unique identifier of this plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $plugin_name    The string used to uniquely identify this plugin.
	 */
	protected $plugin_name;

	/**
	 * The current version of the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $version    The current version of the plugin.
	 */
	protected $version;

	protected $plugin_admin;

	protected $settings;

	/**
	 * Define the core functionality of the plugin.
	 *
	 * Set the plugin name and the plugin version that can be used throughout the plugin.
	 * Load the dependencies, define the locale, and set the hooks for the admin area and
	 * the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function __construct() {
		if ( defined( 'ENHANCED_AJAX_ADD_TO_CART' ) ) {
			$this->version = ENHANCED_AJAX_ADD_TO_CART;
		} else {
			$this->version = '1.0.0';
		}

		if ( ! defined( 'EAA2C_NAME' ) ) {
			define( 'EAA2C_NAME', 'enhanced-ajax-add-to-cart-wc' );
		}
		if ( ! defined( 'EAA2C_DEBUG' ) ) {
			$debug = get_option( 'eaa2c_debug', false );
			if ( strcmp( $debug, 'true' ) === 0 || strcmp( $debug, 'on' ) === 0 ) {
				$debug = true;
			}
			define( 'EAA2C_DEBUG', $debug );
		}
		
		$this->plugin_name = EAA2C_NAME;

		$this->load_dependencies();
		$this->set_locale();
		$this->register_settings();
		$this->define_admin_hooks();
		$this->define_public_hooks();

	}

	/**
	 * Load the required dependencies for this plugin.
	 *
	 * Include the following files that make up the plugin:
	 *
	 * - Enhanced_Ajax_Add_To_Cart_Wc_Loader. Orchestrates the hooks of the plugin.
	 * - Enhanced_Ajax_Add_To_Cart_Wc_i18n. Defines internationalization functionality.
	 * - Enhanced_Ajax_Add_To_Cart_Wc_Admin. Defines all hooks for the admin area.
	 * - Enhanced_Ajax_Add_To_Cart_Wc_Public. Defines all hooks for the public side of the site.
	 * - Enhanced_Ajax_Add_To_Cart_Wc_AJAX. Defines all the callback functions for AJAX functionality.
	 * 
	 * Create an instance of the loader which will be used to register the hooks
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function load_dependencies() {

		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'src/abstract-eaa2c-button.php';
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'src/class-eaa2c-loader.php';
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'src/class-eaa2c-settings.php';
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'src/class-eaa2c-i18n.php';
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'src/class-eaa2c-ajax.php';
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'src/class-eaa2c-admin.php';
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'src/class-eaa2c-public.php';
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'src/class-eaa2c-single.php';

		$this->loader = new Enhanced_Ajax_Add_To_Cart_Wc_Loader();

	}

    public function register_routes() {
        $namespace = 'eaa2c/v1';

        register_rest_route( $namespace, '/connect', array(
            array(
                'methods'   => WP_REST_Server::ALLMETHODS,
                'callback'  => array( $this, 'error_check_route' ),
                // 'permissions_callback    => array( $this, '' ),
                // 'args'      => array(
                //     'context' => array(
                //         'default'   => 'view',
                //     ),
                // ),
            )
		) );
	}

	public function error_check_route( WP_REST_Request $request ) {
		$params = $request->get_params();
		
		error_log( 'consumer key: ' . $params['consumer_key'] );
		error_log( 'consumer secret: ' . $params['consumer_secret'] );
		error_log( 'key id: ' . $params['key_id'] );
		return true;
	}

	public function register_app_rest() {
		?>
		<div class="error notice">

        	<p>OH HELLO!
			<?php
				error_log( "stuff" );
				$store_url = get_site_url();
				$endpoint = '/wc-auth/v1/authorize';
				$params = [
					'app_name' => 'Enhanced AJAX Add to Cart PHP',
					'scope' => 'read',
					'user_id' => get_current_user_id(),
					'return_url' => $store_url . '/wp-admin/options-general.php?page=the_rite_plugins_settings',
					'callback_url' => $store_url . '/wp-json/eaa2c/v1/connect'
				];
				$query_string = http_build_query( $params );

				echo '<a href="' . $store_url . $endpoint . '?' . $query_string . '" class="button btn btn-primary">Register!</a>';
			?>
			</p>
		</div>
		<?php
	}

	/**
	 * Define the locale for this plugin for internationalization.
	 *
	 * Uses the Enhanced_Ajax_Add_To_Cart_Wc_i18n class in order to set the domain and to register the hook
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function set_locale() {

		$plugin_i18n = new Enhanced_Ajax_Add_To_Cart_Wc_i18n();

		$this->loader->add_action( 'plugins_loaded', $plugin_i18n, 'load_plugin_textdomain' );

	}

	/**
	 * Call settings class for the plugin.
	 * 
	 * @since 2.0.0
	 * @access	private
	 */
	private function register_settings() {
		$settings = new Enhanced_Ajax_Add_To_Cart_Wc_Settings();

		$this->loader->add_action( 'admin_menu', $settings, 'register_menu_item' );
		$this->loader->add_action( 'admin_init', $settings, 'register_settings' );
		
	}

	/**
	 * Register all of the hooks related to the admin area functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_admin_hooks() {

		$this->plugin_admin = new Enhanced_Ajax_Add_To_Cart_Wc_Admin();

		// $this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_styles' );
		// $this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_scripts' );

		$this->loader->add_action( 'init', $this->plugin_admin, 'register_eaa2c_single', 9999 );
		// add_action( 'admin_notices', array( $this, 'register_app_rest' ) );
		// add_action( 'rest_api_init', array( $this, 'register_routes' ) );

	}

	/**
	 * Register all of the hooks related to the public-facing functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_public_hooks() {

		$plugin_public = new Enhanced_Ajax_Add_To_Cart_Wc_Public();

		$this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'register_styles' );
		$this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'register_scripts' );

	}

	/**
	 * Run the loader to execute all of the hooks with WordPress.
	 *
	 * @since    1.0.0
	 */
	public function run() {
		$this->loader->run();
	}

	/**
	 * The name of the plugin used to uniquely identify it within the context of
	 * WordPress and to define internationalization functionality.
	 *
	 * @since     1.0.0
	 * @return    string    The name of the plugin.
	 */
	public function get_plugin_name() {
		return $this->plugin_name;
	}

	/**
	 * The reference to the class that orchestrates the hooks with the plugin.
	 *
	 * @since     1.0.0
	 * @return    Enhanced_Ajax_Add_To_Cart_Wc_Loader    Orchestrates the hooks of the plugin.
	 */
	public function get_loader() {
		return $this->loader;
	}

	/**
	 * Retrieve the version number of the plugin.
	 *
	 * @since     1.0.0
	 * @return    string    The version number of the plugin.
	 */
	public function get_version() {
		return $this->version;
	}

}
