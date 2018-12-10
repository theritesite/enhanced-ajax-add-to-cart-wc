<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       www.theritesites.com
 * @since      1.0.0
 *
 * @package    Enhanced_Ajax_Add_To_Cart_Wc
 * @subpackage Enhanced_Ajax_Add_To_Cart_Wc/admin
 */


/**
 * The server side callback when the button is pressed to verify and add the variable product to the current cart
 * 
 * @since 1.0.0
 */
function variable_add_to_cart_callback() {

	ob_start();
	$data = array();

	if( !empty( $_POST['product'] ) && !empty( $_POST['variable'] ) && !empty( $_POST['quantity'] ) ) {
		try {
			$product_id = $_POST['product'] ;
			$variation_id = $_POST['variable'];
			$quantity = $_POST['quantity'];
			$product = wc_get_product( $variation_id );
			// No variations needed since there are none for crank?
			// $variations = array();
			$variations = $variation_id ? $product->get_variation_attributes( $variation_id ) : null;
			$product_status    = get_post_status( $product_id );
			$passed_validation =  apply_filters( 'woocommerce_add_to_cart_validation', true, $variation_id, $quantity );

			if( $passed_validation && WC()->cart->add_to_cart( $product_id, $quantity, $variation_id, $variations, $cart_item_data ) && 'publish' === $product_status ) {
				do_action( 'woocommerce_ajax_added_to_cart', $product_id );
				WC_AJAX::get_refreshed_fragments();
				// $data['product_id'] = $product_id;
				// wp_send_json( $data );

			} else {

				$data = array(
					'error' => true
				);
			}
			// return $res;

		} catch (Exception $e) {
			return new WP_Error('add_to_cart_error', $e->getMessage(), array('status' => 500));
		}
	}
	else{
		$data['error'] = "no product received";
	}
	wp_send_json( $data );

	die();
}
add_action( 'wp_ajax_variable_add_to_cart', 'variable_add_to_cart_callback' );
add_action( 'wp_ajax_nopriv_variable_add_to_cart', 'variable_add_to_cart_callback' );

/**
 * The server side callback when the button is pressed to verify and add the simple product to the current cart
 * 
 * @since 1.0.0
 */
function simple_add_to_cart_callback() {

	ob_start();
	$data = array();

	if( !empty( $_POST['product'] ) && !empty( $_POST['quantity'] ) ) {
		try {
			$product_id = $_POST['product'] ;
			$quantity = $_POST['quantity'];
			$product = wc_get_product( $product_id );
			$product_status    = get_post_status( $product_id );
			$passed_validation =  apply_filters( 'woocommerce_add_to_cart_validation', true, $product_id, $quantity );

			if( $passed_validation && WC()->cart->add_to_cart( $product_id, $quantity, null, null, $cart_item_data ) && 'publish' === $product_status ) {
				do_action( 'woocommerce_ajax_added_to_cart', $product_id );
				WC_AJAX::get_refreshed_fragments();
				// $data['product_id'] = $product_id;
				// wp_send_json( $data );

			} else {

				$data = array(
					'error' => true
				);
			}
			// return $res;

		} catch (Exception $e) {
			return new WP_Error('add_to_cart_error', $e->getMessage(), array('status' => 500));
		}
	}
	else{
		$data['error'] = "no product received";
	}
	wp_send_json( $data );

	die();
}
add_action( 'wp_ajax_simple_add_to_cart', 'simple_add_to_cart_callback' );
add_action( 'wp_ajax_nopriv_simple_add_to_cart', 'simple_add_to_cart_callback' );


