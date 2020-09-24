<?php

/**
 * Fired during plugin activation
 *
 * This class defines all code necessary to run during the plugin's activation.
 *
 * @link       www.theritesites.com
 * @since      1.0.0
 * @package    Enhanced_Ajax_Add_To_Cart_Wc
 * @subpackage Enhanced_Ajax_Add_To_Cart_Wc/includes
 * @author     TheRiteSites <contact@theritesites.com>
 */
class Enhanced_Ajax_Add_To_Cart_Wc_Activator {

	/**
	 * Short Description. (use period)
	 *
	 * Long Description.
	 *
	 * @since    1.0.0
	 */
	public static function activate() {

		// add_action( 'admin_notices', array( __CLASS__, 'register_app_rest' ) );
		
	}

	public static function register_app_rest() {
		?>
		<div class="error notice">

        	<p>OH HELLO!
			<?php
				$store_url = get_admin_url();
				$endpoint = '/wc-auth/v1/authorize';
				$params = [
					'app_name' => 'Enhanced AJAX Add to Cart PHP',
					'scope' => 'read',
					'user_id' => get_current_user_id(),
					'return_url' => plugins_url(),
					'callback_url' => plugins_url()
				];
				$query_string = http_build_query( $params );

				echo '<a href="' . $store_url . $endpoint . '?' . $query_string . '" class="button btn btn-primary">Register!</a>';
			?>
			</p>
		</div>
		<?php
	}

}
