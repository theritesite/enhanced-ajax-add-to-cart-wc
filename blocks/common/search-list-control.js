/**
 * External dependencies
 */
import { __, _n, sprintf } from '@wordpress/i18n';
import {
	Button,
	MenuGroup,
	Spinner,
	TextControl,
	withSpokenMessages,
} from '@wordpress/components';
import { Component, Fragment } from '@wordpress/element';
import { compose, withInstanceId, withState } from '@wordpress/compose';
import { escapeRegExp, findIndex } from 'lodash';
import Gridicon from 'gridicons';
import PropTypes from 'prop-types';
import * as ProductControlActions from './product-control/state/actions';
import { MenuItem } from '@wordpress/components';
import { TransitionGroup, CSSTransition, SwitchTransition } from 'react-transition-group';

/**
 * Internal dependencies
 */
import { buildTermsTree } from './hierarchy';
import SearchListItem from './search-list-item';
import Tag from './tag';
import {
	IconBack,
} from './icons';

const defaultMessages = {
	clear: __( 'Clear all selected items', 'woocommerce-admin' ),
	list: __( 'Results', 'woocommerce-admin' ),
	noItems: __( 'No items found.', 'woocommerce-admin' ),
	noResults: __( 'No results for %s', 'woocommerce-admin' ),
	search: __( 'Search for items', 'woocommerce-admin' ),
	selected: ( n ) =>
		sprintf(
			_n(
				'%d item selected',
				'%d items selected',
				n,
				'woocommerce-admin'
			),
			n
		),
	updated: __( 'Search results updated.', 'woocommerce-admin' ),
};

/**
 * Component to display a searchable, selectable list of items.
 */
export class SearchListControl extends Component {
	constructor() {
		super( ...arguments );

		this.state = {
			oldList: [],
			currentProduct: {}
		}

		this.backOne = this.backOne.bind( this );
		this.onSelect = this.onSelect.bind( this );
		this.onRemove = this.onRemove.bind( this );
		this.onClear = this.onClear.bind( this );
		this.isSelected = this.isSelected.bind( this );
		this.defaultRenderItem = this.defaultRenderItem.bind( this );
		this.renderList = this.renderList.bind( this );
	}

	componentDidUpdate( prevProps ) {
		const { onSearch, search } = this.props;
		if ( search !== prevProps.search && typeof onSearch === 'function' ) {
			onSearch( search );
		}
	}

	onRemove( item ) {
		const { isSingle, onChange, selected, dispatch } = this.props;
		const id = item.id;
		return () => {
			if ( isSingle ) {
				onChange( [] );
			}
			dispatch( ProductControlActions.removeSelected( item ) );

			const i = findIndex( selected, { id } );
			onChange( [
				...selected.slice( 0, i ),
				...selected.slice( i + 1 ),
			] );
		};
	}

	onSelect( item ) {
		const { isSingle, onChange, selected, list, dispatch, variations } = this.props;
		return () => {
			if ( this.isSelected( item ) && item.type !== 'variable' ) {
				console.log( "calling remove" );
				this.onRemove( item )();
				if ( item.type === 'variation' ) {
					this.backOne();
				}
				return;
			}
			if ( item.type === 'variable' ) {
				this.setState({ currentProduct: item });
				dispatch(ProductControlActions.fetchVariationsIfNeeded( item, selected, '', [] ))
				// this.setState({ oldList: list });
				// this.renderList( list )
				console.log( "it is a variable" );
			}
			else if ( item.type === 'variation' ) {
				console.log( "adding item to selected list as the variation has been clicked." );
				dispatch( ProductControlActions.setSelected( item, true ) );
					// dispatch(ProductControlActions.fetchProductsIfNeeded( selected, '', [] ));
					// dispatch( ProductControlActions.switchToProducts() );
				this.backOne();
				
			}
			else {
				console.log( "it is not a variable product type" );
			}
			// else {
				if ( item.type !== 'variable' && item.type !== 'variation' ) {
					if ( isSingle ) {
						console.log( "adding item to selected list" );
						console.log( item );
						dispatch( ProductControlActions.setSelected( item, true ) );
						// selected = [ ...selected, item ];
						// onChange( [ item ] );
					} else {
						// onChange( [ ...selected, item ] );
					}
				}
			// }
		};
	}

	onClear() {
		this.props.onChange( [] );
	}

	isSelected( item ) {
		if ( item.type === 'variable' ) {
			return this.props.selected.some( prod => /*{ return( */item.children.includes( prod.id ) /*) }*/ );
		} else {
			return findIndex( this.props.selected, { id: item.id } ) !== -1;
		}
	}

