/**
 * External dependencies
 */
import { __, _n, sprintf } from '@wordpress/i18n';
import { SearchListControl } from '@woocommerce/components';
import PropTypes from 'prop-types';
import withSearchedTerm from './search-control';
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
const ProductControl = ( {
	error,
	onChange,
	onSearch,
	selected,
	products,
	isLoading,
} ) => {
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

	if ( error ) {
		return <p>error { error.status }</p>;
	}

	return (
		<div className="wrapper">
			<SearchListControl
				className="woocommerce-products"
				isSingle
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
};

ProductControl.propTypes = {
	onChange: PropTypes.func.isRequired,
	onSearch: PropTypes.func,
	selected: PropTypes.array,
	products: PropTypes.array,
	isLoading: PropTypes.bool,
};

ProductControl.defaultProps = {
	selected: [],
	products: [],
	isLoading: true,
};

export default withSearchedTerm( ProductControl );
