<?php

/**
 * The file that defines the server side functionality during AJAX requests
 *
 * @since      1.1.2
 * @link       www.theritesites.com
 * @package    Enhanced_Ajax_Add_To_Cart_Wc
 * @subpackage Enhanced_Ajax_Add_To_Cart_Wc/includes
 * @author     TheRiteSites <contact@theritesites.com>
 */

defined('ABSPATH') || exit;

class Enhanced_Ajax_Add_To_Cart_Wc_AJAX {

    public static function init() {

        add_action( 'wp_ajax_simple_add_to_cart', array( __CLASS__, 'simple_add_to_cart_callback' ) );
        add_action( 'wp_ajax_nopriv_simple_add_to_cart', array( __CLASS__, 'simple_add_to_cart_callback' ) );
        
        add_action( 'wp_ajax_variable_add_to_cart', array( __CLASS__, 'variable_add_to_cart_callback' ) );
        add_action( 'wp_ajax_nopriv_variable_add_to_cart', array( __CLASS__, 'variable_add_to_cart_callback' ) );
    }

    /**
     * The server side callback when the button is pressed to verify and add the variable product to the current cart
     * 
     * @since 1.0.0
     */
    public static function variable_add_to_cart_callback() {

        if(!check_ajax_referer('eaa2c-security', 'security')) {
            wp_send_json();
            wp_die();
        }

        ob_start();
        $data = array();

        if( !empty( $_POST['product'] ) && !empty( $_POST['variable'] ) && !empty( $_POST['quantity'] ) ) {
            try {
                $product_id = $_POST['product'] ;
                $variation_id = $_POST['variable'];
                $quantity = $_POST['quantity'];
                $product = wc_get_product( $variation_id );
                $variations = $variation_id ? $product->get_variation_attributes( $variation_id ) : null;
                $product_status    = get_post_status( $product_id );
                $passed_validation =  apply_filters( 'woocommerce_add_to_cart_validation', true, $variation_id, $quantity );

                if( $passed_validation && WC()->cart->add_to_cart( $product_id, $quantity, $variation_id, $variations ) && 'publish' === $product_status ) {
                    do_action( 'woocommerce_ajax_added_to_cart', $product_id );
                    WC_AJAX::get_refreshed_fragments();

                } else {

                    $data = array(
                        'error' => true
                    );
                }

            } catch (Exception $e) {
                return new WP_Error('add_to_cart_error', $e->getMessage(), array('status' => 500));
            }
        }
        else{
            $data['error'] = "no product received";
        }
        wc_get_notices( array() );
        wc_print_notices();
        $html = ob_get_contents();
        ob_end_clean();
        $data['html'] = $html;
        wp_send_json( $data );

        wp_die();
    }

    /**
     * The server side callback when the button is pressed to verify and add the simple product to the current cart
     * 
     * @since 1.0.0
     */
    public static function simple_add_to_cart_callback() {

        if(!check_ajax_referer('eaa2c-security', 'security')) {
            wp_send_json();
            wp_die();
        }

        ob_start();

        $data = array();

        if( !empty( $_POST['product'] ) && !empty( $_POST['quantity'] ) ) {
            try {
                $product_id = $_POST['product'] ;
                $quantity = $_POST['quantity'];
                $product = wc_get_product( $product_id );
                $product_status    = get_post_status( $product_id );
                $passed_validation =  apply_filters( 'woocommerce_add_to_cart_validation', true, $product_id, $quantity );

                if( $passed_validation && WC()->cart->add_to_cart( $product_id, $quantity, null, null ) && 'publish' === $product_status ) {
                    do_action( 'woocommerce_ajax_added_to_cart', $product_id );
                    WC_AJAX::get_refreshed_fragments();
                    
                } else {

                    $data = array(
                        'error' => true
                    );
                }

            } catch (Exception $e) {
                return new WP_Error('add_to_cart_error', $e->getMessage(), array('status' => 500));
            }
        }
        else{
            $data['error'] = "no product received";
        }

        wc_get_notices( array() );
        wc_print_notices();
        $html = ob_get_contents();
        ob_end_clean();
        $data['html'] = $html;
        wp_send_json( $data );

        wp_die();
    }
}

Enhanced_Ajax_Add_To_Cart_Wc_AJAX::init();