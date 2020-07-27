/**
 * External dependencies
 */
import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';

const getProductImageRequests = ( {
	id = 0,
	queryArgs = [],
} ) => {
	const defaultArgs = {
		type: 'thumbnail',
	};
	const requests = [
		addQueryArgs( `eaa2c/v1/product-image/${ id }`, { ...defaultArgs, ...queryArgs } ),
	];

	return requests;
};
export const getProductImage = ( {
	id = 0,
	type = 'thumbnail',
} ) => {
	console.log( "id: " + id + " type: " + type );
	const requests = getProductImageRequests( { id, queryArgs: { type: type } } );

	return Promise.all( requests.map( ( path ) => apiFetch( { path } ) ) )
		.then( ( data ) => {
			// console.log( "we are after the flatten" );
			// const image = data.src;
			return data;
		} )
		.catch( ( e ) => {
			// console.log( "we threw it" );
			throw e;
		} );
};
