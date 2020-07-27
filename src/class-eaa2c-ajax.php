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

        add_action( 'init', array( __CLASS__, 'eaa2c_define_ajax' ), 0 );
        // add_action( 'template_redirect', array( __CLASS__, 'do_eaa2c_ajax' ), 0 );
        self::add_eaa2c_ajax_events();
        
    }

    public static function eaa2c_define_ajax() {
        // error_log( "this is defining the ajax area in eaa2c" );
        if ( ! empty( $_POST['eaa2c_action'] ) ) {
            if ( ! defined( 'DOING_AJAX' ) ) {
                define( 'DOING_AJAX', true );
            }
            if ( ! defined( 'WC_DOING_AJAX' ) ) {
                define( 'WC_DOING_AJAX', true );
            }
            if ( ! defined( 'EAA2C_DOING_AJAX' ) ) {
                // error_log( "this is defining eaa2c" );
                define( 'EAA2C_DOING_AJAX', true );
            }
            if ( ! WP_DEBUG || ( WP_DEBUG && ! WP_DEBUG_DISPLAY ) ) {
                @ini_set( 'display_errors', 0 );
            }
            $GLOBALS['wpdb']->hide_errors();
        }
    }

    // public static function do_eaa2c_ajax() {
    //     global $wp_query;

    //     if ( ! empty( $_GET['eaa2c_action'] ) ) {
    //         $wp_query->set( 'eaa2c-ajax', sanitize_text_field( $_GET['eaa2c_action'] ) );
    //     }
    //     if ( $action = $wp_query->get('eaa2c-ajax') ) {
    //         self::eaa2c_ajax_headers();
    //         do_action()
    //     }
    // }

    public static function add_eaa2c_ajax_events() {
        add_action( 'wp_ajax_eaa2c_add_to_cart', array( __CLASS__, 'eaa2c_add_to_cart_callback' ) );
        add_action( 'wp_ajax_nopriv_eaa2c_add_to_cart', array( __CLASS__, 'eaa2c_add_to_cart_callback' ) );

        add_action( 'wp_ajax_eaa2c_activate_license', array( __CLASS__, 'eaa2c_maybe_activate_callback' ) );
        add_action( 'wp_ajax_eaa2c_deactivate_license', array( __CLASS__, 'eaa2c_maybe_deactivate_callback' ) );
       
        /**
         * Deprecated actions
         */
        add_action( 'wp_ajax_simple_add_to_cart', array( __CLASS__, 'simple_add_to_cart_callback' ) );
        add_action( 'wp_ajax_nopriv_simple_add_to_cart', array( __CLASS__, 'simple_add_to_cart_callback' ) );
        
        add_action( 'wp_ajax_variable_add_to_cart', array( __CLASS__, 'variable_add_to_cart_callback' ) );
        add_action( 'wp_ajax_nopriv_variable_add_to_cart', array( __CLASS__, 'variable_add_to_cart_callback' ) );
        /**
         * End deprecated actions.
         */
    }

    /**
     * The server side callback when the button is pressed to verify and add any product to the current cart
     * 
     * @since 2.0.0
     */
    public static function eaa2c_add_to_cart_callback() {

        // if ( defined( 'DOING_AJAX' ) ) {
        //     error_log( "This should be DOING_AJAX: " . DOING_AJAX );
        // }
        // if ( defined( 'WC_DOING_AJAX' ) ) {
        //     error_log( "This should be WC_DOING_AJAX: " . WC_DOING_AJAX );
        // }
        // if ( defined( 'EAA2C_DOING_AJAX' ) ) {
        //     error_log( "This should be EAA2C_DOING_AJAX: " . EAA2C_DOING_AJAX );
        // } else if ( !defined( 'EAA2C_DOING_AJAX' ) ) {
        //     error_log( "This should be EAA2C_DOING_AJAX: " . EAA2C_DOING_AJAX  . " but its undefined");
        // }

        ob_start();
        $data = array();

        if ( isset( $_POST['product'] ) && isset( $_POST['variable'] ) && isset( $_POST['quantity'] ) ) {
            try {
                $product_id   = intval( sanitize_text_field( $_POST['product'] ) );
                $variation_id = intval( sanitize_text_field( $_POST['variable'] ) );
                $quantity     = intval( sanitize_text_field( $_POST['quantity'] ) );

                if ( true === is_int( $variation_id ) && 0 < $variation_id && $variation_id !== $product_id  ) {
                    $product           = wc_get_product( $variation_id );
                    $variations        = $variation_id ? $product->get_variation_attributes( $variation_id ) : null;
                    $product_status    = get_post_status( $product_id );
                    $passed_validation = apply_filters( 'woocommerce_add_to_cart_validation', true, $variation_id, $quantity );

                    if ( $passed_validation && WC()->cart->add_to_cart( $product_id, $quantity, $variation_id, $variations ) && 'publish' === $product_status ) {
                        do_action( 'woocommerce_ajax_added_to_cart', $product_id );
                        WC_AJAX::get_refreshed_fragments();

                    } else {

                        $data = array(
                            'error' => true
                        );
                    }
                } elseif ( true === is_int( $product_id ) && 0 < $product_id ) {
                    $product           = wc_get_product( $product_id );
                    $product_status    = get_post_status( $product_id );
                    $passed_validation = apply_filters( 'woocommerce_add_to_cart_validation', true, $product_id, $quantity );

                    if ( $passed_validation && WC()->cart->add_to_cart( $product_id, $quantity, null, null ) && 'publish' === $product_status ) {
                        do_action( 'woocommerce_ajax_added_to_cart', $product_id );
                        WC_AJAX::get_refreshed_fragments();
                        
                    } else {
                        $data = array(
                            'error' => true
                        );
                    }

                }

            } catch ( Exception $e ) {
                return new WP_Error('add_to_cart_error', $e->getMessage(), array( 'status' => 500 ) );
            }
        }
        else {
            if ( true === WP_DEBUG || true === EAA2C_DEBUG ) {
                error_log( 'product id: ' . $_POST['product'] . ' variable id: ' .  $_POST['variable'] . ' quantity: ' . $_POST['quantity'] );
            }
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
	 * Catches activation button press and attempts to activate the license for this plugin.
	 * 
	 * @since
	 */
	public static function eaa2c_maybe_activate_callback() {
		
		if ( isset( $_POST['action'] ) && isset( $_POST['key'] ) ) {

			if ( ! check_admin_referer( 'eaa2c_nonce', 'security' ) )
				return wp_send_json_error( array( 'error' => 'nonce mismatch' ) );
			
			$license = get_option( EAA2C_LICENSE_KEY );
			if ( isset( $_POST[EAA2C_LICENSE_KEY] ) && ( $license != $_POST[EAA2C_LICENSE_KEY] ) ) {
				$license = $_POST[EAA2C_LICENSE_KEY];

				// Saves license value to metabox if activate is pressed
				update_option( EAA2C_LICENSE_KEY, $license );
			}
			
			$api_params = array(
				'edd_action' => 'activate_license',
				'license'    => $license,
				'item_name'  => urlencode( EAA2C_ITEM_NAME ), // the name of our product in EDD
				'url'        => home_url()
			);
			
			// Call the custom API.
			$response = wp_remote_post( EAA2C_UPDATER_URL, array( 'timeout' => 15, 'sslverify' => false, 'body' => $api_params ) );
	
			// make sure the response came back okay
			if ( is_wp_error( $response ) || 200 !== wp_remote_retrieve_response_code( $response ) ) {
	
				if ( is_wp_error( $response ) ) {
					$message = $response->get_error_message();
				} else {
					$message = __( 'An error occurred, please try again.' );
				}
	
			} else {
	
				$license_data = json_decode( wp_remote_retrieve_body( $response ) );
	
				if ( false === $license_data->success ) {
	
					switch( $license_data->error ) {
	
						case 'expired' :
	
							$message = sprintf(
								__( 'Your license key expired on %s.' ),
								date_i18n( get_option( 'date_format' ), strtotime( $license_data->expires, current_time( 'timestamp' ) ) )
							);
							break;
	
						case 'disabled' :
						case 'revoked' :
	
							$message = __( 'Your license key has been disabled.' );
							break;
	
						case 'missing' :
	
							$message = __( 'Invalid license.' );
							break;
	
						case 'invalid' :
						case 'site_inactive' :
	
							$message = __( 'Your license is not active for this URL.' );
							break;
	
						case 'item_name_mismatch' :
	
							$message = sprintf( __( 'This appears to be an invalid license key for %s.' ), EAA2C_ITEM_NAME );
							break;
	
						case 'no_activations_left':
	
							$message = __( 'Your license key has reached its activation limit.' );
							break;
	
						default :
	
							$message = __( 'An error occurred, please try again.' );
							break;
					}
	
				}
	
			}
	
			// Check if anything passed on a message constituting a failure
			if ( ! empty( $message ) ) {
	
				wp_send_json_success( array( 'message' => $message ) );
				exit();
			}
	
			// $license_data->license will be either "valid" or "invalid"
			update_option( EAA2C_LICENSE_STATUS, $license_data->license );
			wp_send_json_success( array( 'message' => __( 'License key accepted, and sent for verification. Your premium version should now be active!' ) ) );
			exit();
		}
	}

	/**
	 * Deactivates the plugin license
	 * 
	 * @since
	 */
	public static function eaa2c_maybe_deactivate_callback() {
		if( isset($_POST['action']) && isset($_POST['key']) ) {
            error_log( "this is request['security'] " . $_REQUEST['security'] );
			
			if( ! check_admin_referer( 'eaa2c_nonce', 'security' ) )
				return wp_send_json_success( array( 'error' => 'nonce mismatch' ) );
			
			$license = get_option( EAA2C_LICENSE_KEY );
			
			$api_params = array(
				'edd_action' => 'deactivate_license',
				'license'    => $license,
				'item_name'  => urlencode( EAA2C_ITEM_NAME ), // the name of our product in EDD
				'url'        => home_url()
			);

			
			// Call the custom API.
			$response = wp_remote_post( EAA2C_UPDATER_URL, array( 'timeout' => 15, 'sslverify' => false, 'body' => $api_params ) );
	
			// make sure the response came back okay
			if ( is_wp_error( $response ) || 200 !== wp_remote_retrieve_response_code( $response ) ) {
	
				if ( is_wp_error( $response ) ) {
					$message = $response->get_error_message();
				} else {
					$message = __( 'An error occurred, please try again.' );
				}
				
				$base_url = admin_url( 'options-general.php?page=' . EAA2C_LICENSE_PAGE );
				$redirect = add_query_arg( array( 'eaa2c_activation' => 'false', 'message' => urlencode( $message ) ), $base_url );
	
				wp_redirect( $redirect );
				exit();
			}
			
			// decode the license data
			$license_data = json_decode( wp_remote_retrieve_body( $response ) );
			
			if( $license_data->license == 'failed' ) {
				$message = __( 'An error occurred, that license does not seem valid, please try again.' );
				
                wp_send_json_success( array( 'message' => $message ) );
				exit();
			}
	
			// $license_data->license will be either "deactivated" or "failed"
			if( $license_data->license == 'deactivated' ) {
				delete_option( EAA2C_LICENSE_STATUS );
			}
	
			wp_send_json_success( array( 'message' => __( 'License deactivated.' ) ) );
			exit();
		}
	}

    /**
     * Deprecated functions below.
     */

    /**
     * The server side callback when the button is pressed to verify and add the variable product to the current cart
     * 
     * @deprecated Since version 2.0.0 Will be deleted in version 3.0, use eaa2c_add_to_cart_callback instead
     * @since 1.0.0
     */
    public static function variable_add_to_cart_callback() {
        _deprecated_function( __FUNCTION__, '2.0', 'eaa2c_add_to_cart_callback' );

        return self::eaa2c_add_to_cart_callback();
        wp_die();
    }

    /**
     * The server side callback when the button is pressed to verify and add the simple product to the current cart
     * 
     * @deprecated Since version 2.0.0 Will be deleted in version 3.0, use eaa2c_add_to_cart_callback instead
     * @since 1.0.0
     */
    public static function simple_add_to_cart_callback() {
        _deprecated_function( __FUNCTION__, '2.0', 'eaa2c_add_to_cart_callback' );

        return self::eaa2c_add_to_cart_callback();
        wp_die();

    }
    /**
     * End deprecated functions.
     */
}

Enhanced_Ajax_Add_To_Cart_Wc_AJAX::init();