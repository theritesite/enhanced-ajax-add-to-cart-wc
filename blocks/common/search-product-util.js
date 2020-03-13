/**
 * External dependencies
 */
import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';
import { getSetting } from '@woocommerce/settings';
import { flatten, uniqBy } from 'lodash';

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
		query_string_auth: true,
	};
	const requests = [
		addQueryArgs( '/wc/v3/products', { ...defaultArgs, ...queryArgs } ),
	];

	// If we have a large catalog, we might not get all selected products in the first page.
	if ( getSetting( 'isLargeCatalog' ) && selected.length ) {
		console.log( 'stuff in here' + requests.push(
			addQueryArgs( '/wc/v3/products', {
				// catalog_visibility: 'any',
				status: 'publish',
				include: selected,
				consumer_key: 'ck_5f7fbb292d1a17f1d04705314018160d07a65564',
				consumer_secret: 'cs_2b8e302b8a9ab86ebc16503bcb530aa25ef49821',
				query_string_auth: true,
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
			// console.log( "we are after the flatten" );
			const list = products.map( ( product ) => ( {
				...product,
				parent: 0,
			} ) );
			// console.log( "returning list")
			return list;
		} )
		.catch( ( e ) => {
			// console.log( "we threw it" );
			throw e;
		} );
};
