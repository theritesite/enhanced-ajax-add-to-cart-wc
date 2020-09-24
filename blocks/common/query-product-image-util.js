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
	// console.log( "id: " + id + " type: " + type );
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

const getProductImagesRequests = ( {
	products = [],
	queryArgs = [],
} ) => {
	const defaultArgs = {
		type: 'thumbnail',
	};

	const requests = [];
	if ( products.length ) {
		// console.log( "creating requests" );
		products.map( ( data, index )  => {
			// console.log( "request for id: " + data.id );
			// requests[data.id] = addQueryArgs( `eaa2c/v1/product-image/${ data.id }`, { ...defaultArgs, ...queryArgs } );
			requests.push( addQueryArgs( `eaa2c/v1/product-image/${ data.id }`, { ...defaultArgs, ...queryArgs } ) );
		} );
	}

	return requests;
};
export const getProductImages = ( {
	products = [],
	type = 'thumbnail',
} ) => {
	// console.log( products );
	// console.log( "products: " + products + " type: " + type );
	const requests = getProductImagesRequests( { products, queryArgs: { type: type } } );

	return Promise.all( requests.map( ( path, index ) => apiFetch( { path } ) ) )
		.then( ( data ) => {
			// console.log( "we are after the flatten" );
			// const image = data.src;
			let newData = {};
			// console.log( data );
			data.map( ( imageData ) => {
				if ( imageData.data && imageData.data.pid && imageData.data.pid > 0 ) {
					if ( ! newData[ imageData.data.pid ] ) {
						newData[imageData.data.pid] = {};
					}
					newData[ imageData.data.pid ][type] = imageData.data;
				}
			});
			// console.log( newData );
			return newData;
		} )
		.catch( ( e ) => {
			// console.log( "we threw it" );
			throw e;
		} );
};
