/**
 * Takes lots of notes of how WooCommerce uses AJAX and JavaScript to add and handle the proccess
 * of adding a variable product to the cart
 * 
 * @since 1.0.0
 */
jQuery( function( $ ) {
	'use strict';

	/**
	 * AddToCartHandler class.
	 */
	var AddToCartHandler = function() {
		$( document.body )
			.on( 'click', '.variable_add_to_cart_button', this.onAddVariableToCart )
			.on( 'click', '.simple_add_to_cart_button', this.onAddSimpleToCart )
			.on( 'added_to_cart', this.updateButton )
			.on( 'added_to_cart', this.updateCartPage )
			.on( 'added_to_cart', this.updateFragments );
	};

	/**
	 * Handle the variable product add to cart event.
	 */
	AddToCartHandler.prototype.onAddVariableToCart = function( e ) {
		var $thisbutton = $( this );
		// e.preventDefault();

		$thisbutton.removeClass("added");
		$thisbutton.addClass("loading");

		var data = {};

		$.each( $thisbutton.data(), function( key, value ) {
			data[ key ] = value;
		});

		data['qty'] = $("#product_" + data['vid'] + "_qty").val();
		data['action'] = 'variable_add_to_cart';

		// Trigger event.
		$( document.body ).trigger( 'adding_to_cart', [ $thisbutton, data ] );

		$.ajax({
			url: ENHANCED_VARIABLE_A2C.ajax_url,
			type: "POST",
			data:{
				product: data['pid'],
				variable: data['vid'],
				quantity: data['qty'],
				action: 'variable_add_to_cart'
			},
			success: function(response){
				  console.log(data['pid'] + " oh " + data['vid'] + " " + data['qty']);
				$( document.body ).trigger( 'added_to_cart', [ response.fragments, response.cart_hash, $thisbutton ] );
			},
			error: function(){
				  console.error("failure!");
				  console.log(data['pid'] + " oh " + data['vid'] + " " + data['qty']);
				  
			},
			
		});

	};

	/**
	 * Handle the simple product add to cart event.
	 */
	AddToCartHandler.prototype.onAddSimpleToCart = function( e ) {
		var $thisbutton = $( this );
		// e.preventDefault();

		$thisbutton.removeClass("added");
		$thisbutton.addClass("loading");

		var data = {};

		$.each( $thisbutton.data(), function( key, value ) {
			data[ key ] = value;
		});

		data['qty'] = $("#product_" + data['pid'] + "_qty").val();
		data['action'] = 'simple_add_to_cart';

		// Trigger event.
		$( document.body ).trigger( 'adding_to_cart', [ $thisbutton, data ] );

		$.ajax({
			url: ENHANCED_VARIABLE_A2C.ajax_url,
			type: "POST",
			data:{
				product: data['pid'],
				quantity: data['qty'],
				action: 'simple_add_to_cart'
			},
			success: function(response){
				  console.log(data['pid'] + " oh " + data['qty']);
				$( document.body ).trigger( 'added_to_cart', [ response.fragments, response.cart_hash, $thisbutton ] );
			},
			error: function(){
				  console.error("failure!");
				  console.log(data['pid'] + " oh " + data['qty']);
				  
			},
			
		});

	};

	/**
	 * Update cart page elements after add to cart events.
	 */
	AddToCartHandler.prototype.updateButton = function( e, fragments, cart_hash, $button ) {
		$button = typeof $button === 'undefined' ? false : $button;

		if ( $button ) {
			$button.removeClass( 'loading' );
			$button.addClass( 'added' );

			// View cart text.
			if ( ! wc_add_to_cart_params.is_cart && $button.parent().find( '.added_to_cart' ).length === 0 ) {
				$button.after( ' <a href="' + wc_add_to_cart_params.cart_url + '" class="added_to_cart wc-forward" title="' +
					wc_add_to_cart_params.i18n_view_cart + '">' + wc_add_to_cart_params.i18n_view_cart + '</a>' );
			}

			$( document.body ).trigger( 'wc_cart_button_updated', [ $button ] );
		}
	};

	/**
	 * Update cart page elements after add to cart events.
	 */
	AddToCartHandler.prototype.updateCartPage = function() {
		var page = window.location.toString().replace( 'add-to-cart', 'added-to-cart' );

		$( '.shop_table.cart' ).load( page + ' .shop_table.cart:eq(0) > *', function() {
			$( '.shop_table.cart' ).stop( true ).css( 'opacity', '1' ).unblock();
			$( document.body ).trigger( 'cart_page_refreshed' );
		});

		$( '.cart_totals' ).load( page + ' .cart_totals:eq(0) > *', function() {
			$( '.cart_totals' ).stop( true ).css( 'opacity', '1' ).unblock();
			$( document.body ).trigger( 'cart_totals_refreshed' );
		});
	};

	/**
	 * Update fragments after add to cart events.
	 */
	AddToCartHandler.prototype.updateFragments = function( e, fragments ) {
		if ( fragments ) {
			$.each( fragments, function( key ) {
				$( key )
					.addClass( 'updating' )
					.fadeTo( '400', '0.6' )
					.block({
						message: null,
						overlayCSS: {
							opacity: 0.6
						}
					});
			});

			$.each( fragments, function( key, value ) {
				$( key ).replaceWith( value );
				$( key ).stop( true ).css( 'opacity', '1' ).unblock();
			});

			$( document.body ).trigger( 'wc_fragments_loaded' );
		}
	};

	/**
	 * Init AddToCartHandler.
	 */
	new AddToCartHandler();
});
