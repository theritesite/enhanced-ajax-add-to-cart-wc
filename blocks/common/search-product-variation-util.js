/**
 * External dependencies
 */
import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';
import { getSetting } from '@woocommerce/settings';
import { flatten, uniqBy } from 'lodash';
import { createTitle } from './title';

const getProductVariationsRequests = ( {
	parentProd = [],
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
		// consumer_key: 'ck_5f7fbb292d1a17f1d04705314018160d07a65564',
		// consumer_secret: 'cs_2b8e302b8a9ab86ebc16503bcb530aa25ef49821',
		// query_string_auth: true,
	};
	const requests = [
		addQueryArgs( '/wc/v3/products/' + parentProd.id + '/variations', { ...defaultArgs, ...queryArgs } ),
	];

	// If we have a large catalog, we might not get all selected products in the first page.
	if ( getSetting( 'isLargeCatalog' ) && selected.length ) {
		console.log(
			'stuff in here' +
			requests.push(
					addQueryArgs( '/wc/v3/products/' + parentProd.id + '/variations', {
						// catalog_visibility: 'any',
						status: 'publish',
						include: selected,
						// consumer_key:
						// 	'ck_5f7fbb292d1a17f1d04705314018160d07a65564',
						// consumer_secret:
						// 	'cs_2b8e302b8a9ab86ebc16503bcb530aa25ef49821',
						// query_string_auth: true,
					} )
				)
		);
	}

	return requests;
};

const createVariationName = ( {
	parentProd,
	product,
} ) => {
	// const parentName = parentProd.name;
	// const varName = product.attributes.map( ( attribute ) => " " + attribute.option );

	if ( product && parentProd ) {
		if ( ( parentProd.name ) && ( product.attributes ) ) {
			return parentProd.name + product.attributes.map( ( attribute ) => " " + attribute.option );
		}
	}
};

export const getProductVariations = ( {
	parentProd = [],
	selected = [],
	search = '',
	queryArgs = [],
} ) => {
	const requests = getProductVariationsRequests( { parentProd, selected, search, queryArgs } );

	return Promise.all( requests.map( ( path ) => apiFetch( { path } ) ) )
		.then( ( data ) => {
			const variations = uniqBy( flatten( data ), 'id' );
			// console.log( "we are after the flatten" );
			const list = variations.map( ( variation ) => ( {
				name: createTitle( { product: parentProd, variation: variation } ),
				id: variation.id,
				full: createTitle( { product: parentProd, variation: variation, titleType: 'full' } ),
				att: createTitle( { product: parentProd, variation: variation, titleType: 'attribute' } ),
				base: createTitle( { product: parentProd, variation: variation, titleType: 'base' } ),
				price: variation.price,
				parent_id: variation.parent_id,
				type: variation.type,
				attributes: variation.attributes,
				raw: variation,
				// name: parentProd.name + product.attributes.map( ( attribute ) => " " + attribute.option ),
				// name: parentProd.name,
				// ...variation,
				// parentProd: 0,
			} ) );
			// console.log( "returning list")
			return list;
		} )
		.catch( ( e ) => {
			// console.log( "we threw it" );
			throw e;
		} );
};
