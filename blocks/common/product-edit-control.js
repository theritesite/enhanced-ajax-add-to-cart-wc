import PropTypes from 'prop-types';
// import { __, _n, sprintf } from '@wordpress/i18n';

const ProductEditControl = ( {
	error,
	selected,
	// isLoading,
	// contentVisibility,
} ) => {
	// const messages = {
	// 	clear: __( 'Clear all products', 'enhanced-ajax-add-to-cart-wc' ),
	// 	list: __( 'Products', 'enhanced-ajax-add-to-cart-wc' ),
	// 	noItems: __(
	// 		"Your store doesn't have any products.",
	// 		'enhanced-ajax-add-to-cart-wc'
	// 	),
	// 	search: __(
	// 		'Search for products to display',
	// 		'enhanced-ajax-add-to-cart-wc'
	// 	),
	// 	selected: ( n ) =>
	// 		sprintf(
	// 			_n(
	// 				'%d product selected',
	// 				'%d products selected',
	// 				n,
	// 				'enhanced-ajax-add-to-cart-wc'
	// 			),
	// 			n
	// 		),
	// 	updated: __(
	// 		'Product search results updated.',
	// 		'enhanced-ajax-add-to-cart-wc'
	// 	),
	// };

	if ( error ) {
		return <p>error { error.status }</p>;
	}

	return (
		// displayEdit( products )
		selected.map( ( product ) => (
			<p key={ product }>product 1! { product } </p>
		) )
		// <p>This is where the search is.</p>
	);
};

ProductEditControl.propTypes = {
	selected: PropTypes.array,
	isLoading: PropTypes.bool,
	contentVisibility: PropTypes.object,
};

ProductEditControl.defaultProps = {
	selected: [],
	isLoading: true,
	contentVisibility: {
		title: true,
		price: true,
		quantity: true,
	},
};

export default ProductEditControl;