/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
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
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

		add_shortcode( 'enh_ajax_add_to_cart_button', array( $this, 'enhanced_ajax_add_to_cart_shortcode' ) );

	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		// wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/enhanced-ajax-add-to-cart-wc-admin.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		// wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/enhanced-ajax-add-to-cart-wc-admin.js', array( 'jquery' ), $this->version, false );

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
			'show_quantity' => ''  // Added in version 1.1.0
		), $atts);

		if( !empty( $att_array['product'] ) )
			$add_to_cart_html = $this->display_variable_product_add_to_cart( $att_array );
		
		return $add_to_cart_html ;
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

		$a2c_html = '';
		$product = false;
		$product_id = false;
		$variation = false;
		$variation_id = false;

		$product_id = $att_array['product'];
		$title = $att_array['title'];

		$_pf = new WC_Product_Factory();
		$product = $_pf->get_product($product_id);
		
		if( $att_array['variation'] != '' ) {
			$variation_id = $att_array['variation'];
			$variation = wc_get_product( $variation_id );
		}

		if( !is_null($product) ){

			if( $variation_id != false )
				$a2c_html .= '<div class="woocommerce-variation-add-to-cart variations_button">';
			else
				$a2c_html .= '<div class="woocommerce-simple-add-to-cart simple_button">';
			/** Added conditional to display title of ajax button and quantity or not based on "title" attribute
			 *  if title=attributes then display only the attributes/variation qualifiers
			 *  if title=none dont display anything
			 *  else display the full variation name
			 *  @since 1.1.0
			 */
			if( $title == 'attributes' || $title == 'attribute' || $title == 'att' ){
				$att_title = '';
				foreach($variation->get_variation_attributes() as $key => $attribute)
					$att_title .= $attribute . ' ';
				$a2c_html .= '<span style="float:left; margin-right:0.72em; padding: 8px 0;">' . $att_title . '</span>';
			}
			elseif( $title != 'none' ) {
				$a2c_html .= '<span style="float:left; margin-right:0.72em; padding: 8px 0;">' . ($variation ? $variation->get_name() : $product->get_name()) . '</span>';
			}

			$a2c_html .= '<span style="float:left; margin-right:0.72em;">';
			
			// Input values for the number input box and related fields
			$input_id    = 'product_' . ( $variation_id ? $variation_id : $product_id ). '_qty';
			$input_name  = 'quantity';
			
			// Added version 1.1.0
			// If there was quantity specified, start processing for default quantity
			if( $att_array['quantity'] != '' && $att_array['show_quantity'] != 'yes' ) {
				$a2c_html .= '<input type="hidden" id="' . esc_attr( $input_id ) . '" name="' . esc_attr( $input_name ) .
								'" value="' . esc_attr( $att_array['quantity'] ) . '">';
			}
			if( $att_array['quantity'] == '' || $att_array['show_quantity'] == 'yes' ) {
			
				// If there was a quantity specified on the shortcode, and there is to be number input box
				// Set the input value to be the quantity specified
				if( $att_array['show_quantity'] == 'yes' && $att_array['quantity'] != '' )
					$input_value = $att_array['quantity'];
				// Otherwise continue as normal
				else
					$input_value = isset( $_POST['quantity'] ) ? wc_stock_amount( $_POST['quantity'] ) : $product->get_min_purchase_quantity();
				
				$max_value   = apply_filters( 'woocommerce_quantity_input_max', $product->get_max_purchase_quantity(), $product );
				$min_value   = apply_filters( 'woocommerce_quantity_input_min', $product->get_min_purchase_quantity(), $product );
				$step        = apply_filters( 'woocommerce_quantity_input_step', 1, $product );
				$pattern     = apply_filters( 'woocommerce_quantity_input_pattern', has_filter( 'woocommerce_stock_amount', 'intval' ) ? '[0-9]*' : '' );
				$inputmode   = apply_filters( 'woocommerce_quantity_input_inputmode', has_filter( 'woocommerce_stock_amount', 'intval' ) ? 'numeric' : '' );

				$a2c_html .= '<div class="quantity">';
				$a2c_html .= '<input type="number" id="' . esc_attr( $input_id ) . '" class="input-text qty text" step="' . esc_attr( $step ) . '" min="' .
								esc_attr( $min_value ) . '" max="' . esc_attr( 0 < $max_value ? $max_value : '' ) . '" name="' . esc_attr( $input_name ) . 
								'" value="' . esc_attr( $input_value ) . '" title="' . esc_attr_x( 'Qty', 'Product quantity input tooltip', 'woocommerce' ) . 
								'" size="4" pattern="' . esc_attr( $pattern ) . '" inputmode="' . esc_attr( $inputmode ) . '" />';
				$a2c_html .= '</div>';
				// End quantity box and related variables usage
			}

			$a2c_html .= '</span>';

			if( $variation_id != false ) {
				$a2c_html .= '<button type="submit" class="variable_add_to_cart_button button alt" data-pid="' . absint( $product->get_id() ) .
							'" data-vid="' . absint( $variation_id ) . '">' . esc_html( $product->single_add_to_cart_text() ) . '</button>';
			}
			else {
				$a2c_html .= '<button type="submit" class="simple_add_to_cart_button button alt" data-pid="' . absint( $product->get_id() ) . '">' .
							esc_html( $product->single_add_to_cart_text() ) . '</button>';
			}
			$a2c_html .= '</div>';
		}

		return $a2c_html;
	}
}
