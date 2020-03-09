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

import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import { Component, Fragment } from '@wordpress/element';
import PropTypes from 'prop-types';
import ProductControl from './product-control';
import EAA2CControl from './eaa2c-control';


class AddToCartBlock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: this.props.attributes.contentOrder
        }
        this.onDragEnd = this.onDragEnd.bind(this);
    }

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

    reorder(list, startIndex, endIndex) {
        
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
      
        return result;
    };

    onDragEnd(result) {
        // dropped outside the list
        if (!result.destination) {
          return;
        }

        console.log( "destination can be correct" );

        const { attributes, setAttributes } = this.props;
        const {
            contentVisibility,
            contentOrder,
        } = attributes;
    
        const items = this.reorder(
            contentOrder,
            result.source.index,
            result.destination.index
        );

        console.log( "setting attributes." );
    
        setAttributes( { contentOrder: items } );
    }

    displayControls() {
        const { attributes, setAttributes } = this.props;
        const {
            contentVisibility,
            contentOrder,
        } = attributes;

        return ( 
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable" direction="horizontal">
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className="trs-options-wrapper"
                        >
                            {/* {Object.keys(contentVisibility).map((key, index) => { */}
                            {contentOrder.map((key, index) => {
                                console.log( "trying to find visibility: " + contentVisibility[key.content] );
                                console.log( "trying to find visibility but heres the index: " + index );
                                console.log( "trying to find visibility but heres the key: " + key.content );
                                console.log( "trying to find visibility but heres the key: " + contentOrder[index].content );
                                // const visibility = contentVisibility[key];
                                return( 
                                    <Draggable key={index} draggableId={key.content} index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                className="trs-wrapper"
                                            >
                                                <p
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className="trs-wrapper"
                                                >
                                                    Here is the drag handle!
                                                </p>
                                                <EAA2CControl 
                                                    key={ index }
                                                    onChange={ ( value ) => {
                                                        const temp = JSON.parse(JSON.stringify(contentVisibility));
                                                        temp[key.content] = value;
                                                        setAttributes( { contentVisibility: temp } );
                                                    } }
                                                    value={ contentVisibility[key.content] } 
                                                    item={ key.content }
                                                /> 
                                            </div>
                                        )}
                                    </Draggable>
                                );
                            })}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext> 
        );
                        {/*}

        var displayOptions = Object.keys(contentVisibility).map(function(key) {
            return (
                    <div>
                    {console.log( "in the old way" )}
                        <EAA2CControl 
                            // key={ key }
                            onChange={ ( value ) => {
                                const temp = JSON.parse(JSON.stringify(contentVisibility));
                                temp[key] = value;
                                setAttributes( { contentVisibility: temp } );
                            } }
                            value={ contentVisibility[key] } 
                            item={ key }
                        />
                    </div>
            )
        });
        

        return <div className="trs-options-wrapper">
                {*//* <DraggableList
                    axis="x"
                    handle=".trs-wrapper"
                    list={displayOptions}
                /> *//*}
                {displayOptions}
                </div>;
                */}
        
    }

    renderEditMode() {
        const { attributes, debouncedSpeak, setAttributes } = this.props;
        const {
            contentVisibility,
            contentOrder,
            // alignment,
            editMode,
        } = attributes;
        const { title } = contentVisibility;
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
                    { this.displayControls() }
                    {/* <EAA2CControl 
                        onChange={ ( value ) => {
                            const temp = JSON.parse(JSON.stringify(contentVisibility));
                            temp.title = value;
							setAttributes( { contentVisibility: temp } );
						} }
                        item={ contentVisibility.title } 
                    /> */}
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