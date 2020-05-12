import ProductControler from './view';
import reducer from './state/reducer';
import { Provider } from 'react-redux'
// import { createStore } from 'redux';
import { Component } from '@wordpress/element';

import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import * as storageUtils from '../utils/local-storage';
import localApiMiddleware from '../utils/local-api-middleware';
import * as ProductControlActions from './state/actions';
const { registerGenericStore } = wp.data;
// import { registerStore } from '@wordpress/data';

import { setNonce, setBaseURL } from '../api/request';

export default class ProductControl extends Component {
// export default ( { list, products, variations, selected, isLoading, error } ) => ( {
// export default ( { inProgress, stepSize, totalSteps, orders, ordersCompleted, error } ) => ( {
	constructor( props ) {
		super(props);
		// this.store = createStore(reducer);
		this.store = null;
		this.createdStores = {};
		this.reduxStore = null;

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
		
		const createdStores = this.createdStores;
		const routeClassName = 'eaa2c-product-control';
		const args = { list: {}, products: {}, variations: {}, selected: {}, isLoading: true, error: {} };
		if ( typeof createdStores[ routeClassName ] === 'undefined' ) {
			const persistedStateKey = routeClassName;
			const persistedState = storageUtils.getWithExpiry( persistedStateKey );
			// storageUtils.remove( persistedStateKey );
			const serverState = reducer.DEFAULT_STATE;
			const initialState = { ...serverState, ...persistedState };
			console.log( "this is initial state." );
			console.log( initialState );

			const middlewares = [
				thunk.withExtraArgument( args ),
				localApiMiddleware,
			];

			const enhancers = [
				applyMiddleware( ...middlewares ),
			].filter( Boolean );
			const store = compose( ...enhancers )( createStore )( reducer, initialState );

			const mappedActions = Object.keys( ProductControlActions ).reduce( ( acc, actionKey ) => {
				acc[ actionKey ] = ( ...args ) => store.dispatch( ProductControlActions[ actionKey ]( ...args ));
				return acc;
			}, {} );

			const genericStore = {
				getSelectors() {
					return {};
				},
				getActions() {
					return mappedActions;
				},
				subscribe: store.subscribe,
			};
			const genStore = registerGenericStore( persistedStateKey, genericStore );

			// const store = compose( ...enhancers )( createStore )( reducer, initialState );
			// const store = registerStore( persistedStateKey, { reducer: reducer, actions: ProductControlActions, selectors: {}, controls: {}, resolvers: {} } );
			/*window.addEventListener( 'beforeunload', () => {
				const state = store.getState();
				const { onChange, selected, multiple, onListRequest } = this.props;
				const { products, variations, list } = state;
				console.log( "this is in before unload -- state: " );
				console.log( state );
				console.log( "this is in before unload -- props: " );
				console.log( this.props );
			
				// if ( window.persistState ) {
					// storageUtils.setWithExpiry( persistedStateKey, { list, products, variations, selected } );
					storageUtils.setWithExpiry( persistedStateKey, state );
					console.log( "window.persistState is true and using storageUtils")
				// }
			} );*/
	
			createdStores[ routeClassName ] = genStore;
			this.store = genStore;
			this.reduxStore = store;
			console.log( "at the end of store -- store: " );
			console.log( store );
	
		}
	}

	componentDidMount() {
		const routeClassName = 'eaa2c-product-control';
		const persistedStateKey = routeClassName;
		// const persistedState = storageUtils.getWithExpiry( persistedStateKey );
		storageUtils.remove( persistedStateKey );

	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.selected !== this.props.selected) {
			console.log('selected changed', nextProps.selected);
			console.log( nextProps.selected )
		}
	}

	componentWillUnmount() {
		const state = this.reduxStore.getState();
		const { onChange, selected, multiple, onListRequest } = this.props;
		const { products, variations, list } = state;
		const persistedStateKey = 'eaa2c-product-control';
		console.log( "this is in before unload -- state: " );
		console.log( state );
		console.log( "this is in before unload -- props: " );
		console.log( this.props );
	
		// if ( window.persistState ) {
			// storageUtils.setWithExpiry( persistedStateKey, { list, products, variations, selected } );
			storageUtils.setWithExpiry( persistedStateKey, state );
			console.log( "window.persistState is true and using storageUtils");
			console.log( storageUtils.getWithExpiry( persistedStateKey ) );
		// }
		console.log( "this is unmounting" );
	}
	
	render() {
		const { onChange, selected, multiple, onListRequest } = this.props;
		const { products, variations } = this.state;
		// console.log( "in view!" );
		return (
			<Provider store={ this.reduxStore }>
				<ProductControler
					// selected={ selected }
					onChange={ onChange }
					multiple={ multiple }
					dispatch={ this.reduxStore.dispatch }
					products={ products }
					variations={ variations }
					onListRequest={ onListRequest }
				/>
			</Provider>
		);
	}
}