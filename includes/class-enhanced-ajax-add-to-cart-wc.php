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
		$this->plugin_name = 'enhanced-ajax-add-to-cart-wc';

		$this->load_dependencies();
		$this->set_locale();
		$this->define_admin_hooks();
		$this->define_public_hooks();


		add_action( 'init', array( $this, 'register_eaa2c' ), 9999 );
		add_action( 'admin_notices', array( $this, 'register_app_rest' ) );
		add_action( 'rest_api_init', array( $this, 'register_routes' ) );

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

		/**
		 * The class responsible for orchestrating the actions and filters of the
		 * core plugin.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-enhanced-ajax-add-to-cart-wc-loader.php';

		/**
		 * The class responsible for defining internationalization functionality
		 * of the plugin.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-enhanced-ajax-add-to-cart-wc-i18n.php';

		/**
		 * The class responsible for listening for AJAX actions and kicking off
		 * the functions for the respective action.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-enhanced-ajax-add-to-cart-wc-ajax.php';

		/**
		 * The class responsible for defining all actions that occur in the admin area.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/class-enhanced-ajax-add-to-cart-wc-admin.php';

		/**
		 * The class responsible for defining all actions that occur in the public-facing
		 * side of the site.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/class-enhanced-ajax-add-to-cart-wc-public.php';

		// require_once plugin_dir_path( dirname( __FILE__ ) ) . 'blocks/eaa2c.php';
	
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

	public function register_eaa2c() {

		// Skip block registration if Gutenberg is not enabled/merged.
		if ( ! function_exists( 'register_block_type' ) ) {
			// error_log( "issue" );
			return;
		}

		// error_log( "good" );
		// $dir = plugin_dir_path( dirname( __FILE__ ) ) . 'blocks/eaa2c/';
		// $dir = plugin_dir_path( dirname( __FILE__ ) ) . 'build/';
		$dir = plugin_dir_path( dirname( __FILE__ ) ) . 'dist/blocks/';

		// $index_js = 'index.js';
		$index_js = 'eaa2c.js';
		wp_register_script(
			'eaa2c-block-editor',
			plugins_url( $index_js, $dir .'blocks/' ),
			// plugins_url( $index_js, $dir . 'eaa2c/' ),
			array(
				'wp-blocks',
				'wp-i18n',
				'wp-element',
				'wp-components',
				'wp-block-editor',
				'wp-editor',
			),
			filemtime( "$dir/$index_js" )
		);

		wp_localize_script( 'eaa2c-block-editor', 'EAA2C', array(
			'curr_user' => get_current_user_id(),
			'route'		=> get_site_url(),
		) );

		$dir = plugin_dir_path( dirname( __FILE__ ) ) . 'blocks/eaa2c/';
		$editor_css = 'editor.css';
		wp_register_style(
			'eaa2c-block-editor-style',
			plugins_url( $editor_css, $dir . 'eaa2c/' ),
			array(),
			filemtime( "$dir/$editor_css" )
		);

		$style_css = 'style.css';
		wp_register_style(
			'eaa2c-block',
			plugins_url( $style_css, $dir . 'eaa2c/' ),
			array( 'wp-editor' ),
			filemtime( "$dir/$style_css" )
		);

		register_block_type( 'enhanced-ajax-add-to-cart-for-wc/eaa2c', array(
			'editor_script' => 'eaa2c-block-editor',
			'editor_style'  => 'eaa2c-block-editor-style',
			'style'         => 'eaa2c-block',
			// 'attributes' 	=> array(
			// 	'editMode' => array(
			// 		'type' => 'boolean',
			// 		'default' => true,
			// 	),
			// 	'isPreview' => array(
			// 		'type' => 'boolean',
			// 		'default' => false,
			// 	),
			// 	'contentVisibility' => array(
			// 		'type' => 'object',
			// 		'default' => array(
			// 			'title' => true,
			// 			'price' => true,
			// 			'quantity' => true,
			// 		),
			// 	),
			// 	'buttonText' => array(
			// 		'type' => 'string',
			// 		'default' => 'Add to cart',
			// 	),
			// 	'product' => array(
			// 		'type' => 'integer',
			// 		'default' => null,
			// 	),
				// 'render_callback' => array( $this, 'render' ),
			// )
		) );

		// error_log( "registered" );
	}

	public function render( $attributes = array(), $content = '' ) {
		// $this->attributes = $this->parse_attributes( $attributes );
		$this->content    = $content;
		// $this->query_args = $this->parse_query_args();
		// $products         = $this->get_products();
		// $classes          = $this->get_container_classes();
		$output           = 'kajsdalskdjaksjd';

		return sprintf( '<div class="%s"><ul class="wc-block-grid__products">%s</ul></div>', 'cont', $output );
	}

	protected function parse_attributes( $attributes ) {
		// These should match what's set in JS `registerBlockType`.
		$defaults = array(
			'columns'           => wc_get_theme_support( 'product_blocks::default_columns', 3 ),
			'rows'              => wc_get_theme_support( 'product_blocks::default_rows', 1 ),
			'alignButtons'      => false,
			'categories'        => array(),
			'catOperator'       => 'any',
			'contentVisibility' => array(
				'title'  => true,
				'price'  => true,
				'rating' => true,
				'button' => true,
			),
		);
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
	 * Register all of the hooks related to the admin area functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_admin_hooks() {

		$this->plugin_admin = new Enhanced_Ajax_Add_To_Cart_Wc_Admin( $this->get_plugin_name(), $this->get_version() );

		// $this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_styles' );
		// $this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_scripts' );

	}

	/**
	 * Register all of the hooks related to the public-facing functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_public_hooks() {

		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/class-enhanced-ajax-add-to-cart-wc-public.php';

		$plugin_public = new Enhanced_Ajax_Add_To_Cart_Wc_Public( $this->get_plugin_name(), $this->get_version() );

		$this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'enqueue_styles' );
		$this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'enqueue_scripts' );

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
