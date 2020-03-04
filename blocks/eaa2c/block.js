/*const { __ } = wp.i18n;
const { InspectorControls, BlockControls } = wp.blockEditor;
const { PanelBody, PanelRow, ToggleControl, Button, Disabled, Toolbar, withSpokenMessages, Placeholder } = wp.components;
var {
    Component,
    Fragment
} = wp.element;
*/

import { __ } from '@wordpress/i18n';
import { InspectorControls, BlockControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, ToggleControl, Button, Disabled, Toolbar, withSpokenMessages, Placeholder } from '@wordpress/components';

import { Component, Fragment } from '@wordpress/element';
import PropTypes from 'prop-types';
import ProductControl from './product-control';
import EAA2CControl from './eaa2c-control';

class AddToCartBlock extends Component {
    getInspectorControls() {
        const { attributes, setAttributes } = this.props;
        const {
            contentVisibility,
            // alignment,
            editMode,
        } = attributes;

        return (
            <InspectorControls>
                <PanelBody
					title={ __( 'Content', 'enhanced-ajax-add-to-cart-wc' ) }
					initialOpen
				>
                    <PanelRow>
                         <label
                            htmlFor="edit-mode-form-toggle">
                            { __( 'Edit Mode', 'enhanced-ajax-add-to-cart-wc' ) }
                        </label>
                        <ToggleControl
                            label={ __(
                                'Edit Mode',
                                'enhanced-ajax-add-to-cart-wc'
                            ) }
                            help={
                                editMode
                                    ? __(
                                            'Editing.',
                                            'enhanced-ajax-add-to-cart-wc'
                                      )
                                    : __(
                                            'Previewing.',
                                            'enhanced-ajax-add-to-cart-wc'
                                      )
                            }
                            checked={ editMode }
                            onChange={ () =>
                                setAttributes( { editMode: ! editMode } )
                            }
                        />
                    </PanelRow>
				</PanelBody>
            </InspectorControls>
        );
    }

    renderEditMode() {
        const { attributes, debouncedSpeak, setAttributes } = this.props;
        const onDone = () => {
            setAttributes( { editMode: false } );
            debouncedSpeak(
				__( 'Showing AJAX Add to Cart block preview.', 'enhanced-ajax-add-to-cart-wc' )
            );
            console.log( "oh123?" );
        };

        return (
            <Placeholder
                label={ __( 'AJAX Add to Cart button', 'enhanced-ajax-add-to-cart-wc' ) }
				className="wc-block-products-grid wc-block-handpicked-products"
                // className="wc-ajax-add-to-cart-product-placeholder-container"
            >
				<div className="wc-block-handpicked-products__selection">
                    {/* <EAA2CControl /> */}
                    <ProductControl
                        selected={ attributes.products }
                        // onChange={ ( value ) => { setAttributes( { products: value } ) } }
                        onChange={ ( value = [] ) => {
							const ids = value.map( ( { id } ) => id );
							setAttributes( { products: ids } );
						} }
                    />
                    <Button onClick={ onDone }>
                        {/* Yes */}
						{ __( 'Done', 'enhanced-ajax-add-to-cart-wc' ) }
					</Button>
                </div>
            </Placeholder>
        )
    }

    render() {
        const { attributes, name, setAttributes } = this.props;
        const { editMode, alignment } = attributes;

        const onPreview = () => {
            setAttributes( { editMode: true } );
            console.log( "come on." );
        }

        if ( attributes.isPreview ) {
            return <div><p>This is a preview screen!</p></div>;
        }

        return (
            <Fragment>
				<BlockControls>
					<Toolbar
						controls={ [
							{
								icon: 'edit',
								title: __( 'Edit' ),
								onClick: () =>
									setAttributes( { editMode: ! editMode } ),
								isActive: editMode,
							},
						] }
					/>
				</BlockControls>
                { this.getInspectorControls() }
                { editMode ? (
                    this.renderEditMode()
                ) : (
                    <Disabled>
                        <p>Put the block here that will display on the front end.</p>
                    </Disabled>
                ) }
            </Fragment>
        );
    }
}

AddToCartBlock.propTypes = {
	/**
	 * The attributes for this block
	 */
	attributes: PropTypes.object.isRequired,
	/**
	 * The register block name.
	 */
	name: PropTypes.string.isRequired,
	/**
	 * A callback to update attributes
	 */
	setAttributes: PropTypes.func.isRequired,
	debouncedSpeak: PropTypes.func.isRequired,
};

// export default AddToCartBlock;

export default withSpokenMessages( AddToCartBlock );