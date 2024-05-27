/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import A2CControl from '../common/a2c-control';
import ProductControl from '../common/product-control';
import { useState } from '@wordpress/element';
import { Button, CheckboxControl, Placeholder, RadioControl } from '@wordpress/components'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import _ from 'lodash';

export default function A2cpEditor( attributes ) {

    const { contentOrder, setAttributes, products } = attributes;
    const [ list, setList ] = useState([]);
	const [ selectedComponent, setSelectedComponent ] = useState('');
	const [ editItem, setEditItem ] = useState('default');

    const onDone = () => {
        setAttributes( { editMode: false } );
        // debouncedSpeak(
        //     __(
        //         'Showing AJAX Add to Cart block preview.',
        //         'enhanced-ajax-add-to-cart-wc'
        //     )
        // );
    };

	const getItemControls = ( item, index ) => {
		const { contentVisibility, buttonText, quantity, titleAction, titleType } = attributes;
		const itemClassList = contentVisibility[ item ] === true ? 'trs-inner-wrapper' : 'trs-inner-wrapper disabled-item';
		const tempItem = editItem !== 'min' && editItem !== 'max' ? 'default' : editItem;

		return (
			<div key={ index } className={ itemClassList } onClick={ (e) => { setSelectedComponent( item ) } }>
				<span className="dashicons dashicons-menu-alt3"></span>
				<A2CControl
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
					<div className="edit-component btn-cmp" onClick={ (e) => { setEditItem( 'title' ) } }>
						<button className="edit-component">edit title</button>
					</div>
				: '' }
				{ ( item === 'title' && selectedComponent === 'title' && editItem === 'title' ) ?
					<div className="edit-component btn-cmp">
						{ isVariableProduct() === false ? '' :
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
								setEditItem( 'none' );
							} }
						>
							done
						</button>
					</div>
				: '' }
				{ ( item === 'button' && ( selectedComponent !== 'button' || ( selectedComponent === 'button' && editItem !== 'button' ) ) ) ?
					<div className="edit-component btn-cmp" onClick={ (e) => { setEditItem( 'button' ) } }>
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
								setEditItem( 'default' );
							} }
						>
							done
						</button>
					</div>
				: '' }
				{ ( item === 'quantity' && selectedComponent !== 'quantity'  ) || ( item === 'quantity' && selectedComponent === 'quantity' && editItem === 'none' ) ?
				<div className="edit-component"> 
					<p className="edit-component">
						<button className="preview-text" onClick={ (e) => { setEditItem( 'default') }}>edit</button>
						<span className="preview-text" onClick={ (e) => { setEditItem( 'default') }}>default: {quantity['default']}</span>
					</p>
					<p className="edit-component">
						<span className="preview-text" onClick={ (e) => { setEditItem( 'min') }}>min: {quantity['min']}</span>
						<span className="preview-text" onClick={ (e) => { setEditItem( 'max') }}>max: {quantity['max']}</span>
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
											setEditItem( '' ) :
											setEditItem( 'default' )
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
											setEditItem( '' ) :
											setEditItem( 'min' )
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
											setEditItem( '' ) :
											setEditItem( 'max' )
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
									setEditItem( 'none' );
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

	const isVariableProduct = () => {
		const { products } = attributes;

		return products.some( prod => ( prod.type === 'variation' || prod.type === 'variable' ) );
	}

	const getItems = () => {
		const { contentOrder } = attributes;

		const items = contentOrder.map( ( item, index ) => ( {
			id: item,
			component: getItemControls( item, index ),
		} ) );
		
		return items;
	}

	const reorder = ( list, startIndex, endIndex ) => {
		const result = Array.from( list );
		const [ removed ] = result.splice( startIndex, 1 );
		result.splice( endIndex, 0, removed );

		return result;
	}

	const onDragEnd = ( result ) => {
		if ( ! result.destination ) {
			return;
		}

		const items = reorder(
			contentOrder,
			result.source.index,
			result.destination.index
		);

		setAttributes( { contentOrder: items } );
	}

    const displayControls = () => {
		return (
			<DragDropContext onDragEnd={onDragEnd} >
				<div role="listbox" className="trs-display-controls">
					<Droppable droppableId="droppable" direction="horizontal">
						{ ( droppableProvided ) => (
							<div
								ref={ droppableProvided.innerRef }
								{ ...droppableProvided.droppableProps }
								// {...droppableProvided.dragHandleProps}
								className="trs-options-wrapper"
							>
								{ getItems().map( ( item, index ) => (
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
				</div>
			</DragDropContext>
		);
	}

	const onChangeSelected = ( newSelected = [] ) => {
		setAttributes({ products: newSelected });
	}

	const onListRequest = ( newList = [] ) => {
		setList( newList );
	}

    return (
        <Placeholder
			label={ __(
				'AJAX Add to Cart button',
				'enhanced-ajax-add-to-cart-wc'
			) }
			className="a2cp-block-placeholder"
		>
			<div className="a2cp-block">
				{ displayControls() }
				
				<ProductControl
					selected={ attributes.products }
					onChange={ onChangeSelected }
					onListRequest={ onListRequest }
					multiple={ false }
				/>
				<Button onClick={ onDone }>
					{ __( 'Done', 'enhanced-ajax-add-to-cart-wc' ) }
				</Button>
			</div>
		</Placeholder>
    )
}