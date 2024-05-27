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
import _ from 'lodash';

import { formatPrice } from '../common/formatting/price';

export default function A2cpMockup( attributes, className ) {

	const { buttonText, contentVisibility, contentOrder, products, quantity, titleType } = attributes;

	let customClass = '';

	if ( global.A2C && global.A2C.customClass !== undefined && global.A2C.customClass.length > 0 ) {
		let customClassSetting = global.A2C.customClass;
		customClass = customClassSetting.replace(/(<([^>]+)>)/ig,"");
	}
	if ( products[0] ) {
		if ( products[0].id > 0 ) {
			const product = products[0];
			const title = product[titleType];
			return (
				<div className={ "add-to-cart-pro " + className + " " + customClass }>
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
						} else if ( item === 'separator' && contentVisibility[ item ] === true ) {
							return (
								<span key={ index } className="ea-line">
									<span className="ea-separator"></span>
								</span>
							);
						} else if ( item === 'button' && contentVisibility[ item ] === true ) {
							return (
								<button
									key={ index + "_" + item }
									type="submit"
									className="a2cp_button button alt"
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