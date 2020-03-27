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
import { formatPrice } from '../common/price';
import EAA2CControl from './eaa2c-control';

class AddToCartBlock extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			// canDragInteractiveElements: true,
			editItem: 'default',
			selectedComponent: '',
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
		const { attributes, setAttributes, debouncedSpeak } = this.props;
		const { contentVisibility, buttonText, quantity } = attributes;
		const { editItem, selectedComponent } = this.state;
		const itemClassList = contentVisibility[ item ] === true ? 'trs-inner-wrapper' : 'trs-inner-wrapper disabled-item';
		const tempItem = editItem !== 'min' && editItem !== 'max' ? 'default' : editItem;

		return (
			<div key={ index } className={ itemClassList } onClick={ (e) => { this.setState( { selectedComponent: item } ) } }>
				<span className="dashicons dashicons-menu-alt3"></span>
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
				{ ( item === 'button' && ( selectedComponent !== 'button' || ( selectedComponent === 'button' && editItem !== 'button' ) ) ) ?
					<div onClick={ (e) => { this.setState( { editItem: 'button' } ) } }>
						<p>edit text</p>
					</div>
				: '' }
				{ ( item === 'button' && selectedComponent === 'button' && editItem === 'button' ) ?
					<div>
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
						/>
						<button
							onClick={ (e) => {
								this.setState( { editItem: 'default' } );
							} }
						>
							done
						</button>
					</div>
				: '' }
				{ ( item === 'quantity' && selectedComponent !== 'quantity'  ) || ( item === 'quantity' && selectedComponent === 'quantity' && editItem === 'none' ) ?
				<div className="qty-preview"> 
					<p className="qty-preview">
						<span className="preview-text" onClick={ (e) => { this.setState({ editItem: 'default' }) }}>edit</span>
						<span className="preview-text" onClick={ (e) => { this.setState({ editItem: 'default' }) }}>default: {quantity['default']}</span>
					</p>
					<p className="qty-preview">
						<span className="preview-text" onClick={ (e) => { this.setState({ editItem: 'min' }) }}>min: {quantity['min']}</span>
						<span className="preview-text" onClick={ (e) => { this.setState({ editItem: 'max' }) }}>max: {quantity['max']}</span>
					</p>
				</div>
				: '' }
				{ ( item === 'quantity' && selectedComponent === 'quantity' && editItem !== 'none' ) ?
				<div>
					<div className="qty-preview"> 
						<p className="qty-preview">
							<span className="qty-button">
								<button
									onClick={ (e) => {
										editItem === 'default' ? 
											this.setState( { editItem: '' } ) :
											this.setState( { editItem: 'default' } )
										}
									}
									className={ editItem === 'default' ? 'selected' : '' }
								>
									def: {quantity['default']}
								</button>
							</span>
						</p>
						<p className="qty-preview">
							<span className="qty-button">
								<button
									onClick={ (e) => {
										editItem === 'min' ? 
											this.setState( { editItem: '' } ) :
											this.setState( { editItem: 'min' } )
										}
									}
									className={ editItem === 'min' ? 'selected' : '' }
								>
									min: {quantity['min']}
								</button>
							</span>
							<span className="qty-button">
								<button
									onClick={ (e) => {
										editItem === 'max' ? 
											this.setState( { editItem: '' } ) :
											this.setState( { editItem: 'max' } )
										}
									}
									className={ editItem === 'max' ? 'selected' : '' }
								>
									max: {quantity['max']}
								</button>
							</span>
						</p>
					</div>
					{ ( editItem !== false && editItem !== '' ) ?
						<div className="qty-preview input-area">
							<p className="qty-preview">{tempItem}: </p>
							<input
								type="number"
								name={ tempItem + "-quantity" }
								onChange={ ( e ) => {
									const temp = JSON.parse(
										JSON.stringify( quantity )
									);
									temp[ tempItem ] = e.target.value;
									setAttributes( { quantity: temp } );
								} }
								placeholder={ quantity[ tempItem ] }
								value={ quantity[ tempItem ] }
								className={ "input-text qty text " + tempItem + "-quantity" }
							/>
							<button
								onClick={ (e) => {
									this.setState( { editItem: 'none' } );
								} }
							>
								done
							</button>
						</div>
					: '' }
				</div> : '' }
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
			<div className="trs-display-controls">
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
												className="trs-wrapper"
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
				className="eaa2c-block-placeholder"
				// className="wc-ajax-add-to-cart-product-placeholder-container"
			>
				<div className="eaa2c-block">
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
		const { contentVisibility, contentOrder, products, quantity } = attributes;
		console.log( "In render view mode." );

		if ( products[ 0 ] ) {
			console.log( "products 'exist'" );
			if ( products[0].id > 0 ) {
				console.log( products );
				const product = products[0];
				return (
					<div className="enhanced-woocommerce-add-to-cart">
						{ contentOrder.map( ( item, index ) => {
							if ( item === 'title' && contentVisibility[ item ] === true ) {
								const att = item === 'title' ? 'name' : 'price';
								return (
									<span
										key={ index }
										className="ea-line ea-text"
									>
										<span>{ product[ att ] }</span>
									</span>
								);
							} else if (  item === 'price'  && contentVisibility[ item ] === true ) {
								return (
									<span
										key={ index }
										className="ea-line ea-text"
									>
										{ formatPrice( product['price'] ) }
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
												defaultValue={ quantity['default'] }
												min={ quantity['min'] }
												max={ quantity['max'] }
												name={ 'steven' }
												title={ 'quantity' }
												hidden={ ! contentVisibility[ item ] }
											/>
										</div>
									</span>
								);
							} else if ( item === 'separator' ) {
								return (
									<span className="ea-line">
										<span className="ea-separator"></span>
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
