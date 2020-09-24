import { __ } from '@wordpress/i18n';
import { InspectorControls, BlockControls } from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	Button,
	ButtonGroup,
	CheckboxControl,
	Disabled,
	SelectControl,
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
import { setNonce, setBaseURL } from '../common/api/request';
import { getProductImage } from '../common/query-product-image-util';

class AddToCartBlock extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			editItem: 'default',
			selectedComponent: '',
			imageSizes: {},
			imageSrc: {},
		}
		this.onDragEnd = this.onDragEnd.bind( this );
	}
	
	componentDidMount() {
		if ( global.EAA2C ) {
			// console.log( "we made it into the global setarea" );
			setNonce( global.EAA2C.nonce );
			setBaseURL( global.EAA2C.baseURL );
			this.setState( { imageSizes: global.EAA2C.imageSizes } );
			const { attributes, setAttributes } = this.props;
			const { contentVisibility, contentOrder } = attributes;

			const { tempVis, tempOrder } = this.addAvailableElements();

			if ( tempVis !== contentVisibility || tempOrder !== contentOrder ) {
				setAttributes( { contentVisibility: tempVis, contentOrder: tempOrder } );
			}
		}
	}

	/**
	 * This section is dedicated to the removable portions of the plugin.
	 * After some experimentation, this was the method that was deemed most
	 * compatible with the settings page and ensuring that the elements would
	 * appear and be sortable if there were no "invisible" elements.
	 * 
	 * The goal for this section would be to remove the elements completely
	 * and make them functionaly add and remove using filters from WordPress,
	 * but as this is version 1 we are learning to implement these things and
	 * found the WordPress JavaScript filters late in the game.
	 */
	addAvailableElements() {
		const { attributes } = this.props;
		let tempVis = attributes.contentVisibility;
		let tempOrder = attributes.contentOrder;

		if ( global.EAA2C ) {
			const { shortDescription, image, custom } = global.EAA2CGROUP;

			if ( shortDescription === 'on' ) {
				if ( ! ( "short_description" in tempVis ) ) {
					tempOrder.indexOf( 'short_description' ) === -1 ? tempOrder.splice( tempOrder.length, 0, 'short_description' ) : '';
					tempVis['short_description'] = false;
				}
			} else {
				if ( "short_description" in tempVis ) {
					let index = tempOrder.indexOf( 'short_description' );
					// create a new array or object for each
					tempVis = _.omit( tempVis, 'short_description' );
					if ( index !== -1 ) {
						// console.log( "removing short_description from listed elements as it was found" );
						// console.log( tempOrder );
						tempOrder = [ ...tempOrder.slice( 0, index ), ...tempOrder.slice( index + 1 ) ];
						// console.log( tempOrder );
					}
				}
			}

			if ( custom === 'on' ) {
				if ( ! ( "custom" in tempVis ) ) {
					tempOrder.indexOf( 'custom' ) === -1 ? tempOrder.splice( tempOrder.length, 0, 'custom' ) : '';
					tempVis['custom'] = false;
				}
			} else {
				if ( "custom" in tempVis ) {
					let index = tempOrder.indexOf( 'custom' );
					// create a new array or object for each
					tempVis = _.omit( tempVis, 'custom' );
					if ( index !== -1 ) {
						// console.log( "removing custom from listed elements as it was found" );
						// console.log( tempOrder );
						tempOrder = [ ...tempOrder.slice( 0, index ), ...tempOrder.slice( index + 1 ) ];
						// console.log( tempOrder );
					}
				}
			}

			if ( image === 'on' ) {
				if ( ! ( "image" in tempVis ) ) {
					tempOrder.indexOf( 'image' ) === -1 ? tempOrder.splice( tempOrder.length, 0, 'image' ) : '';
					tempVis['image'] = false;
				}
			} else {
				if ( "image" in tempVis ) {
					let index = tempOrder.indexOf( 'image' );
					// create a new array or object for each
					tempVis = _.omit( tempVis, 'image' );
					if ( index !== -1 ) {
						// console.log( "removing image from listed elements as it was found" );
						// console.log( tempOrder );
						tempOrder = [ ...tempOrder.slice( 0, index ), ...tempOrder.slice( index + 1 ) ];
						// console.log( tempOrder );
					}
				}
			}
		}
		return { tempVis, tempOrder };
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
		const { contentVisibility, buttonText, custom, image, quantity, titleAction, titleType } = attributes;
		const { editItem, imageSizes, selectedComponent } = this.state;
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
				{ ( item === 'title' && ( selectedComponent !== 'title' || ( selectedComponent === 'title' && editItem !== 'title' ) ) ) ?
					<div className="edit-component btn-cmp" onClick={ (e) => { this.setState( { editItem: 'title' } ) } }>
						<button className="edit-component">edit title</button>
					</div>
				: '' }
				{ ( item === 'title' && selectedComponent === 'title' && editItem === 'title' ) ?
					<div className="edit-component btn-cmp">
						{ this.isVariableProduct() === false ? '' :
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
								<hr />
							</div>
						}
						<CheckboxControl
							className="trs-checkbox"
							heading="Link?"
							checked={ titleAction === 'link' }
							onChange={ ( titleAction ) => { setAttributes( { titleAction: titleAction === true ? 'link' : '' } ) } }
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
				{ ( item === 'button' && ( selectedComponent !== 'button' || ( selectedComponent === 'button' && editItem !== 'button' ) ) ) ?
					<div className="edit-component btn-cmp" onClick={ (e) => { this.setState( { editItem: 'button' } ) } }>
						<button className="edit-component">edit text</button>
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
						<button className="preview-text" onClick={ (e) => { this.setState({ editItem: 'default' }) }}>edit</button>
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
				{ ( item === 'custom' ) ?
					<div>
						{ ( item === 'custom' && ( selectedComponent !== 'custom' || ( selectedComponent === 'custom' && editItem !== 'custom' ) ) ) ?
							<div className="edit-component btn-cmp" onClick={ (e) => { this.setState( { editItem: 'custom' } ) } }>
								<button className="edit-component">edit text</button>
							</div>
						: '' }
						{ ( item === 'custom' && selectedComponent === 'custom' && editItem === 'custom' ) ?
							<div className="edit-component btn-cmp input-area">
								<p className="edit-component">custom text</p>
								<input
									type="text"
									value={ custom }
									className={ "input-text text custom" }
									onChange={ ( e ) => {
										setAttributes( { custom: e.target.value } );
									} }
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
				: '' }
				{ ( item === 'image' ) ?
					<div>
						{ ( item === 'image' && ( selectedComponent !== 'image' || ( selectedComponent === 'image' && editItem !== 'image' ) ) ) ?
							<div className="edit-component btn-cmp" onClick={ (e) => { this.setState( { editItem: 'image' } ) } }>
								<button className="edit-component">edit type</button>
							</div>
						: '' }
						{ ( item === 'image' && selectedComponent === 'image' && editItem === 'image' ) ?
							<div className="edit-component btn-cmp input-area">
								<p className="edit-component">select image type...</p>
								<SelectControl
									className='eaa2c-select image-size'
									value={ image }
									onChange={ ( imageSize ) => { setAttributes({ image: imageSize }) } }
									options={ Object.keys(imageSizes).map( (key) => ({ value: key, label: imageSizes[key] })) }
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
				: '' }
			</div>
		);
	}

	getItemInspectorControls( item, index ) {
		const { attributes, setAttributes } = this.props;
		const { contentVisibility, buttonText, custom, image, quantity, titleAction, titleType } = attributes;
		const { editItem, imageSizes, selectedComponent } = this.state;
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
					{ ( item === 'title' && ( selectedComponent !== 'title' || ( selectedComponent === 'title' && editItem !== 'title' ) ) ) ?
						<div className="edit-component btn-cmp" onClick={ (e) => { this.setState( { editItem: 'title' } ) } }>
							<button className="edit-component">edit title</button>
						</div>
					: '' }
					{ ( item === 'title' && selectedComponent === 'title' && editItem === 'title' ) ?
						<div className="edit-component btn-cmp">
							{ this.isVariableProduct() === false ? '' :
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
									<hr />
								</div>
							}
							<CheckboxControl
								className="trs-checkbox"
								heading="Link?"
								checked={ titleAction === 'link' }
								onChange={ ( titleAction ) => { setAttributes( { titleAction: titleAction === true ? 'link' : '' } ) } }
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
				{ ( item === 'button' && ( selectedComponent !== 'button' || ( selectedComponent === 'button' && editItem !== 'button' ) ) ) ?
					<div className="edit-component btn-cmp" onClick={ (e) => { this.setState( { editItem: 'button' } ) } }>
						<button className="edit-component">edit text</button>
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
						<button className="preview-text" onClick={ (e) => { this.setState({ editItem: 'default' }) }}>edit</button>
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
				{ ( item === 'custom' ) ?
					<div>
						{ ( item === 'custom' && ( selectedComponent !== 'custom' || ( selectedComponent === 'custom' && editItem !== 'custom' ) ) ) ?
							<div className="edit-component btn-cmp" onClick={ (e) => { this.setState( { editItem: 'custom' } ) } }>
								<button className="edit-component">edit text</button>
								{/* <p className="edit-component">custom text</p> */}
							</div>
						: '' }
						{ ( item === 'custom' && selectedComponent === 'custom' && editItem === 'custom' ) ?
							<div className="edit-component btn-cmp input-area">
								<p className="edit-component">custom text</p>
								<input
									type="text"
									value={ custom }
									className={ "input-text text custom" }
									onChange={ ( e ) => {
										setAttributes( { custom: e.target.value } );
									} }
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
				: '' }
				{ ( item === 'image' ) ?
					<div>
						{ ( item === 'image' && ( selectedComponent !== 'image' || ( selectedComponent === 'image' && editItem !== 'image' ) ) ) ?
							<div className="edit-component btn-cmp" onClick={ (e) => { this.setState( { editItem: 'image' } ) } }>
								<button className="edit-component">edit type</button>
							</div>
						: '' }
						{ ( item === 'image' && selectedComponent === 'image' && editItem === 'image' ) ?
							<div className="edit-component btn-cmp input-area">
								<p className="edit-component">select image type...</p>
								<SelectControl
									className='eaa2c-select image-size'
									value={ image }
									onChange={ ( imageSize ) => { setAttributes({ image: imageSize }) } }
									options={ Object.keys(imageSizes).map( (key) => ({ value: key, label: imageSizes[key] })) }
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
				: '' }
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
		const { attributes } = this.props;
		const { contentOrder } = attributes;

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
			<div role="listbox" className="trs-display-controls">
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
												aria-label={ "toggle " + item.id + " component" }
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
		const { imageSrc } = this.state;
		const { attributes, className } = this.props;
		const { buttonText, contentVisibility, contentOrder, custom, image, products, quantity, titleType } = attributes;
		// console.log( "In render view mode." );

		let customClass = '';

		if ( global.EAA2C && global.EAA2C.customClass !== undefined && global.EAA2C.customClass.length > 0 ) {
			let customClassSetting = global.EAA2C.customClass;
			customClass = customClassSetting.replace(/(<([^>]+)>)/ig,"");
		}

		if ( products[0] ) {
			// console.log( "product(s) 'exist'" );
			if ( products[0].id > 0 ) {
				// console.log( products );
				const product = products[0];
				const title = product[titleType];
				if ( contentVisibility.image === true && imageSrc[product.id] === undefined/* && imageSrc[product.id] !== ''*/ ) {
					getProductImage( { id: product['id'], type: image } ).then( 
						(ret) => {
							let newSrc = {[image]: ret[0].data};
							let newImageSrc = { ...imageSrc, [product['id']]: { ...newSrc} };
							// newQueriedProducts = [ ...newQueriedProducts, product.id ];
							// this.setState({ queriedProducts: newQueriedProducts, imageSrc: newImageSrc });
							this.setState({imageSrc: newImageSrc });
						}
					);
				}
				return (
					<div className={ "enhanced-woocommerce-add-to-cart " + className + " " + customClass }>
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
							} else if (  item === 'short_description'  && contentVisibility[ item ] === true ) {
								return (
									<span
										key={ index }
										className="ea-line ea-text"
									>
										{ product[ 'short_description' ] }
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
							} else if ( item === 'custom' && contentVisibility[ item ] === true ) {
								return (
									<span
										key={ index }
										className="ea-line ea-text"
									>
										<span>{ custom }</span>
									</span>
								);
							} else if ( item === 'image' && contentVisibility[ item ] === true ) {
								
								if ( imageSrc[product.id] === undefined ) {
									return ( 
										<span key={index} className="ea-line ea-image loading">
											<span> loading </span>
										</span>
									);
								} else if ( imageSrc[product.id] === "" || ! imageSrc[product.id] ) {
										<span key={index} className="ea-line ea-image empty">
											<span> (empty to front end, no image) </span>
										</span>
								} else {
									return (
										<span key={index} className="ea-line ea-image">
											<img src={ imageSrc[product.id][image].src } width={ imageSrc[product.id][image].width } height={ imageSrc[product.id][image].height } />
										</span>
									);
								}
							} else if ( item === 'button' && contentVisibility[ item ] === true ) {
								return (
									<button
										key={ index + "_" + item }
										type="submit"
										className="eaa2c_add_to_cart_button button alt"
										data-pid={ product.parent_id > 0 ? product.parent_id : product.id }
										data-vid={ product.id }
									>
										{ buttonText }
									</button>
								);
							}
						} ) }
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