	getFilteredList( list, search ) {
		const { isHierarchical } = this.props;
		if ( ! search ) {
			return isHierarchical ? buildTermsTree( list ) : list;
		}
		const messages = { ...defaultMessages, ...this.props.messages };
		const re = new RegExp( escapeRegExp( search ), 'i' );
		this.props.debouncedSpeak( messages.updated );
		const filteredList = list
			.map( ( item ) => ( re.test( item.name ) ? item : false ) )
			.filter( Boolean );
		return isHierarchical
			? buildTermsTree( filteredList, list )
			: filteredList;
	}

	defaultRenderItem( args ) {
		return <SearchListItem { ...args } />;
	}

	renderList( list, depth = 0 ) {
		const { isSingle, search } = this.props;
		const renderItem = this.props.renderItem || this.defaultRenderItem;
		if ( ! list ) {
			return null;
		}

		return list.map( ( item ) => (
			item.type !== 'variable' ?
				<Fragment key={ item.id }>
					{ renderItem( {
						item,
						isSelected: this.isSelected( item ),
						onSelect: this.onSelect,
						isSingle,
						search,
						depth,
					} ) }
					{/* { this.renderList( item.children, depth + 1 ) } */}
				</Fragment>
			:
				<Fragment key={ item.id }>
					{ renderItem( {
						item,
						isSelected: this.isSelected( item ),
						onSelect: this.onSelect,
						isSingle,
						search,
						depth,
					} ) }
					{ item.children && item.children.length > 0 ?
						<div onClick={ this.onSelect( item ) } className="holder-container woocommerce-search-list__list woocommerce-search-list__item">
							<span style={{minWidth: "35px"}}></span>
							{item.children.length} options to choose from...
						</div>
						: '' }
				</Fragment>
			
		) );
	}

	backOne() {
		const { dispatch } = this.props;
		console.log( "goign back 1 list" );
		this.setState({ currentProduct: {} });
		return dispatch( ProductControlActions.switchToProducts() );
	}

	renderListItemHeader( product ) {
		return (
			<MenuItem onClick={ this.backOne } icon="dashicons-arrow-left-alt" role="columnheader" className="is-back-button components-button components-icon-button woocommerce-search-list__title">
				<span className="woocommerce-search-list__item-state" aria-label={"Back to previous list"}><IconBack/></span>
				<span className="woocommerce-search-list__label search-list-header">Choosing variation for {product.name}...</span>
			</MenuItem>
		);
	}

	renderListSection( currList = undefined ) {
		const { isLoading, search } = this.props;
		const messages = { ...defaultMessages, ...this.props.messages };
		const { currentProduct, willSlide } = this.state;

		if ( isLoading && ( currList === undefined || (currList && currList < 1) ) ) {
			return (
				<MenuGroup
					label={ messages.list }
					className="woocommerce-search-list__list"
				>
					{ currentProduct && Object.keys(currentProduct).length > 0 ? this.renderListItemHeader( currentProduct ) : '' }
					<div className="woocommerce-search-list__list is-loading">
						<Spinner />
					</div>
				</MenuGroup>
			);
		}

		var list = this.getFilteredList( this.props.list, search );

		if ( currList && currList.length > 0 ) {
			console.log( "its not the standrd list." );
			list = currList;
		}
		else {
			console.log( "no it is not" );
		}
		if ( ! list.length && list !== currList ) {
			return (
				<div className="woocommerce-search-list__list is-not-found">
					<span className="woocommerce-search-list__not-found-icon">
						<Gridicon
							icon="notice-outline"
							role="img"
							aria-hidden="true"
							focusable="false"
						/>
					</span>
					<span className="woocommerce-search-list__not-found-text">
						{ search
							? // eslint-disable-next-line @wordpress/valid-sprintf
							  sprintf( messages.noResults, search )
							: messages.noItems }
					</span>
				</div>
			);
		}

		return (
			<MenuGroup
				label={ messages.list }
				className="woocommerce-search-list__list"
			>
				{ currentProduct && Object.keys(currentProduct).length > 0 && list !== currList ? this.renderListItemHeader( currentProduct ) : '' }
				{ this.renderList( list ) }
			</MenuGroup>
		);
	}

