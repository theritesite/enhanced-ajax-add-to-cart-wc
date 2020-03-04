/**
 * External dependencies
 */
import { __, _n, sprintf } from '@wordpress/i18n';
import PropTypes from 'prop-types';
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
const EAA2CControl = ( {
    error,
    title,
    price,
    quantity,
} ) => {

	if ( error ) {
		return <p>error { error.status }</p>;
	}

	return (
        <p>This is where the display options are.</p>
	);
};

EAA2CControl.propTypes = {
	title: PropTypes.bool,
	price: PropTypes.bool,
	quantity: PropTypes.bool,
};

EAA2CControl.defaultProps = {
	title: true,
	price: true,
	quantity: true,
};

export default EAA2CControl;