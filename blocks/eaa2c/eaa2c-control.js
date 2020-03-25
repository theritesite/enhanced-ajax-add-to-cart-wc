/**
 * External dependencies
 */
import PropTypes from 'prop-types';
import { ToggleControl } from '@wordpress/components';
import _ from 'lodash';
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
const EAA2CControl = ( { error, onChange, item, value } ) => {
	if ( error ) {
		return <p>error { error.status }</p>;
	}

	return (
		<div className="trs-toggle-container">
			<p className="trs-toggle-label">
				{ _.startCase( _.lowerCase( item ) ) }
			</p>
			<ToggleControl
				checked={ value }
				onChange={ onChange }
				className="trs-toggle"
			/>
		</div>
	);
};

EAA2CControl.propTypes = {
	onChange: PropTypes.func.isRequired,
	item: PropTypes.string,
	value: PropTypes.bool,
};

EAA2CControl.defaultProps = {
	isLoading: true,
	value: true,
};

export default EAA2CControl;
