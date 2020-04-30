/**
 * External dependencies
 */
import { __, _n, sprintf } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
// import { SearchListControl } from '@woocommerce/components';
import SearchListControl from './search-list-control';
import PropTypes from 'prop-types';
import withSearchedTerm from './search-control';
// import ProductEditControl from './product-edit-control';
// import EAA2CControl from '../eaa2c/eaa2c-control';
// wc.wcSettings.getSetting('isLargeCatalog');
// import { Spinner, MenuItem } from '@wordpress/components';
const { dispatch, useSelect, select } = wp.data;
// import './state/product-control-reducer';
const { registerStore } = wp.data;
import { omit } from 'lodash';
import { getProducts } from './search-product-util';
import { getProductVariations } from './search-product-variation-util';
import { setNonce, setBaseURL } from '../api/request';

if ( global.EAA2C ) {
    setNonce( global.EAA2C.nonce );
    setBaseURL( global.EAA2C.baseURL );
}
import { 
    FETCH_PRODUCTS,
    FETCH_VARIATIONS,
    SET_SELECTED,
    SET_LIST,
    SET_PRODUCTS,
    SET_VARIATIONS,
	REMOVE_SELECTED,
	fetchProducts,
	fetchVariations,
	setSelected,
	setList,
	setProducts,
	setVariations,
	removeSelected
} from './product-control/state/product-control-actions';

const DEFAULT_STATE = {
	loading: false,
	list: {},
	products: {},
	variations: {},
	selected: {},
};


registerStore( 'eaa2c-product-selector', {
	reducer( state = DEFAULT_STATE, action ) {
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
		}
		return state;
	},
	actions: {
		fetchProducts,
		fetchVariations,
		setSelected,
		setList,
		setProducts,
		setVariations,
		removeSelected
	},
	selectors: {
		getProductList( state ) {
			const { products } = state;
			return products;
		},
		getVariationList( state, parent ) {
			const { variations } = state;
			const variationsList = variations[ parent ];
			return variationsList;
		},
		getList( state ) {
			const { list } = state;
			return list;
		},
		getSelected( state ) {
			const { selected } = state;
			return selected;
		}
	},
	controls: {
		FETCH_PRODUCTS( action ) {
			return getProducts( action.selected, action.search, action.args );
		},
		FETCH_VARIATIONS( action ) {
			return getProductVariations( action.parent, action.selected, action.search, action.args );
		},
	},
	resolvers: {
		* getProductList( selected, search, args ) {
			const products = yield fetchProducts( selected, search, args );
			return products;
		},
		* getVariationList( parentProd, selected, search, args ) {
			const variations = yield fetchVariations( parentProd, selected, search, args );
			return variations;
		}
	}
} );
const messages = {
	clear: __( 'Clear all products', 'enhanced-ajax-add-to-cart-wc' ),
	list: __( 'Products', 'enhanced-ajax-add-to-cart-wc' ),
	noItems: __(
		"Your store doesn't have any products.",
		'enhanced-ajax-add-to-cart-wc'
	),
	search: __(
		'Search for products to display',
		'enhanced-ajax-add-to-cart-wc'
	),
	selected: ( n ) =>
		sprintf(
			_n(
				'%d product selected',
				'%d products selected',
				n,
				'enhanced-ajax-add-to-cart-wc'
			),
			n
		),
	updated: __(
		'Product search results updated.',
		'enhanced-ajax-add-to-cart-wc'
	),
};

/**
 * The products control exposes a custom selector for searching and selecting
 * products.
 *
 * @param {Object} props Component props.
 * @param {Function} props.onChange  Callback fired when the selected item changes
 * @param {Function} props.onSearch  Callback fired when a search is triggered
 * @param {Array}    props.selected  An array of selected products.
 * @param {Array}    props.products  An array of products to select from.
 * @param {boolean}  props.isLoading Whether or not the products are being loaded.
 *
 * @return {Function} A functional component.
 */
export class ProductControl extends Component {
	constructor() {
		super( ...arguments );

	}
// const ProductControl = ( {
// 	error,
// 	onChange,
// 	onSearch,
// 	selected,
// 	products,
// 	isLoading,
// 	multiple,
// } ) => {

	componentDidMount() {
		const { selected } = this.props;
		console.log( "before" );
		// dispatch( 'eaa2c-product-selector' ).fetchProducts( selected );
		const list = select( 'eaa2c-product-selector' ).getProductList();
		console.log( "we are after the fetch but not waited" );
		console.log( list );
	}

	render() {
		const { error, multiple, isLoading, products, selected, onSearch, onChange } = this.props;

		if ( error ) {
			return <p>error { error.status }</p>;
		}

		return (
			<div className="wrapper">
				<SearchListControl
					className="woocommerce-products"
					isSingle={ multiple === true ? false : true }
					list={ products }
					isLoading={ isLoading }
					selected={ products.filter( ( product ) => {
						const selectedIds = selected.map( ( { id } ) => id );
						return selectedIds.includes( product.id );
						}
					) }
					onSearch={ onSearch }
					onChange={ onChange }
					messages={ messages }
				/>
			</div>
		);
	}
};

ProductControl.propTypes = {
	onChange: PropTypes.func.isRequired,
	onSearch: PropTypes.func,
	selected: PropTypes.array,
	products: PropTypes.array,
	isLoading: PropTypes.bool,
	multiple: PropTypes.bool,
};

ProductControl.defaultProps = {
	selected: [],
	products: [],
	isLoading: true,
	multiple: false,
};

export default ProductControl;
// export default withSearchedTerm( ProductControl );
