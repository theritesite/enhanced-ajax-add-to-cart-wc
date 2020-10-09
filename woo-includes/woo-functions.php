<?php
/**
 * Functions used by plugins
 */
if ( ! class_exists( 'Enhanced_Ajax_Add_To_Cart_Wc_Dependencies' ) )
	require_once 'class-eaa2cwc-dependencies.php';

/**
 * WC Detection
 */
if ( ! function_exists( 'is_woocommerce_active' ) ) {
	function is_woocommerce_active() {
		return Enhanced_Ajax_Add_To_Cart_Wc_Dependencies::woocommerce_active_check();
	}
}

if ( ! function_exists( 'is_eaa2c_premium_active' ) ) {
	function is_eaa2c_premium_active() {
		return Enhanced_Ajax_Add_To_Cart_Wc_Dependencies::eaa2c_premium_active_check();
	}
}

