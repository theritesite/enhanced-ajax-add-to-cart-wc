import ProductControler from './view';
import reducer from './state/reducer';
import { Provider } from 'react-redux'
// import { createStore } from 'redux';
import { Component } from '@wordpress/element';

import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import * as storageUtils from '../utils/local-storage';
import localApiMiddleware from '../utils/local-api-middleware';


import { setNonce, setBaseURL } from '../api/request';

export default class ProductControl extends Component {
// export default ( { list, products, variations, selected, isLoading, error } ) => ( {
// export default ( { inProgress, stepSize, totalSteps, orders, ordersCompleted, error } ) => ( {
	constructor( props ) {
		super(props);
		// this.store = createStore(reducer);

		this.state = {
			products: [],
			variations: {},
		}


		if ( global.EAA2C ) {
			console.log( "we made it into the global setarea" );
			setNonce( global.EAA2C.nonce );
			setBaseURL( global.EAA2C.baseURL );
			console.log( global.EAA2C.baseURL + " base url" );
		}
		const createdStores = {};
		const routeClassName = 'eaa2c-product-control';
		const args = { list: {}, products: {}, variations: {}, selected: {}, isLoading: true, error: {} };
		if ( typeof createdStores[ routeClassName ] === 'undefined' ) {
			const persistedStateKey = routeClassName;
			const persistedState = storageUtils.getWithExpiry( persistedStateKey );
			storageUtils.remove( persistedStateKey );
			const serverState = reducer.DEFAULT_STATE;
			const initialState = { ...serverState, ...persistedState };

			const middlewares = [
				thunk.withExtraArgument( args ),
				localApiMiddleware,
			];

			const enhancers = [
				applyMiddleware( ...middlewares ),
			].filter( Boolean );

			const store = compose( ...enhancers )( createStore )( reducer, initialState );
			window.addEventListener( 'beforeunload', () => {
				const state = store.getState();
				const { onChange, selected, multiple, onListRequest } = this.props;
				const { products, variations, list } = state;
			
				if ( window.persistState ) {
					// storageUtils.setWithExpiry( persistedStateKey, { list, products, variations, selected } );
					storageUtils.setWithExpiry( persistedStateKey, state );
				}
			} );
	
			createdStores[ routeClassName ] = store;
			this.store = store;
	
		}
	}
	
	render() {
		const { onChange, selected, multiple, onListRequest } = this.props;
		const { products, variations } = this.state;
		console.log( "in view!" );
		return (
			<Provider store={ this.store }>
				<ProductControler
					selected={ selected }
					onChange={ onChange }
					multiple={ multiple }
					dispatch={ this.store.dispatch }
					products={ products }
					variations={ variations }
					onListRequest={ onListRequest }
				/>
			</Provider>
		);
	}
}