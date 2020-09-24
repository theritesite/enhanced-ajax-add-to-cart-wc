/**
 * externals connected
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

import GroupAddToCartBlock from './block';

let trs_eaa2c_g_availableElements, trs_eaa2c_g_defaultContentOrder = [
	'title',
	'separator',
	'price',
	'quantity',
	'button',
];

let trs_eaa2c_g_defaultContentVisibility = {
	title: true,
	separator: true,
	price: true,
	quantity: true,
	button: true,
}

let trs_eaa2c_g_defaultButtonText = 'Add to cart';

if ( global.EAA2CGROUP ) {
	
	let trs_eaa2c_g_buttonText = global.EAA2CGROUP.buttonText;

	if ( trs_eaa2c_g_buttonText && trs_eaa2c_g_buttonText !== undefined && trs_eaa2c_g_buttonText.length > 0 ) {
		trs_eaa2c_g_defaultButtonText = trs_eaa2c_g_buttonText;
	}

	// if ( global.EAA2CGROUP.availableElements.length > 0 ) {
	// 	trs_eaa2c_g_availableElements = global.EAA2CGROUP.availableElements;
	// }
}

registerBlockType( 'enhanced-ajax-add-to-cart-for-wc/eaa2c-group', {
	title: 'Group AJAX Add to Cart Block',
	icon: 'list-view',
	category: 'widgets',
	description: __(
		'Easy to use form with many dynamic non-redirect add to cart buttons!',
		'enhanced-ajax-add-to-cart-wc'
	),
	supports: {
		html: false,
		align: true,
	},

	attributes: {
		editMode: {
			type: 'boolean',
			default: true,
		},
		isPreview: {
			type: 'boolean',
			default: false,
		},
		// availableElements: {
		// 	type: 'array',
		// 	default: trs_eaa2c_g_availableElements,
		// },
		contentVisibility: {
			type: 'object',
			default: trs_eaa2c_g_defaultContentVisibility,
		},
		contentOrder: {
			type: 'array',
			default: trs_eaa2c_g_defaultContentOrder,
		},
		custom: {
			type: 'string',
			default: '',
		},
		buttonText: {
			type: 'string',
			default: trs_eaa2c_g_defaultButtonText,
		},
		image: {
			type: 'string',
			default: 'thumbnail',
		},
		quantity: {
			type: 'object',
			default: {
				default: 1,
				min: 1,
				max: -1,
			},
		},
		short_description: {
			type: 'string',
			default: '',
		},
		titleAction: {
			type: 'string',
			default: '',
		},
		titleType: {
			type: 'string',
			default: 'full',
		},
		products: {
			type: 'array',
			default: [],
		},
		variations: {
			type: 'array',
			default: [],
		},
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#edit
	 *
	 * @param {Object} [props] Properties passed from the editor.
	 * @return {Element}       Element to render.
	 */
	edit: ( props ) => {
		return <GroupAddToCartBlock { ...props } isEditor={ true } />;
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into `post_content`.
	 *
	 * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#save
	 *
	 * @return {Element}       Element to render.
	 */
	// save: function() {
	// 	return el(
	// 		'p',
	// 		{},
	// 		__( 'Hello from the saved content!', 'enhanced-ajax-add-to-cart-for-wc' )
	// 	);
	// },
	save( attributes ) {
		return null;
	},
} );
