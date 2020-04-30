/**
 * Internal dependencies
 */
import request from './request';

const namespace = 'wc-emcctt/v1/connect/';

export const order = () => `${ namespace }order`;

export const user = () => `${ namespace }user`;

const handleError = ( jsonError ) => {
	if ( jsonError.data.message ) {
		throw jsonError.data.message;
	}

	throw JSON.stringify( jsonError );
};

export const post = ( url, data ) => request().post( url, data ).catch( handleError );

export const get = ( url ) => request().get( url ).catch( handleError );

export const createGetUrlWithNonce = ( url, queryString ) => request().createGetUrlWithNonce( url, queryString );