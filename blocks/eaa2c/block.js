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
	Button,
	ButtonGroup,
	Disabled,
	Toolbar,
	withSpokenMessages,
	Placeholder,
	RadioControl,
} from '@wordpress/components';

import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import _ from 'lodash';

import { Component, Fragment } from '@wordpress/element';
import PropTypes from 'prop-types';
import ProductControl from '../common/product-control';
import { formatPrice } from '../common/formatting/price';
import EAA2CControl from '../common/eaa2c-control';

class AddToCartBlock extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			editItem: 'default',
			selectedComponent: '',
		}
		this.onDragEnd = this.onDragEnd.bind( this );
	}

	handleTextChange(e) {
		const { setAttributes } = this.props;

		setAttributes( { buttonText: e.target.value } );
	}

	isVariableProduct() {
		const { attributes } = this.props;
		const { products } = attributes;

		return products.some( prod => ( prod.type === 'variation' || prod.type === 'variable' ) );
	}

	getItemControls( item, index ) {
		const { attributes, setAttributes } = this.props;
		const { contentVisibility, buttonText, quantity, titleType } = attributes;
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
				{ this.isVariableProduct() === false ? '' :
					<div>
						{ ( item === 'title' && ( selectedComponent !== 'title' || ( selectedComponent === 'title' && editItem !== 'title' ) ) ) ?
							<div className="edit-component btn-cmp" onClick={ (e) => { this.setState( { editItem: 'title' } ) } }>
								<p className="edit-component">edit</p>
								<p className="edit-component">title text</p>
							</div>
						: '' }
						{ ( item === 'title' && selectedComponent === 'title' && editItem === 'title' ) ?
							<div className="edit-component btn-cmp">
								<p className="edit-component">title text</p>
								<RadioControl
									className="trs-radio-cmp"
									selected={ titleType }
									options={ [
										{ label: 'Full', value: 'full' },
										{ label: 'Base', value: 'base' },
										{ label: 'Attributes', value: 'att' },
									] }
									onChange={ ( titleType ) => { setAttributes( { titleType } ) } }
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
					</div>
				}
				{ ( item === 'button' && ( selectedComponent !== 'button' || ( selectedComponent === 'button' && editItem !== 'button' ) ) ) ?
					<div className="edit-component btn-cmp" onClick={ (e) => { this.setState( { editItem: 'button' } ) } }>
						<p className="edit-component">edit</p>
						<p className="edit-component">button text</p>
					</div>
				: '' }
				{ ( item === 'button' && selectedComponent === 'button' && editItem === 'button' ) ?
					<div className="edit-component input-area btn-cmp">
						<p className="display-edit-title">button text:</p>
						<input
							type="text"
							name="button-text"
							onChange={ ( e ) => {
								setAttributes( { buttonText: e.target.value } );
							} }
							placeholder={ buttonText }
							value={ buttonText }
							className="button-text input-text"
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
				<div className="edit-component"> 
					<p className="edit-component">
						<span className="preview-text" onClick={ (e) => { this.setState({ editItem: 'default' }) }}>edit</span>
						<span className="preview-text" onClick={ (e) => { this.setState({ editItem: 'default' }) }}>default: {quantity['default']}</span>
					</p>
					<p className="edit-component">
						<span className="preview-text" onClick={ (e) => { this.setState({ editItem: 'min' }) }}>min: {quantity['min']}</span>
						<span className="preview-text" onClick={ (e) => { this.setState({ editItem: 'max' }) }}>max: {quantity['max']}</span>
					</p>
				</div>
				: '' }
				{ ( item === 'quantity' && selectedComponent === 'quantity' && editItem !== 'none' ) ?
				<div>
					<div className="edit-component"> 
						<p className="edit-component">
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
									default: { quantity['default'] }
								</button>
							</span>
						</p>
						<p className="edit-component">
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
						<div className="edit-component input-area">
							<p className="display-edit-title">{tempItem}: </p>
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

	getItemInspectorControls( item, index ) {
		const { attributes, setAttributes } = this.props;
		const { contentVisibility, buttonText, quantity, titleType } = attributes;
		const { editItem, selectedComponent } = this.state;
		const itemClassList = contentVisibility[ item ] === true ? 'trs-inner-wrapper' : 'trs-inner-wrapper disabled-item';
		const tempItem = editItem !== 'min' && editItem !== 'max' ? 'default' : editItem;

		return (
			<div key={ index } className={ itemClassList } onClick={ (e) => { this.setState( { selectedComponent: item } ) } }>
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
					title={ false }
				/>
				{ this.isVariableProduct() === false ? '' :
					<div className="edit-component btn-cmp">
						{ ( item === 'title' && ( selectedComponent !== 'title' || ( selectedComponent === 'title' && editItem !== 'title' ) ) ) ?
							<div className="edit-component btn-cmp" onClick={ (e) => { this.setState( { editItem: 'title' } ) } }>
								<p className="edit-component">edit title text</p>
							</div>
						: '' }
						{ ( item === 'title' && selectedComponent === 'title' && editItem === 'title' ) ?
							<div className="edit-component btn-cmp">
								<p className="edit-component">title text</p>
								<RadioControl
									className="trs-radio-cmp"
									selected={ titleType }
									options={ [
										{ label: 'Full', value: 'full' },
										{ label: 'Base', value: 'base' },
										{ label: 'Attributes', value: 'att' },
									] }
									onChange={ ( titleType ) => { setAttributes( { titleType } ) } }
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
					</div>
				}
				{ ( item === 'button' && ( selectedComponent !== 'button' || ( selectedComponent === 'button' && editItem !== 'button' ) ) ) ?
					<div className="edit-component btn-cmp" onClick={ (e) => { this.setState( { editItem: 'button' } ) } }>
						<p className="edit-component">edit button text</p>
					</div>
				: '' }
				{ ( item === 'button' && selectedComponent === 'button' && editItem === 'button' ) ?
					<div className="edit-component input-area btn-cmp">
						<p className="display-edit-title">
							<span className="preview-text ">button text:</span>
							<input
								type="text"
								name="button-text"
								onChange={ ( e ) => {
									setAttributes( { buttonText: e.target.value } );
								} }
								placeholder={ buttonText }
								value={ buttonText }
								className="button-text input-text"
							/>
							<button
								onClick={ (e) => {
									this.setState( { editItem: 'default' } );
								} }
							>
								done
							</button>
						</p>
					</div>
				: '' }
				{ ( item === 'quantity' && selectedComponent !== 'quantity'  ) || ( item === 'quantity' && selectedComponent === 'quantity' && editItem === 'none' ) ?
				<div className="edit-component btn-cmp"> 
					<p className="edit-component">
						<span className="preview-text" onClick={ (e) => { this.setState({ editItem: 'default' }) }}>edit</span>
						<span className="preview-text" onClick={ (e) => { this.setState({ editItem: 'default' }) }}>default: {quantity['default']}</span>
					</p>
					<p className="edit-component">
						<span className="preview-text" onClick={ (e) => { this.setState({ editItem: 'min' }) }}>min: {quantity['min']}</span>
						<span className="preview-text" onClick={ (e) => { this.setState({ editItem: 'max' }) }}>max: {quantity['max']}</span>
					</p>
				</div>
				: '' }
				{ ( item === 'quantity' && selectedComponent === 'quantity' && editItem !== 'none' ) ?
				<div className="edit-component btn-cmp">
					<div className="edit-component"> 
						<ButtonGroup>
							<Button isPrimary isPressed onClick={(e) => {
									editItem === 'default' ? 
										this.setState( { editItem: '' } ) :
										this.setState( { editItem: 'default' } )
									}
								}
							>
								Default
							</Button>
							<Button isPrimary onClick={(e) => {
									editItem === 'min' ? 
										this.setState( { editItem: '' } ) :
										this.setState( { editItem: 'min' } )
									}
								}
							>
								Min
							</Button>
							<Button isPrimary onClick={(e) => {
									editItem === 'max' ? 
										this.setState( { editItem: '' } ) :
										this.setState( { editItem: 'max' } )
									}
								}
							>
								Max
							</Button>
						</ButtonGroup>
					</div>
					{ ( editItem !== false && editItem !== '' ) ?
						<div className="edit-component input-area">
							<p className="display-edit-title">{tempItem}: 
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
							</p>
						</div>
					: '' }
				</div> : '' }
			</div>
		);
	}

	getItemInput( item ) {
		const { attributes, setAttributes } = this.props;
		const { buttonText, quantity } = attributes;

		if ( item === 'button' ) {
			return (
				<input
					type="text"
					onChange={ ( buttonText ) => {
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
		const { editMode, contentOrder, contentVisibility, quantity, buttonText } = attributes;

		return (
			<InspectorControls>
				<PanelBody
					title={ __( 'Content', 'enhanced-ajax-add-to-cart-wc' ) }
					className="eaa2c-content-container"
					initialOpen
				>
					{ contentOrder.map( ( item, index ) => {
						return ( <PanelRow key={index}>
							<label className="content-element " htmlFor={"content-order-form-" + item}>
								{ __(
									_.startCase( _.lowerCase( item ) ),
									'enhanced-ajax-add-to-cart-wc'
								) }
							</label>
							{ this.getItemInspectorControls( item, index ) }
						</PanelRow> );
					} ) }
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
		const onDone = () => {
			setAttributes( { editMode: false } );
			debouncedSpeak(
				__(
					'Showing AJAX Add to Cart block preview.',
					'enhanced-ajax-add-to-cart-wc'
				)
			);
		};

		return (
			<Placeholder
				label={ __(
					'AJAX Add to Cart button',
					'enhanced-ajax-add-to-cart-wc'
				) }
				className="eaa2c-block-placeholder"
			>
				<div className="eaa2c-block">
					{ this.displayControls() }
					
					<ProductControl
						selected={ attributes.products }
						onChange={ ( value = [] ) => {
							const selected = value;
							// console.log( "about to set products attribute from selected products" );
							setAttributes( { products: selected } );
						} }
						onListRequest={ (value = [] ) => {
							const list = value;
							this.setState( { list } );
						} }
						multiple={ false }
					/>
					<Button onClick={ onDone }>
						{ __( 'Done', 'enhanced-ajax-add-to-cart-wc' ) }
					</Button>
				</div>
			</Placeholder>
		);
	}

	renderViewMode() {
		const { attributes, className } = this.props;
		const { buttonText, contentVisibility, contentOrder, products, quantity, titleType, variations } = attributes;
		// console.log( "In render view mode." );

		if ( products[0] ) {
			// console.log( "products 'exist'" );
			if ( products[0].id > 0 ) {
				// console.log( products );
				const product = products[0];
				const title = product[titleType];
				return (
					<div className={ "enhanced-woocommerce-add-to-cart " + className }>
						{ contentOrder.map( ( item, index ) => {
							if ( item === 'title' && contentVisibility[ item ] === true ) {
								return (
									<span
										key={ index }
										className="ea-line ea-text"
									>
										{ title }
									</span>
								);
							} else if ( item === 'title' && contentVisibility[ item ] === true && title === 'full' ) {
								const att = item === 'title' ? 'name' : 'price';
								return (
									<span
										key={ index }
										className="ea-line ea-text"
									>
										<span>{ product[ titleType ] }</span>
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
												id={ product.id }
												className="input-text qty text"
												step={ 1 }
												defaultValue={ quantity['default'] }
												min={ quantity['min'] }
												max={ quantity['max'] }
												name={ 'quantity' }
												title={ 'quantity' }
												hidden={ ! contentVisibility[ item ] }
											/>
										</div>
									</span>
								);
							} else if ( item === 'separator' ) {
								return (
									<span key={ index } className="ea-line">
										<span className="ea-separator"></span>
									</span>
								);
							}
						} ) }
						<button
							type="submit"
							className="eaa2c_add_to_cart_button button alt"
							data-pid={ product.parent_id > 0 ? product.parent_id : product.id }
							data-vid={ product.id }
						>
							{ buttonText }
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
