/**
 * External dependencies
 */
// import { omit } from 'lodash';
import { findIndex } from 'lodash';

/**
 * Internal dependencies
 */
import { 
    FETCH_PRODUCTS,
	FETCH_VARIATIONS,
	SET_SELECTED,
	SET_LIST,
	GET_PRODUCTS,
	SET_PRODUCTS,
	SET_VARIATIONS,
	REMOVE_SELECTED 
} from './actions';


export const DEFAULT_STATE = {
	isLoading: false,
	list: [],
	products: [],
	variations: {},
	selected: {},
};

export default ( state = DEFAULT_STATE, action ) => {
	var { selected } = state;
	switch ( action.type ) {
		case SET_PRODUCTS:
			return {
				...state,
				products: action.products,
				isLoading: false,
			};
		case SET_VARIATIONS:
			return {
				...state,
				variations: {
					...state.variations,
					[ action.parent.ID ]: action.variations,
				},
			};
		case SET_SELECTED:
			var newSel = state.selected ? state.selected.concat( action.product ) : [ action.product ];
			return {
				...state,
				selected: newSel
				// [
				// 	...state.selected,
				// 	action.product,
				// ]
			};
		
		case REMOVE_SELECTED:
			const id = action.product.id;
			var i = findIndex( selected, { id } );
			console.log( "index of remove " + i );
			console.log( "selected item: " + selected[i] );
			return {
				...state,
				selected: [
					...selected.slice( 0, i ),
					...selected.slice( i + 1 ),
				],
			};
		case SET_LIST:
			return {
				...state,
				list: action.list,
			};
		case GET_PRODUCTS:
			return {
				...state,
				isLoading: true,
			};
		default:
			return state;
	}
}
