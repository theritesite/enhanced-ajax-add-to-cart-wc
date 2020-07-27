/**
 * Takes lots of notes of how WooCommerce uses AJAX and JavaScript to add and handle the proccess
 * of adding a variable product to the cart
 * 
 * @since 1.0.0
 */
jQuery( function( $ ) {
	'use strict';

	/**
	 * TRSPluginUpdaterEAA2C class.
	 */
	var TRSPluginUpdaterEAA2C = function() {
		var self = this;

		self.activateLicense = self.activateLicense.bind( self );
		self.deactivateLicense = self.deactivateLicense.bind( self );
		self.afterActivation = self.afterActivation.bind( self );
		self.afterDeactivation = self.afterDeactivation.bind( self );
		self.receiveError = self.receiveError.bind( self );

		$( document.body )
			.on( 'click', '#eaa2c_activate', this.activateLicense )
			.on( 'click', '#eaa2c_deactivate', this.deactivateLicense )
			.on( 'license_activated', this.afterActivation )
			.on( 'license_deactivated', this.afterDeactivation )
			.on( 'license_error', this.receiveError );


	};

	TRSPluginUpdaterEAA2C.prototype.activateLicense = function( e ) {
		e.preventDefault();
		console.log( "We are in activate license, need to send a request" );

		let licenseKey = $( '#trs_eaa2c_key' ).val();
		console.log( "here is the license key from the form the input: " + licenseKey );
		console.log( "here is the license key from the database: " +  EAA2CSETTINGS.db_key );

		$.ajax({
			url:  EAA2CSETTINGS.ajax_url,
			type: "POST",
			data: {
				key: licenseKey,
				action: 'eaa2c_activate_license',
				security: EAA2CSETTINGS.nonce,
				eaa2c_action: true,
			},
			success: function( response ) {
				if ( EAA2CSETTINGS.debug ) {
					console.log( "key: " + licenseKey + " action: activation" );
					console.log( response );
				}
				$( document.body ).trigger( 'license_activated' );
				// if ( response.html ) {
				// 	$( document.body ).trigger( 'notices_received', [ response.html ] );
				// }
			},
			error: function() {
				$( document.body ).trigger( 'license_error' );
				console.error( "Failure activating license!" );
				if ( EAA2CSETTINGS.debug ) {
					console.log( "key: " + licenseKey + " action: activation" );
				}
			},
		});
	};

	TRSPluginUpdaterEAA2C.prototype.deactivateLicense = function( e ) {
		e.preventDefault();
		console.log( "License needs deactivation, send it!" );
		let licenseKey = $( '#trs_eaa2c_key' ).val();
		console.log( "here is the license key from the form the input: " + licenseKey );
		console.log( "here is the license key from the database: " +  EAA2CSETTINGS.db_key );

		$.ajax({
			url:  EAA2CSETTINGS.ajax_url,
			type: "POST",
			data: {
				key: licenseKey,
				action: 'eaa2c_deactivate_license',
				security: EAA2CSETTINGS.nonce,
				eaa2c_action: true,
			},
			success: function( response ) {
				if ( EAA2CSETTINGS.debug ) {
					console.log( "key: " + licenseKey + " action: deactivation" );
					console.log( response );
				}
				$( document.body ).trigger( 'license_deactivated' );

				// if ( response.html ) {
				// 	$( document.body ).trigger( 'notices_received', [ response.html ] );
				// }
			},
			error: function() {
				$( document.body ).trigger( 'license_error' );
				console.error( "Failure deactivating the license!" );
				if ( EAA2CSETTINGS.debug ) {
					console.log( "key: " + licenseKey + " action: deactivation" );
				}
			},
		});
	};

	TRSPluginUpdaterEAA2C.prototype.afterActivation = function( e ) {
		e.preventDefault();
		console.log( "After activation is now running." );
		document.getElementById( 'eaa2c_activate' ).insertAdjacentHTML('afterend','<input type="submit" class="button-secondary" id="eaa2c_deactivate" name="eaa2c_deactivate" value="Deactivate" />');
		$( '#eaa2c_activate' ).hide();
	};

	TRSPluginUpdaterEAA2C.prototype.afterDeactivation = function( e ) {
		e.preventDefault();
		console.log( "After deactivation is now running." );
		document.getElementById( 'eaa2c_deactivate' ).insertAdjacentHTML('afterend','<input type="submit" class="button-secondary" id="eaa2c_activate" name="eaa2c_activate" value="Activate" />');
		$( '#eaa2c_deactivate' ).hide();
	};

	TRSPluginUpdaterEAA2C.prototype.receiveError = function( e ) {
		e.preventDefault();
		console.log( "Receiving error..." );
	};


	/**
	 * Init TRSPluginUpdaterEAA2C.
	 */
	new TRSPluginUpdaterEAA2C();
});