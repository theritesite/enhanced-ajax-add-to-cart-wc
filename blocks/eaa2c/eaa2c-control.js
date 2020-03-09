/**
 * External dependencies
 */
import { __, _n, sprintf } from '@wordpress/i18n';
import PropTypes from 'prop-types';
import { Draggable, SelectControl, ToggleControl } from '@wordpress/components';
// import { withState } from '@wordpress/compose';
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
const EAA2CControl = ( {
    error,
    isLoading,
	onChange,
    // contentVisibility,
    item,
    value,
} ) => {

    /*const titleOptions = [
        {
            key: 'left',
            name: 'Left',
        },{
            key: 'right',
            name: 'Right',
        },{
            key: 'true',
            name: 'visible',
        },
    ];*/
    const options = [
        {
            value: 'small',
            label: 'small',
        },
        {
            value: 'normal',
            label: 'noraml',
        },
        {
            value: 'large',
            label: 'large',
        },
        {
            value: 'huge',
            label: 'huge',
        },
    ];

	if ( error ) {
		return <p>error { error.status }</p>;
    }

	return (
        // <p>tuff</p>
        <div id="draggable-panel" className="trs-wrapper">
            {/* <SelectControl
                label={ _.startCase(_.lowerCase("display " + item)) }
                options={ options }
                value={ item }
                onChange={ onChange }
                // value={ contentVisibility.title }
                // value={ options.find( ( option ) => option.key === options.key ) }
            /> */}
            <ToggleControl
                // label={ _.startCase(_.lowerCase("display " + item)) }
                checked={ value }
                onChange={ onChange }
                className="trs-toggle"
            />
            <p className="trs-toggle-label">{ _.startCase(_.lowerCase("display " + item)) }</p>
            {/* <SelectControl
                label="Title Size"
                options={ options }
                value={ item }
                onChange={ onChange }
                // value={ contentVisibility.title }
                // value={ options.find( ( option ) => option.key === options.key ) }
            /> */}
            {/* <SelectControl
                label="Price Size"
                options={ options }
                onChange={ onChange }
                value={ contentVisibility.price }
                // value={ options.find( ( option ) => option.key === options.key ) }
            />
            <SelectControl
                label="Quantity Size"
                options={ options }
                onChange={ onChange }
                value={ contentVisibility.quantity }
                // value={ options.find( ( option ) => option.key === options.key ) }
            /> */}
        </div>
	);
};

EAA2CControl.propTypes = {
	onChange: PropTypes.func.isRequired,
    // title: PropTypes.bool,
    // price: PropTypes.bool,
    // quantity: PropTypes.bool,
    // contentVisibility: PropTypes.object,
    item: PropTypes.string,
    value: PropTypes.bool,
};

EAA2CControl.defaultProps = {
    isLoading: true,
    // contentVisibility: {
        value: true,
    //     price: 'true',
    //     quantity: 'true',
    // },
};
// export default withState( EAA2CControl );
export default EAA2CControl;