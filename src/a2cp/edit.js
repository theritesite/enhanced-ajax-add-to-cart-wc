/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import { BlockControls } from '@wordpress/block-editor'
import { Disabled, Toolbar, ToolbarButton } from '@wordpress/components'
import _ from 'lodash';
import A2cpInspector from './a2cp-inspector'
import A2cpEditor from './a2cp-editor'
import A2cpMockup from './a2cp-mockup'

let trs_a2c_defaultContentOrder = [
	'title',
	'separator',
	'price',
	'quantity',
	'button',
];

let trs_a2c_defaultContentVisibility = {
	title: true,
	separator: true,
	price: true,
	quantity: true,
	button: true,
}

let trs_a2c_defaultButtonText = __( 'Add to cart', 'woocommerce' );

let helpers={
	editMode: {
		type: 'boolean',
		default: true,
	},
	isPreview: {
		type: 'boolean',
		default: false,
	},
	contentVisibility: {
		type: 'object',
		default: trs_a2c_defaultContentVisibility,
	},
	contentOrder: {
		type: 'array',
		default: trs_a2c_defaultContentOrder,
	},
	buttonText: {
		type: 'string',
		default: trs_a2c_defaultButtonText,
	},
	quantity: {
		type: 'object',
		default: {
			default: 1,
			min: 1,
			max: -1,
		},
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
}
/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes, className } ) {

	const renderEditMode = () => {
		return(
			<A2cpEditor {...attributes} setAttributes={setAttributes} />
		)
	}

	const renderViewMode = () => {
		return(
			<A2cpMockup {...attributes} className={className} />
		)
	}

	console.log("rendering edit");
	console.log(useBlockProps());
	console.log(attributes);

	const { editMode } = attributes;
	return (
		<div {...useBlockProps()} >
			<BlockControls>
				<Toolbar label="Edit mode">
					<ToolbarButton
							icon={ 'edit' }
							label={ __( 'Edit' ) }
							onClick={ () =>
								setAttributes( {
									editMode: ! editMode,
								} )
							}
							isActive={ editMode }
						/>
				</Toolbar>
			</BlockControls>
			<A2cpInspector {...attributes} setAttributes={setAttributes} />
			{ editMode ? ( renderEditMode() ) : ( <Disabled>{ renderViewMode() }</Disabled> ) }

		</div>
	);
}
