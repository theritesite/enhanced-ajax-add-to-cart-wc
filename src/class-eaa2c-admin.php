<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       www.theritesites.com
 * @since      1.0.0
 *
 * @package    Enhanced_Ajax_Add_To_Cart_Wc
 * @subpackage Enhanced_Ajax_Add_To_Cart_Wc/admin
 * @author     TheRiteSites <contact@theritesites.com>
 */

class Enhanced_Ajax_Add_To_Cart_Wc_Admin {

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

	private $filteredImageSizes = array();

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 */
	public function __construct() {

		$this->plugin_name = EAA2C_NAME;
		$this->version = ENHANCED_AJAX_ADD_TO_CART;

		add_shortcode( 'enh_ajax_add_to_cart_button', array( $this, 'enhanced_ajax_add_to_cart_shortcode' ) );
		add_shortcode( 'ajax_add_to_cart', array( $this, 'enhanced_ajax_add_to_cart_shortcode' ) );

	}

	public function register_scripts() {
		$plugin = defined( 'EAA2C_NAME' ) ? EAA2C_NAME : '';
		$index_js = 'eaa2c-settings.js';
		$js_file =  plugin_dir_url( __DIR__ ) . 'assets/js/eaa2c-settings.js';

		$path = realpath( dirname( __DIR__ ) ) . '/dist/request/';
		if ( file_exists( $path . $index_js ) && ! ( EAA2C_DEBUG || WP_DEBUG ) ) {
			$dir = plugin_dir_path( dirname( __FILE__ ) ) . 'dist/request/';
			$js_file =  plugins_url( $index_js, $dir .'request/' );
		}
		wp_register_script( 'eaa2c-settings',
			$js_file,
			array(),
			filemtime( realpath("$js_file") )
		);
		wp_localize_script( 'eaa2c-settings', 'EAA2CSETTINGS', array(
			'ajax_url'	=> admin_url( 'admin-ajax.php' ),
			'db_key' => get_option( EAA2C_LICENSE_KEY ),
			'debug' => EAA2C_DEBUG,
			'nonce' => wp_create_nonce( 'eaa2c_nonce' ),
		));
	}

	/**
	 * Handle for variable product ajax add to cart shortcode. Calls the function to display the html.
	 * 
	 * @since 1.0.0
	 * 
	 * @param $atts	array	contains passed variables from shortcode
	 * @param $content	string	contains passed html between shortcode start and end
	 * 
	 * @return	$add_to_cart_html	html to display from shortcode logic
	 */
	public function enhanced_ajax_add_to_cart_shortcode( $atts, $content = null ) {
		$add_to_cart_html = '';
		$att_array = shortcode_atts(array(
	        'product'		=> '',
			'variation'		=> '',
			'title'			=> '',
			'quantity'		=> '', // Added in version 1.1.0
			'show_quantity' => '', // Added in version 1.1.0
			'show_price'	=> '', // Added in version 1.3.0
			'button_text'	=> '', // Added in version 1.3.0
			'class'			=> ''  // Added in version 2.0.0
		), $atts);

		// $args = $this->parse_shortcode_args_to_new( $att_array );

		// wp_enqueue_style( EAA2C_NAME );
		// wp_enqueue_script( EAA2C_NAME . '-js-bundle' );

		return $this->render_from_shortcode( $att_array, $content );
		// return $this->renderHtml( $args );

		// if ( ! empty( $att_array['product'] ) )
		// 	$add_to_cart_html = $this->display_variable_product_add_to_cart( $att_array );
		
		// return $add_to_cart_html;
	}

	/**
	 * Generates html and sets up variables for javascript calls
	 * 
	 * @since 1.0.0
	 * 
	 * @param $att_array	array	attributes passed by shortcode
	 * 
	 * @return via writing and echoing html, returns all the html for buttons
	 */
	public function display_variable_product_add_to_cart( $att_array ) {
		_deprecated_function( __FUNCTION__, '2.0', 'render_from_shortcode' );

		return $this->render_from_shortcode( $att_array );
	}

	/**
	 * Converts shortcode attributes to block and renders
	 * 
	 * @since 2.0.0
	 * 
	 * @param $att_array	array	attributes passed by shortcode
	 * 
	 * @return via writing and echoing html, returns all the html for buttons.
	 */
	public function render_from_shortcode( $att_array = array(), $content = '' ) {
		if ( ! empty( $att_array ) ) {
			$block = new Enhanced_Ajax_Add_To_Cart_Wc_Single( $att_array );
			// $block->parse_shortcode_args_to_block_args( $att_array );
			return $block->render();
		}
	}

