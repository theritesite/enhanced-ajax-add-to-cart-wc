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
import {
	PanelBody,
	PanelRow,
	ToggleControl,
	Button,
	Disabled,
	Toolbar,
	withSpokenMessages,
	Placeholder,
} from '@wordpress/components';

import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import { Component, Fragment } from '@wordpress/element';
import PropTypes from 'prop-types';
import ProductControl from '../common/product-control';
import EAA2CControl from './eaa2c-control';

class AddToCartBlock extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			canDragInteractiveElements: true,
		//     contentVisibility: this.props.attributes.contentVisibility
		}
		this.onDragEnd = this.onDragEnd.bind( this );
	}

	handleTextChange(e) {
		const { attributes, setAttributes } = this.props;
		const { contentVisibility, buttonText } = attributes;

		console.log(e.target.value);
		setAttributes( { buttonText: e.target.value } );
	}

	getItemControls( item, index ) {
		const { attributes, setAttributes } = this.props;
		const { contentVisibility, buttonText, quantity } = attributes;

		return (
			<div key={ index } className="trs-wrapper">
				<p className="trs-wrapper">=</p>
				<EAA2CControl
					key={ index }
					onChange={ ( value ) => {
						const temp = JSON.parse(
							JSON.stringify( contentVisibility )
						);
						temp[ item ] = value;
						setAttributes( { contentVisibility: temp } );
					} }
					value={ contentVisibility[ item ] }
					item={ item }
				/>
				{ ( item === 'button' ) ?
				<input
					type="text"
					name="button-text"
					// onFocus={ this.setState( { canDragInteractiveElements: false } ) }
					onChange={ ( e ) => {
						setAttributes( { buttonText: e.target.value } );
					} }
					placeholder={ buttonText }
					value={ buttonText }
					className="button-text"
				/> : '' }
				{ ( item === 'quantity' ) ?
				<div>
					<input
						type="number"
						name="default-quantity"
						// onFocus={ this.setState( { canDragInteractiveElements: false } ) }
						onChange={ ( e ) => {
							const temp = JSON.parse(
								JSON.stringify( quantity )
							);
							temp[ 'default' ] = e.target.value;
							setAttributes( { quantity: temp } );
						} }
						placeholder={ quantity[ 'default' ] }
						value={ quantity[ 'default' ] }
						className="input-text qty text default-quantity"
					/>
					<input
						type="number"
						name="min-quantity"
						// onFocus={ this.setState( { canDragInteractiveElements: false } ) }
						onChange={ ( e ) => {
							const temp = JSON.parse(
								JSON.stringify( quantity )
							);
							temp[ 'min' ] = e.target.value;
							setAttributes( { quantity: temp } );
						} }
						placeholder={ quantity[ 'min' ] }
						value={ quantity[ 'min' ] }
						className="input-text qty text min-quantity"
					/>
					<input
						type="number"
						name="max-quantity"
						// onFocus={ this.setState( { canDragInteractiveElements: false } ) }
						onChange={ ( e ) => {
							const temp = JSON.parse(
								JSON.stringify( quantity )
							);
							temp[ 'max' ] = e.target.value;
							setAttributes( { quantity: temp } );
						} }
						placeholder={ quantity[ 'max' ] }
						value={ quantity[ 'max' ] }
						className="input-text qty text max-quantity"
					/>
				</div> : '' }
				{/* { ( item === 'button' || item === 'quantity' ) ? this.getItemInput( item ) : '' } */}
			</div>
		);
	}

	getItemInput( item ) {
		const { attributes, setAttributes } = this.props;
		const { contentVisibility, buttonText, quantity } = attributes;

		if ( item === 'button' ) {
			return (
				<input
					type="text"
					onChange={ ( buttonText ) => {
						console.log( buttonText );
						setAttributes( { buttonText: buttonText } );
					} }
					value={ buttonText }
					className="button-text"
				/>
			);
		} else if ( item === 'quantity' ) {
			return (
				<div className="ea-quantity-container">
					<input
						type="number"
						onChange={ ( e ) => {
							const temp = JSON.parse(
								JSON.stringify( quantity )
							);
							temp[ 'default' ] = e.target.value;
							setAttributes( { quantity: temp } );
						} }
						value={ quantity[ 'default' ] }
						className="default-quantity quantity"
					/>
					<input
						type="number"
						onChange={ ( e ) => {
							const temp = JSON.parse(
								JSON.stringify( quantity )
							);
							temp[ 'min' ] = e.target.value;
							setAttributes( { quantity: temp } );
						} }
						value={ quantity[ 'min' ] }
						className="min-quantity quantity"
					/>
					<input
						type="number"
						onChange={ ( e ) => {
							const temp = JSON.parse(
								JSON.stringify( quantity )
							);
							temp[ 'max' ] = e.target.value;
							setAttributes( { quantity: temp } );
						} }
						value={ quantity[ 'max' ] }
						className="max-quantity quantity"
					/>
				</div>
			);
		}
	}

	getItems() {
		const { attributes } = this.props;
		const { contentOrder } = attributes;

		const items = contentOrder.map( ( item, index ) => ( {
			id: item,
			component: this.getItemControls( item, index ),
		} ) );

		return items;
	}

	getInspectorControls() {
		const { attributes, setAttributes } = this.props;
		const { editMode } = attributes;

		return (
			<InspectorControls>
				<PanelBody
					title={ __( 'Content', 'enhanced-ajax-add-to-cart-wc' ) }
					initialOpen
				>
					<PanelRow>
						<label htmlFor="edit-mode-form-toggle">
							{ __(
								'Edit Mode',
								'enhanced-ajax-add-to-cart-wc'
							) }
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

	reorder( list, startIndex, endIndex ) {
		const result = Array.from( list );
		const [ removed ] = result.splice( startIndex, 1 );
		result.splice( endIndex, 0, removed );

		return result;
	}

	onDragEnd( result ) {
		// dropped outside the list
		if ( ! result.destination ) {
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
		return (
			<div className="we-should-make-a-parent">
				<DragDropContext onDragEnd={ this.onDragEnd }>
					<Droppable droppableId="droppable" direction="horizontal">
						{ ( droppableProvided ) => (
							<div
								ref={ droppableProvided.innerRef }
								{ ...droppableProvided.droppableProps }
								// {...droppableProvided.dragHandleProps}
								className="trs-options-wrapper"
							>
								{ this.getItems().map( ( item, index ) => (
									<Draggable
										key={ item.id }
										draggableId={ item.id }
										disableInteractiveElementBlocking={
											false
										}
										index={ index }
									>
										{ ( draggableProvided ) => (
											<div
												ref={
													draggableProvided.innerRef
												}
												{ ...draggableProvided.draggableProps }
												{ ...draggableProvided.dragHandleProps }
											>
												{ item.component }
											</div>
										) }
									</Draggable>
								) ) }
								{ droppableProvided.placeholder }
							</div>
						) }
					</Droppable>
				</DragDropContext>
			</div>
		);
	}

	renderEditMode() {
		const { attributes, debouncedSpeak, setAttributes } = this.props;
		// const { title } = contentVisibility;
		const onDone = () => {
			setAttributes( { editMode: false } );
			debouncedSpeak(
				__(
					'Showing AJAX Add to Cart block preview.',
					'enhanced-ajax-add-to-cart-wc'
				)
			);
			// console.log( "oh123?" );
		};

		return (
			<Placeholder
				label={ __(
					'AJAX Add to Cart button',
					'enhanced-ajax-add-to-cart-wc'
				) }
				className="wc-block-products-grid wc-block-handpicked-products"
				// className="wc-ajax-add-to-cart-product-placeholder-container"
			>
				<div className="wc-block-handpicked-products__selection">
					{ this.displayControls() }
					<ProductControl
						selected={ attributes.products }
						onChange={ ( value = [] ) => {
							const selected = value;
							setAttributes( { products: selected } );
							// setAttributes( { products: prodDat } );
						} }
					/>
					<Button onClick={ onDone }>
						{ __( 'Done', 'enhanced-ajax-add-to-cart-wc' ) }
					</Button>
				</div>
			</Placeholder>
		);
	}

	renderViewMode() {
		const { attributes } = this.props;
		const { contentVisibility, contentOrder, products } = attributes;
		console.log( "In render view mode." );

		if ( products[ 0 ] ) {
			console.log( "products 'exist'" );
			if ( products[0].id > 0 ) {
				console.log( products );
				const product = products[0];
				return (
					<div className="woocommerce-variation-add-to-cart variations_button">
						{ contentOrder.map( ( item, index ) => {
							if (
								( item === 'title' || item === 'price' ) &&
								contentVisibility[ item ] === true
							) {
								const att = item === 'title' ? 'name' : 'price';
								return (
									<span
										key={ index }
										className="ea-line ea-text"
									>
										<span>{ product[ att ] }</span>
									</span>
								);
							} else if ( item === 'quantity' ) {
								return (
									<span
										key={ index }
										className="ea-line quantity-container"
									>
										<div className="quantity">
											<input
												type="number"
												id={ products[ 0 ].id }
												className="input-text qty text"
												step={ 1 }
												min={ 1 }
												max={ 4 }
												name={ 'steven' }
												title={ 'quantity' }
												hidden={ ! contentVisibility[ item ] }
											/>
										</div>
									</span>
								);
							}
						} ) }
						<button
							type="submit"
							className="eaa2c_add_to_cart_button button alt"
							data-pid={ products[ 0 ].parent_id > 0 ? products[ 0 ].parent_id : products[ 0 ].id }
							data-vid={ products[ 0 ].id }
						>
							{ 'add to cart!?' }
						</button>
					</div>
				);
			}
		}
		return <div className="no-product-found">no product found</div>;
	}

	render() {
		const { attributes } = this.props;

		if ( this.props.isEditor ) {
			const { setAttributes } = this.props;
			const { editMode } = attributes;

			if ( attributes.isPreview ) {
				return (
					<div>
						<p>This is a preview screen!</p>
					</div>
				);
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
										setAttributes( {
											editMode: ! editMode,
										} ),
									isActive: editMode,
								},
							] }
						/>
					</BlockControls>
					{ this.getInspectorControls() }
					{ editMode ? (
						this.renderEditMode()
					) : (
						<Disabled>{ this.renderViewMode() }</Disabled>
					) }
				</Fragment>
			);
		}

		return this.renderViewMode();
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
	isEditor: PropTypes.bool,
	setAttributes: PropTypes.func,
	debouncedSpeak: PropTypes.func.isRequired,
};

export default withSpokenMessages( AddToCartBlock );
