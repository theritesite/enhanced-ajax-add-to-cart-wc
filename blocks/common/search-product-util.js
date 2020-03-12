/**
 * External dependencies
 */
import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';
import { getSetting } from '@woocommerce/settings';
import { flatten, uniqBy } from 'lodash';
// const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
// const WooCommerce = new WooCommerceRestApi({
// 	url: EAA2C.route,
	// consumerKey: 'ck_5f7fbb292d1a17f1d04705314018160d07a65564',
	// consumerSecret: 'cs_2b8e302b8a9ab86ebc16503bcb530aa25ef49821',
	// consumerKey: 'ck_d14be992aad1f937b832f0b3fae5d34cfef8fc49',
	// consumerSecret: 'cs_7705ee25c729c62a5cf2f3cd5ec90c9aa5e9335d',
// 	version: 'wc/v3'
//   });
/*
export const getProducts = ( queryArgs ) => {
	const args = {
		catalog_visibility: 'visible',
		status: 'publish',
		...queryArgs,
	};
	return apiFetch( {
		path: addQueryArgs(
			`${ ENDPOINTS.products }/attributes/${ attribute }/terms`,
			{
				per_page: -1,
			}
		),
	} )/*
	return apiFetch( {
		path:
			'/wc/blocks/products?' +
			Object.entries( args )
				.map( ( arg ) => arg.join( '=' ) )
				.join( '&' ),
		parse: false,
	} )*//*.then( ( response ) => {
		return response.json().then( ( products ) => {
			const totalProducts = parseInt(
				response.headers.get( 'x-wp-total' ),
				10
			);
			return { products, totalProducts };
		} );
	} );
};
*/

const getProductsRequests = ( {
	selected = [],
	search = '',
	queryArgs = [],
} ) => {
	const defaultArgs = {
		per_page: getSetting( 'isLargeCatalog' ) ? 100 : -1,
		catalog_visibility: 'any',
		status: 'publish',
		search,
		orderby: 'title',
		order: 'asc',
		consumer_key: 'ck_5f7fbb292d1a17f1d04705314018160d07a65564',
		consumer_secret: 'cs_2b8e302b8a9ab86ebc16503bcb530aa25ef49821',
		query_string_auth: true
	};
	const requests = [
		addQueryArgs( '/wc/v3/products', { ...defaultArgs, ...queryArgs } ),
	];

	// If we have a large catalog, we might not get all selected products in the first page.
	if ( getSetting( 'isLargeCatalog' ) && selected.length ) {
		console.log( 'its here ' + requests.push(
			addQueryArgs( '/wc/v3/products', {
				// catalog_visibility: 'any',
				status: 'publish',
				include: selected,
				consumer_key: 'ck_5f7fbb292d1a17f1d04705314018160d07a65564',
				consumer_secret: 'cs_2b8e302b8a9ab86ebc16503bcb530aa25ef49821',
				query_string_auth: true
			} ) )
		);
	}

	return requests;
};
export const getProducts = ( {
	selected = [], 
	search = '',
	queryArgs = [],
} ) => {
	const requests = getProductsRequests( { selected, search, queryArgs } );

	return Promise.all( requests.map( ( path ) => apiFetch( { path } ) ) )
		.then( ( data ) => {
			const products = uniqBy( flatten( data ), 'id' );
			console.log( "we are after the flatten" );
			const list = products.map( ( product ) => ( {
				...product,
				parent: 0,
			} ) );
			console.log( "returning list")
			return list;
		} )
		.catch( ( e ) => {
			console.log( "we threw it" );
			throw e;
		} );
};