	/**
	 * Blocks
	 */
	public function register_eaa2c_single() {

		// Skip block registration if Gutenberg is not enabled/merged.
		if ( ! function_exists( 'register_block_type' ) ) {
			return;
		}

		$dir = plugin_dir_path( dirname( __FILE__ ) ) . 'dist/blocks/';

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
			'debug'			=> 'true',
			'route'			=> get_site_url(),
			'baseURL'		=> get_rest_url() ,
			'nonce' 		=> wp_create_nonce( 'wp_rest' ),
			'image'			=> get_option( 'eaa2c_image_field' ),
			'custom'		=> get_option( 'eaa2c_custom_field' ),
			'customClass'	=> get_option( 'eaa2c_custom_class' ),
			'imageSizes'	=> $this->get_filtered_image_sizes(),
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

		$attributes = array(
			'editMode' => array(
				'type' => 'boolean',
				'default' => true,
			),
			'isPreview' => array(
				'type' => 'boolean',
				'default' => false,
			),
			'buttonText' => array(
				'type' => 'string',
				'default' => 'Add to cart',
			),
			'contentOrder' => array(
				'type' => 'array',
				'default' => array(
					'title',
					'separator',
					'price',
					'quantity',
					'button',
				),
				'items' => array (
					'type'	=> 'string',
				),
			),
			'contentVisibility' => array(
				'type' => 'object',
				'default' => array(
					'title' => true,
					'price' => true,
					'quantity' => true,
					'button' => true,
					'separator' => true,
				),
				'items' => array (
					'type'	=> 'boolean',
				),
			),
			'order' => array(
				'type' => 'string',
				'default' => 'DESC',
			),
			'orderby' => array(
				'type' => 'string',
				'default' => 'name',
			),
			'products' => array(
				'type' => 'object',
				'default' => array(),
				'items' => array (
					'type'	=> 'array',
				),
			),
			'quantity' => array(
				'type' => 'object',
				'default' => array(
					'default' => 1,
					'min' => 1,
					'max' => -1,
				),
				'items' => array (
					'type'	=> 'int',
				),
			),
			'titleType' => array(
				'type' => 'string',
				'default' => 'full',
			),
			'variations' => array(
				'type' => 'object',
				'default' => array(),
				'items' => array (
					'type'	=> 'array',
				),
			)
		);

		if ( 'on' === get_option( 'eaa2c_image_field' ) ) {
			$attributes['image'] = array(
				'type'	=> 'string',
				'default' => 'thumbnail',
			);
			$inserted = array( 'image' => false );
			array_push( $attributes['contentVisibility']['default'], $inserted );
			$inserted = 'image';
			array_splice( $attributes['contentOrder'], 0, 0, $inserted );
		}

		if ( 'on' === get_option( 'eaa2c_custom_field' ) ) {
			$attributes['custom'] = array(
				'type'	=> 'string',
				'default' => '',
			);
			$inserted = array( 'custom' => false );
			array_push( $attributes['contentVisibility']['default'], $inserted );
			$inserted = 'custom';
			array_splice( $attributes['contentOrder'], 1, 0, $inserted );
		}

		register_block_type( 'enhanced-ajax-add-to-cart-for-wc/eaa2c', array(
			'editor_script' => 'eaa2c-block-editor',
			'editor_style'  => 'eaa2c-block-editor-style',
			'style'         => 'eaa2c-block',
			'attributes' 	=> $attributes,
			'render_callback' => array( $this, 'render_from_block' ),
		) );

	}

	/**
	 * Converts shortcode attributes to block and renders
	 * 
	 * @since 2.0.0
	 * 
	 * @param $att_array	array	attributes passed by shortcode
	 * 
	 * @return via writing and echoing html, returns all the html for buttons.
	 */
	public function render_from_block( $raw_attributes = array(), $content = '' ) {
		if ( ! empty( $raw_attributes ) ) {
			$block = new Enhanced_Ajax_Add_To_Cart_Wc_Single( $raw_attributes );
			return $block->render();
		}
	}

