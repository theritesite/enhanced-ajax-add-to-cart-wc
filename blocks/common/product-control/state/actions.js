/**
 * External dependencies
 */
// import { translate as __ } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import * as api from '../../api';

import { getProducts } from '../../search-product-util';
import { getProductVariations } from '../../search-product-variation-util';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_VARIATIONS = 'FETCH_VARIATIONS';
export const SET_SELECTED = 'SET_SELECTED';
export const SET_LIST = 'SET_LIST';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_VARIATIONS = 'SET_VARIATIONS';
export const REMOVE_SELECTED = 'REMOVE_SELECTED';

export function fetchProducts( selected, search, args ) {
	console.log( "hello there" );
	return dispatch => {
		dispatch( requestProducts( selected, search, args ) )
		return getProducts(  selected, search, args )
			// .then( response => response.json())
			.then( response => dispatch( setProducts( response ) ) );
	}
};

function requestProducts( selected, search, args ) {
	return {
		type: GET_PRODUCTS,
		selected,
		search,
		args,
	}
}

export function fetchVariations( parent, selected, search, args ) {
	return {
		type: FETCH_VARIATIONS,
		parent,
		selected,
		search,
		args,
	};
};

export function setSelected( product, value ) {
	return {
		type: SET_SELECTED,
		product,
		value,
	};
};

export function setList( list ) {
	return {
		type: SET_LIST,
		list,
	};
};

export function setProducts( products ) {
	return {
		type: SET_PRODUCTS,
		products,
	};
};

export function setVariations( parent, variations ) {
	return {
		type: SET_VARIATIONS,
		parent,
		variations,
	};
};

export function removeSelected( product, value ) {
	return {
		type: REMOVE_SELECTED,
		product,
		value,
	};
};

function shouldFetchProducts( state, selected, search, args ) {
	const { products, isLoading, error } = state;
	if ( ! products ) {
		console.log( "no products exist, sending!" );
		return true;
	} else if ( isLoading ) {
		return false;
	} else {
		error = 'Issue loading the products';
		return false;
	}
}

export function fetchProductsIfNeeded( selected, search, args ) {
	console.log( "in fetchProductsIfNeeded." );
	return ( dispatch, getState ) => {
		if ( shouldFetchProducts( getState(), selected, search, args ) ) {
			console.log( "sending fetch dispatch." );
			return dispatch( fetchProducts( selected, search, args ) );
		}
	}
}