/**
 * External dependencies
 */
import { __, _n, sprintf } from '@wordpress/i18n';
import { SearchListControl } from '@woocommerce/components';
import PropTypes from 'prop-types';
import withParentSearchedTerm from './search-variation-control';
// import ProductEditControl from './product-edit-control';
// import EAA2CControl from '../eaa2c/eaa2c-control';
// wc.wcSettings.getSetting('isLargeCatalog');
// import { Spinner, MenuItem } from '@wordpress/components';

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
const ProductVariationControl = ( {
	parentProd,
	error,
	onChange,
	onSearch,
	selected,
	products,
	isLoading,
} ) => {
	const messages = {
		clear: __( 'Clear all products', 'enhanced-ajax-add-to-cart-wc' ),
		list: __( 'Product Variations', 'enhanced-ajax-add-to-cart-wc' ),
		noItems: __(
			"This product doesn't have any variations.",
			'enhanced-ajax-add-to-cart-wc'
		),
		search: __(
			'Search for the product variations and select',
			'enhanced-ajax-add-to-cart-wc'
		),
		selected: ( n ) =>
			sprintf(
				_n(
					'%d variation selected',
					'%d variations selected',
					n,
					'enhanced-ajax-add-to-cart-wc'
				),
				n
			),
		updated: __(
			'Product Variation search results updated.',
			'enhanced-ajax-add-to-cart-wc'
		),
	};

	if ( error ) {
		return <p>error { error.status }</p>;
	}

	return (
		<div className="wrapper">
			
			<SearchListControl
				className="woocommerce-product-variations"
				isSingle
				list={ products }
				parentProd={ parentProd }
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
};

ProductVariationControl.propTypes = {
	onChange: PropTypes.func.isRequired,
	onSearch: PropTypes.func,
	selected: PropTypes.array,
	products: PropTypes.array,
	isLoading: PropTypes.bool,
	parentProd: PropTypes.object,
};

ProductVariationControl.defaultProps = {
	selected: [],
	products: [],
	isLoading: true,
	parentProd: [],
};

export default withParentSearchedTerm( ProductVariationControl );
