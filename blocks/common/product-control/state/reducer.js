/**
 * External dependencies
 */
import { omit } from 'lodash';

/**
 * Internal dependencies
 */
import { 
    FETCH_PRODUCTS,
	FETCH_VARIATIONS,
	SET_SELECTED,
	SET_LIST,
	SET_PRODUCTS,
	SET_VARIATIONS,
	REMOVE_SELECTED 
} from './actions';


const DEFAULT_STATE = {
	isLoading: false,
	list: {},
	products: {},
	variations: {},
	selected: {},
};

export default ( state = DEFAULT_STATE, action ) => {
	switch ( action.type ) {
		case SET_PRODUCTS:
			return {
				...state,
				products: action.products,
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
			return {
				...state,
				selected: {
					...state.selected,
					[ action.product.ID ]: action.product,
				}
			};
		
		case REMOVE_SELECTED:
			return {
				...state,
				selected: omit( state.selected, action.product.ID ),
			};
		case SET_LIST:
			return {
				...state,
				list: action.list,
			};
		default:
			return state;
	}
}
