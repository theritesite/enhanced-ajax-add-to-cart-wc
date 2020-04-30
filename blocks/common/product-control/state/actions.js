/**
 * External dependencies
 */
// import { translate as __ } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import * as api from '../../api';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_VARIATIONS = 'FETCH_VARIATIONS';
export const SET_SELECTED = 'SET_SELECTED';
export const SET_LIST = 'SET_LIST';
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_VARIATIONS = 'SET_VARIATIONS';
export const REMOVE_SELECTED = 'REMOVE_SELECTED';

export const requestOrders = () => {
	return dispatch => {
		dispatch({
			type: ORDERS_REQUESTED,
		});

		return fetchOrders()
			.then( resp => {
				resp.orders;
				// console.log( "in fetch order then" );
				// console.log( resp.orders );
				dispatch({
					type: ORDERS_RECEIVED,
					payload: resp.orders,
				})
			 } );
	};
}

const fetchOrders = () => {
	return api.get( api.order() );
}

export const processOrders = orders => {
	return dispatch => {
		return processTheseOrders( orders )
			.then( data => {
				// console.log( "in process order then" );
				// console.log( data );
				dispatch({
					type: ORDER_PROCESSED,
					payload: data.orders,
				})
			});
	};
};

const processTheseOrders = orders => {
	return api.post( api.order(), { orders } )
}

export const connectStartNew = () => {
	// console.log( "in connectstartnew" );
	return ( dispatch, getState ) => {
		dispatch( requestOrders() ).then( async () => {
			const ordersArray = getState().orders;
			const stepSize = getState().stepSize;
			let steps = getState().orders.length;
			let arrSlice = [];
			for( let i = 0; i < Math.ceil(steps / stepSize); i ++ ) {
				arrSlice = ordersArray.slice( i * stepSize, ( i + 1 ) * stepSize );
				await dispatch( processOrders( arrSlice ) );
			}
			
		});
	};
};