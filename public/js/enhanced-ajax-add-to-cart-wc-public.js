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
		var self = this;

		self.showNotices = self.showNotices.bind( self );
		self.scrollToNotices = self.scrollToNotices.bind( self );
		$( document.body )
			.on( 'click', '.variable_add_to_cart_button', this.onAddVariableToCart )
			.on( 'click', '.simple_add_to_cart_button', this.onAddSimpleToCart )
			.on( 'click', '.eaa2c_add_to_cart_button', this.onAddAnyToCart )
			.on( 'added_to_cart', this.updateButton )
			.on( 'added_to_cart', this.updateCartPage )
			.on( 'added_to_cart', this.updateFragments )
			.on( 'notices_received', this.showNotices );
	};

	/**
	 * Handle the variable product add to cart event.
	 */
	AddToCartHandler.prototype.onAddAnyToCart = function( e ) {
		var $thisbutton = $( this );
		e.preventDefault();

		$thisbutton.removeClass("added");
		$thisbutton.addClass("loading");

		var data = {};
		var qty = {};

		$.each( $thisbutton.data(), function( key, value ) {
			data[ key ] = value;
		});

		qty = $( this ).siblings('.quantity-container').find('input.input-text.qty.text');
		data['action'] = 'eaa2c_add_to_cart';
		console.log( "quantity max: " + qty.attr('max') + " and min: " + qty.attr('min'));

		if( qty.attr('max') != -1 && qty.attr('max') > 1 ) {
			if( qty.attr('max') < qty.val() && qty.attr('min') < qty.val() ) {
				qty.value = qty.attr('max');
			}
			if( qty.attr('min') > qty.val() ) {
				qty.value = qty.attr('min');
			}
		}
		data['qty'] = qty.val();
		console.log( "quantity max: " + qty.attr('max') + " and min: " + qty.attr('min') + " and val: " + qty.val() );
		// Trigger event.
		$( document.body ).trigger( 'adding_to_cart', [ $thisbutton, data ] );

		if ( ( parseInt(qty.attr('max')) === -1 && data['qty'] > qty.attr('min') )
				|| ( data['qty'] < qty.attr('max') && data['qty'] > qty.attr('min') )
		) {
			$.ajax({
				url: EAA2C.ajax_url,
				type: "POST",
				data:{
					product: data['pid'],
					variable: data['vid'],
					quantity: data['qty'],
					action: 'eaa2c_add_to_cart',
				},
				success: function(response){
					if( EAA2C.debug ) {
						console.log( "product id: " + data['pid'] + " variable id: " + data['vid'] + " quantity: " + data['qty']);
					}
					$( document.body ).trigger( 'added_to_cart', [ response.fragments, response.cart_hash, $thisbutton ] );
					if( response.html ) {
						$( document.body ).trigger( 'notices_received', [response.html] );
					}
				},
				error: function(){
					console.error("failure!");
					if( EAA2C.debug ) {
						console.log( "product id: " + data['pid'] + " variable id: " + data['vid'] + " quantity: " + data['qty']);
					}
				},
			});
		} else if( data['qty'] > qty.attr('max') ) {
			var errorHtml = '<ul class="woocommerce-error" role="alert"><li>cannot add product to cart, you are over the allowed maximum of ' + qty.attr('max') + ' to add to your cart.</li></ul>';
			$thisbutton.removeClass("loading");
			$( document.body ).trigger( 'notices_received', [errorHtml] );
		} else if( data['qty'] < qty.attr('min') ) {
			var errorHtml = '<ul class="woocommerce-error" role="alert"><li>cannot add product to cart, you are under the allowed minimum ' + qty.attr('min') + ' to add to your cart.</li></ul>';
			$thisbutton.removeClass("loading");
			$( document.body ).trigger( 'notices_received', [errorHtml] );
		}
	};

	/**
	 * Handle the variable product add to cart event.
	 */
	AddToCartHandler.prototype.onAddVariableToCart = function( e ) {
		var $thisbutton = $( this );
		e.preventDefault();

		$thisbutton.removeClass("added");
		$thisbutton.addClass("loading");

		var data = {};

		$.each( $thisbutton.data(), function( key, value ) {
			data[ key ] = value;
		});

		data['qty'] = $( this ).siblings('.quantity-container').find('input').val();
		data['action'] = 'variable_add_to_cart';

		// Trigger event.
		$( document.body ).trigger( 'adding_to_cart', [ $thisbutton, data ] );

		$.ajax({
			url: EAA2C.ajax_url,
			type: "POST",
			data:{
				product: data['pid'],
				variable: data['vid'],
				quantity: data['qty'],
				action: 'variable_add_to_cart',
			},
			success: function(response){
				if( EAA2C.debug ) {
					console.log( "product id: " + data['pid'] + " quantity: " + data['qty']);
				}
				$( document.body ).trigger( 'added_to_cart', [ response.fragments, response.cart_hash, $thisbutton ] );
				if(response.html) {
					$( document.body ).trigger( 'notices_received', [response.html] );
				}
			},
			error: function(){
				console.error("failure!");
				if( EAA2C.debug ) {
					console.log( "product id: " + data['pid'] + " quantity: " + data['qty']);
				}
			},
		});
	};

	/**
	 * Handle the simple product add to cart event.
	 */
	AddToCartHandler.prototype.onAddSimpleToCart = function( e ) {
		var $thisbutton = $( this );
		e.preventDefault();

		$thisbutton.removeClass("added");
		$thisbutton.addClass("loading");

		var data = {};

		$.each( $thisbutton.data(), function( key, value ) {
			data[ key ] = value;
		});

		data['qty'] = $( this ).siblings('.quantity-container').find('input').val();
		data['action'] = 'simple_add_to_cart';

		// Trigger event.
		$( document.body ).trigger( 'adding_to_cart', [ $thisbutton, data ] );

		$.ajax({
			url: EAA2C.ajax_url,
			type: "POST",
			data:{
				product: data['pid'],
				quantity: data['qty'],
				action: 'simple_add_to_cart'
			},
			success: function(response){
				if( EAA2C.debug ) {
					console.log( "product id: " + data['pid'] + " quantity: " + data['qty']);
				}
				$( document.body ).trigger( 'added_to_cart', [ response.fragments, response.cart_hash, $thisbutton ] );
				if(response.html) {
					$( document.body ).trigger( 'notices_received', [response.html] );
				}
			},
			error: function(){
				console.error("failure!");
				if( EAA2C.debug ) {
					console.log( "product id: " + data['pid'] + " quantity: " + data['qty']);
				}
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

	AddToCartHandler.prototype.showNotices = function( element, target ) {
		$('.woocommerce-error, .woocommerce-message').remove();
		var domTarget = $('.content-area');

		domTarget.before( target );
		this.scrollToNotices();
	}

	AddToCartHandler.prototype.scrollToNotices = function( e ) {
		var scrollElement = $('.woocommerce-error, .woocommerce-message');
		var isSmoothScrollSupported = 'scrollBehavior' in document.documentElement.style;

		if(!scrollElement.length) {
		}

		if(scrollElement.length) {
			if(isSmoothScrollSupported) {
				scrollElement[0].scrollIntoView({
					behavior: 'smooth'
				});
			}
			else {
				$('html, body').animate( {
					scrollTop: (scrollElement.offset().top - 100),
				}, 1000);
			}
		}
	}

	/**
	 * Init AddToCartHandler.
	 */
	new AddToCartHandler();
});
