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

import _ from 'lodash';
import {
    DragDropContext,
    Draggable,
    Droppable,
} from 'react-beautiful-dnd';

import { Component, Fragment } from '@wordpress/element';
import PropTypes from 'prop-types';
import ProductControl from '../common/product-control';
// import EAA2CControl from './eaa2c-control';


class AddToCartBlock extends Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     contentVisibility: this.props.attributes.contentVisibility
        // }
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    getItemToggle( item ) {
        const { attributes, setAttributes } = this.props;
        const {
            contentVisibility,
        } = attributes;

        if ( item.content === 'button' ) return;
        
        return (
            <ToggleControl
                checked={ contentVisibility[item.content] }
                onChange={ ( value ) => {
                    const temp = JSON.parse(JSON.stringify(contentVisibility));
                    temp[item.content] = value;
                    setAttributes( { contentVisibility: temp } );
                } }
                className="trs-toggle"
            />
        );
    }

    getItemControls( item, index ) {
        // const { attributes, setAttributes } = this.props;
        // const {
        //     contentVisibility,
        // } = attributes;
    
        return(
            <div key={item.content + index} className="trs-wrapper">
                <p className="trs-wrapper">
                    =
                </p>
                    {/* { this.getItemToggle( item ) } */}
                    <p className="trs-toggle-label">{ _.startCase(_.lowerCase( "display " + item.content )) }</p>
                {/* <EAA2CControl 
                    key={ index }
                    onChange={ ( value ) => {
                        const temp = JSON.parse(JSON.stringify(contentVisibility));
                        temp[item.content] = value;
                        setAttributes( { contentVisibility: temp } );
                    } }
                    value={ contentVisibility[item.content] } 
                    item={ item.content }
                />  */}
            </div>
        );

    }

    getItems() {
        const { attributes } = this.props;
        const { contentOrder } = attributes;
    

        let items = contentOrder.map( ( item, index ) => (
            {
                id: item.content,
                component: this.getItemControls(item, index),
            }
        ));

        return items;
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

        const { attributes, setAttributes } = this.props;
        const { contentOrder } = attributes;
    
        const items = this.reorder(
            contentOrder,
            result.source.index,
            result.destination.index
        );

        setAttributes( { contentOrder: items } );
    }

    displayControls() {
        const { attributes, setAttributes } = this.props;
        const {
            contentVisibility,
            contentOrder,
            isLoading,
        } = attributes;

        return ( 
            <DragDropContext
                onDragEnd={this.onDragEnd}
            >
                <Droppable droppableId="droppable" direction="horizontal">
                    {(droppableProvided) => (
                        <div
                            ref={droppableProvided.innerRef}
                            {...droppableProvided.droppableProps}
                            // {...droppableProvided.dragHandleProps}
                            className="trs-options-wrapper"
                        >
            {/* <div> */}
                            {this.getItems().map((item, index) => (
                                // <Draggable
                                //     key={item.id}
                                //     draggableId={item.id}
                                //     disableInteractiveElementBlocking={
                                //         true
                                //     }
                                //     index={index}
                                // >
                                //     {(draggableProvided) => (
                                //     <div
                                //         ref={draggableProvided.innerRef}
                                //         {...draggableProvided.draggableProps}
                                //         {...draggableProvided.dragHandleProps}
                                //     >
                                        item.component
                                //     </div>
                                //     )}
                                // </Draggable>
                            ))}
                            {/* {droppableProvided.placeholder}     */}
                            </div>
            //              {/* </div>
                    )}
                </Droppable>
            </DragDropContext> 
        );
        
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
                    <ProductControl
                        selected={ attributes.products }
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

    renderViewMode() {

        const { attributes, setAttributes } = this.props;
        const { contentVisibility, contentOrder, products } = attributes;

        if ( products[0] > 0 ){
            return (
                <div className="woocommerce-variation-add-to-cart variations_button">
                    { contentOrder.map( (item, index ) => {

                        const classVar = "ea-" + item.content;
                        if ( contentVisibility[item.content] === true ) {
                            console.log( "we are in the visibility, and we are trying to render the: " + item.content );
                            if ( item.content === 'title' || item.content === 'price' ) {
                                console.log( "item content is: " + item.content );
                                return (<span key={index} className="ea-line ea-text"><span>Product {item.content}</span></span>);
                            }
                            else if ( item.content === 'quantity' ) {
                               return ( <span key={index} className="ea-line quantity-container">
                                    <div className="quantity">
                                        <input type="number" id={products[0]} className="input-text qty text" step={1} min={1} max={4} name={"steven"}
                                                title={"quantity"} 
                                                size="4" />
                                    </div>
                                </span>);
                            }
                        }
                        else {

                            console.log( "we are in the visibility, and we are trying to render the: " + item.content + "   but its false :(" );
                        }
                    })}
                    <button type="submit" className="variable_add_to_cart_button button alt" data-pid={products[0]}
                            data-vid={products[0]}>{"add to cart!?"}</button>
                </div>
            );
        }
        return(
            <div className="no-product-found">no product found</div>
        )
    }

    render() {
        const { attributes, setAttributes } = this.props;
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
                        { this.renderViewMode() }
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
	// name: PropTypes.string.isRequired,
	/**
	 * A callback to update attributes
	 */
	setAttributes: PropTypes.func,
	debouncedSpeak: PropTypes.func.isRequired,
};

export default withSpokenMessages( AddToCartBlock );