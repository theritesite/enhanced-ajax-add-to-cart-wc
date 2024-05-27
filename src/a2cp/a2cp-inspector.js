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
import { useState } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor'
import { Button, ButtonGroup, CheckboxControl, PanelBody, PanelRow, RadioControl } from '@wordpress/components'
import _ from 'lodash';

export default function A2cpInspector( attributes ) {

    const { contentOrder, setAttributes } = attributes;

	const [ selectedComponent, setSelectedComponent ] = useState('');
	const [ editItem, setEditItem ] = useState('default');

	const isVariableProduct = () => {
		const { products } = attributes;

		return products.some( prod => ( prod.type === 'variation' || prod.type === 'variable' ) );
	}

    const getItemInspectorControls = ( item, index ) => {
		const { contentVisibility, buttonText, quantity, titleAction, titleType } = attributes;
		const itemClassList = contentVisibility[ item ] === true ? 'trs-inner-wrapper' : 'trs-inner-wrapper disabled-item';
		const tempItem = editItem !== 'min' && editItem !== 'max' ? 'default' : editItem;

		return (
			<div key={ index } className={ itemClassList } onClick={ (e) => { setSelectedComponent( item ) } }>
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
					title={ false }
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
					<div className="edit-component btn-cmp" onClick={ (e) => { setEditItem( 'button') } }>
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
									setEditItem( 'default' );
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
						<button className="preview-text" onClick={ (e) => { setEditItem( 'default' ) }}>edit</button>
						<span className="preview-text" onClick={ (e) => { setEditItem( 'default' ) }}>default: {quantity['default']}</span>
					</p>
					<p className="edit-component">
						<span className="preview-text" onClick={ (e) => { setEditItem( 'min' ) }}>min: {quantity['min']}</span>
						<span className="preview-text" onClick={ (e) => { setEditItem( 'max' ) }}>max: {quantity['max']}</span>
					</p>
				</div>
				: '' }
				{ ( item === 'quantity' && selectedComponent === 'quantity' && editItem !== 'none' ) ?
				<div className="edit-component btn-cmp">
					<div className="edit-component"> 
						<ButtonGroup>
							<Button isPrimary isPressed onClick={(e) => {
									editItem === 'default' ? 
										setEditItem( '' ) :
										setEditItem( 'default' )
									}
								}
							>
								Default
							</Button>
							<Button isPrimary onClick={(e) => {
									editItem === 'min' ? 
										setEditItem( '' ) :
										setEditItem( 'min' )
									}
								}
							>
								Min
							</Button>
							<Button isPrimary onClick={(e) => {
									editItem === 'max' ? 
										setEditItem( '' ) :
										setEditItem( 'max' )
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
										setEditItem( 'none' );
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

    return (
        <InspectorControls>
            <PanelBody
                title={ __( 'Content', 'enhanced-ajax-add-to-cart-wc' ) }
                className="a2cp-content-container"
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
                        { getItemInspectorControls( item, index ) }
                    </PanelRow> );
                } ) }
            </PanelBody>
        </InspectorControls>
    )
}