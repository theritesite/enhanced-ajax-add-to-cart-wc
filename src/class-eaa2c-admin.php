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
			'debug'		=> 'true',
			'route'		=> get_site_url(),
			'baseURL'	=> get_rest_url() ,
			'nonce' 	=> wp_create_nonce( 'wp_rest' ),
			'image'		=> get_option( 'eaa2c_image_field' ),
			'custom'	=> get_option( 'eaa2c_custom_field' ),
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
			'attributes' 	=> array(
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
				'products' => array(
					'type' => 'object',
					'default' => array(),
					'items' => array (
						'type'	=> 'array',
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
			),
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
			'route'		=> get_site_url(),
			'baseURL'	=> get_rest_url(),
			'nonce' 	=> wp_create_nonce( 'wp_rest' ),
			'image'		=> get_option( 'eaa2c_image_field' ),
			'custom'	=> get_option( 'eaa2c_custom_field' ),
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

		register_block_type( 'enhanced-ajax-add-to-cart-for-wc/eaa2c-group', array(
			'editor_script' => 'eaa2c-group-block-editor',
			'editor_style'  => 'eaa2c-group-block-editor-style',
			'style'         => 'eaa2c-group-block',
			'attributes' 	=> array(
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
			),
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
}
