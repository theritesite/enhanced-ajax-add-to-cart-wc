/**
 * External dependencies
 */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { __, _n, sprintf } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import * as ProductControlActions from './state/actions';
import SearchListControl from '../search-list-control';

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

export class ProductControler extends Component {

	render() {
		const { error, multiple, isLoading, products, selected, onSearch, onChange } = this.props;

		console.log( "in render view" );
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
}

ProductControler.propTypes = {
	onChange: PropTypes.func.isRequired,
	onSearch: PropTypes.func,
	selected: PropTypes.array,
	products: PropTypes.array,
	variations: PropTypes.array,
	isLoading: PropTypes.bool,
	multiple: PropTypes.bool,
};

ProductControler.defaultProps = {
	selected: [],
	products: [],
	variations: [],
	isLoading: true,
	multiple: false,
};

const mapStateToProps = state => ({
	selected: state.selected,
	products: state.products,
	variations: state.variations,
	isLoading: state.isLoading,
  });
  
const mapDispatchToProps = dispatch => bindActionCreators(ProductControlActions, dispatch );
  
export default connect(mapStateToProps, mapDispatchToProps)(ProductControler);