	renderSelectedSection() {
		const { isLoading, isSingle, selected } = this.props;
		const messages = { ...defaultMessages, ...this.props.messages };

		if ( isLoading || isSingle || ! selected ) {
			return null;
		}

		const selectedCount = selected.length;
		return (
			<div className="woocommerce-search-list__selected">
				<div className="woocommerce-search-list__selected-header">
					<strong>{ messages.selected( selectedCount ) }</strong>
					{ selectedCount > 0 ? (
						<Button
							isLink
							isDestructive
							onClick={ this.onClear }
							aria-label={ messages.clear }
						>
							{ __( 'Clear all', 'woocommerce-admin' ) }
						</Button>
					) : null }
				</div>
				{ selected.map( ( item, i ) => (
					<Tag
						key={ i }
						label={ item.name }
						id={ item.id }
						remove={ this.onRemove }
					/>
				) ) }
			</div>
		);
	}

	render() {
		const { className = '', search, setState } = this.props;
		const messages = { ...defaultMessages, ...this.props.messages };
		const willSlide = ( this.state.currentProduct && this.state.currentProduct.id > 0 && this.props.products && this.props.products.length > 0 ) ? true : false;

		console.log( "willslide: " + willSlide );
		return (
			<div className={ `woocommerce-search-list ${ className }` }>
				{ this.renderSelectedSection() }

				<div className="woocommerce-search-list__search">
					<TextControl
						label={ messages.search }
						type="search"
						value={ search }
						onChange={ ( value ) => setState( { search: value } ) }
					/>
				</div>

				<TransitionGroup className="slider-group">
					{ (this.state.currentProduct && this.state.currentProduct.id > 0 && this.props.products && this.props.products.length > 0) === true ? '' : 
							<div className="slider-container">
								{ this.renderListSection( this.props.products ) }
							</div>
					}
					{ (this.state.currentProduct && this.state.currentProduct.id > 0 && this.props.products && this.props.products.length > 0) === false ? '' : 
						<CSSTransition timeout={500} appear={true} enter={true} exit={true} classNames="slider">
							<div className="slider-container">
								{ this.renderListSection() }
							</div>
						</CSSTransition>
					}
					<div className="slider-placeholder" />
				</TransitionGroup>
			</div>
		);
	}
}

SearchListControl.propTypes = {
	/**
	 * Additional CSS classes.
	 */
	className: PropTypes.string,
	/**
	 * Whether the list of items is hierarchical or not. If true, each list item is expected to
	 * have a parent property.
	 */
	isHierarchical: PropTypes.bool,
	/**
	 * Whether the list of items is still loading.
	 */
	isLoading: PropTypes.bool,
	/**
	 * Restrict selections to one item.
	 */
	isSingle: PropTypes.bool,
	/**
	 * A complete list of item objects, each with id, name properties. This is displayed as a
	 * clickable/keyboard-able list, and possibly filtered by the search term (searches name).
	 */
	list: PropTypes.arrayOf(
		PropTypes.shape( {
			id: PropTypes.number,
			name: PropTypes.string,
		} )
	),
	/**
	 * Messages displayed or read to the user. Configure these to reflect your object type.
	 * See `defaultMessages` above for examples.
	 */
	messages: PropTypes.shape( {
		/**
		 * A more detailed label for the "Clear all" button, read to screen reader users.
		 */
		clear: PropTypes.string,
		/**
		 * Label for the list of selectable items, only read to screen reader users.
		 */
		list: PropTypes.string,
		/**
		 * Message to display when the list is empty (implies nothing loaded from the server
		 * or parent component).
		 */
		noItems: PropTypes.string,
		/**
		 * Message to display when no matching results are found. %s is the search term.
		 */
		noResults: PropTypes.string,
		/**
		 * Label for the search input
		 */
		search: PropTypes.string,
		/**
		 * Label for the selected items. This is actually a function, so that we can pass
		 * through the count of currently selected items.
		 */
		selected: PropTypes.func,
		/**
		 * Label indicating that search results have changed, read to screen reader users.
		 */
		updated: PropTypes.string,
	} ),
	/**
	 * Callback fired when selected items change, whether added, cleared, or removed.
	 * Passed an array of item objects (as passed in via props.list).
	 */
	onChange: PropTypes.func.isRequired,
	/**
	 * Callback fired when the search field is used.
	 */
	onSearch: PropTypes.func,
	/**
	 * Callback to render each item in the selection list, allows any custom object-type rendering.
	 */
	renderItem: PropTypes.func,
	/**
	 * The list of currently selected items.
	 */
	selected: PropTypes.array.isRequired,
	// from withState
	search: PropTypes.string,
	setState: PropTypes.func,
	// from withSpokenMessages
	debouncedSpeak: PropTypes.func,
	// from withInstanceId
	instanceId: PropTypes.number,
};

export default compose( [
	withState( {
		search: '',
	} ),
	withSpokenMessages,
	withInstanceId,
] )( SearchListControl );