	public function register_eaa2c_group() {

		// Skip block registration if Gutenberg is not enabled/merged.
		if ( ! function_exists( 'register_block_type' ) ) {
			return;
		}

		$dir = plugin_dir_path( dirname( __FILE__ ) ) . 'dist/blocks/';

		$index_js = 'eaa2c-group.js';
		wp_register_script(
			'eaa2c-group-block-editor',
			plugins_url( $index_js, $dir .'blocks/' ),
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

		wp_localize_script( 'eaa2c-group-block-editor', 'EAA2CGROUP', array(
			'route'			=> get_site_url(),
			'baseURL'		=> get_rest_url(),
			'nonce' 		=> wp_create_nonce( 'wp_rest' ),
			'image'			=> get_option( 'eaa2c_image_field' ),
			'custom'		=> get_option( 'eaa2c_custom_field' ),
			'customClass'	=> get_option( 'eaa2c_custom_class' ),
			'imageSizes'	=> $this->get_filtered_image_sizes(),
		) );

		$dir = plugin_dir_path( dirname( __FILE__ ) ) . 'blocks/eaa2c-group/';
		$editor_css = 'editor.css';
		wp_register_style(
			'eaa2c-group-block-editor-style',
			plugins_url( $editor_css, $dir . 'eaa2c/' ),
			array(),
			filemtime( "$dir/$editor_css" )
		);

		$style_css = 'style.css';
		wp_register_style(
			'eaa2c-group-block',
			plugins_url( $style_css, $dir . 'eaa2c-group/' ),
			array( 'wp-editor' ),
			filemtime( "$dir/$style_css" )
		);

		$contentOrderDefaults = array(
			'title',
			'separator',
			'price',
			'quantity',
			'button',
		);

		$contentVisibilityDefaults = array(
			'title' => true,
			'price' => true,
			'quantity' => true,
			'button' => true,
			'separator' => true,
		);


		$attributes = array(
			'editMode' => array(
				'type' => 'boolean',
				'default' => true,
			),
			'isPreview' => array(
				'type' => 'boolean',
				'default' => false,
			),
			'buttonText' => array(
				'type' => 'string',
				'default' => 'Add to cart',
			),
			'contentOrder' => array(
				'type' => 'array',
				'default' => $contentOrderDefaults,
				'items' => array (
					'type'	=> 'string',
				),
			),
			'contentVisibility' => array(
				'type' => 'object',
				'default' => $contentVisibilityDefaults,
				'items' => array (
					'type'	=> 'boolean',
				),
			),
			'order' => array(
				'type' => 'string',
				'default' => 'DESC',
			),
			'orderby' => array(
				'type' => 'string',
				'default' => 'name',
			),
			'products' => array(
				'type' => 'object',
				'default' => array(),
				'items' => array (
					'type'	=> 'array',
				),
			),
			'quantity' => array(
				'type' => 'object',
				'default' => array(
					'default' => 1,
					'min' => 1,
					'max' => -1,
				),
				'items' => array (
					'type'	=> 'int',
				),
			),
			'titleType' => array(
				'type' => 'string',
				'default' => 'full',
			),
			'variations' => array(
				'type' => 'object',
				'default' => array(),
				'items' => array (
					'type'	=> 'array',
				),
			)
		);


		if ( 'on' === get_option( 'eaa2c_image_field' ) ) {
			$attributes['image'] = array(
				'type'	=> 'string',
				'default' => 'thumbnail',
			);
			if ( ! isset( $attributes['contentVisibility']['default']['image'] ) ) {
				$attributes['contentVisibility']['default']['image'] = false;
			}
			$inserted = array('image');
			array_splice( $attributes['contentOrder']['default'], 1, 0, $inserted );
		}

		if ( 'on' === get_option( 'eaa2c_custom_field' ) ) {
			$attributes['custom'] = array(
				'type'	=> 'string',
				'default' => '',
			);
			// $inserted = array( 'custom' => false );
			if ( ! isset( $attributes['contentVisibility']['default']['custom'] ) ) {
				$attributes['contentVisibility']['default']['custom'] = false;
			}
			// array_push( $attributes['contentVisibility']['default'], $inserted );
			$inserted = array('custom');
			array_splice( $attributes['contentOrder']['default'], 1, 0, $inserted );
		}

		register_block_type( 'enhanced-ajax-add-to-cart-for-wc/eaa2c-group', array(
			'editor_script'   => 'eaa2c-group-block-editor',
			'editor_style'    => 'eaa2c-group-block-editor-style',
			'style'           => 'eaa2c-group-block',
			'attributes' 	  => $attributes,
			'render_callback' => array( $this, 'render_group_from_block' ),
		) );

	}

	/**
	 * Converts shortcode attributes to block and renders
	 * 
	 * @since 2.0.0
	 * 
	 * @param $att_array	array	attributes passed by shortcode
	 * 
	 * @return via writing and echoing html, returns all the html for buttons.
	 */
	public function render_group_from_block( $raw_attributes = array(), $content = '' ) {
		if ( ! empty( $raw_attributes ) ) {
			$block = new Enhanced_Ajax_Add_To_Cart_Wc_Group( $raw_attributes );
			return $block->render();
		}
	}

	protected function get_filtered_image_sizes() {

		if ( empty( $this->filteredImageSizes ) ) {
			$this->filteredImageSizes = apply_filters( 'image_size_names_choose',
				array(
					'thumbnail' => __( 'Thumbnail' ),
					'medium'    => __( 'Medium' ),
					'large'     => __( 'Large' ),
					'full'      => __( 'Full Size' ),
					'inline'	=> __( 'Inline' ),
				)
			);
		}

		return $this->filteredImageSizes;
	}

	/**
	 * Catch and display admin error messages specifically for plugin licensing
	 * 
	 * @since
	 */
	public function handle_admin_notices() {
		if ( isset( $_GET['eaa2c_activation'] ) && ! empty( $_GET['message'] ) ) {
			switch( $_GET['eaa2c_activation'] ) {
	
				case 'false':
					$message = urldecode( $_GET['message'] );
					?>
					<div class="error">
						<p><?php echo $message; ?></p>
					</div>
					<?php
					break;
	
				case 'true':
					
				default:
					// Developers can put a custom success message here for when activation is successful if they way.
					break;
	
			}
			remove_query_arg( 'eaa2c_activation' );
		}
	}
}
