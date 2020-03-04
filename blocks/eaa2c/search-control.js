
// import { Component } from '@wordpress/element';
const { Component } = wp.element;
import { debounce } from 'lodash';
// import { createHigherOrderComponent } from '@wordpress/compose';
const { createHigherOrderComponent } = wp.compose;

// import getSetting from wc.wcSetting;
// const { getSetting } = window.wc.wcSetting;
import { getSetting } from '@woocommerce/settings';

import PropTypes from 'prop-types';
import { getProducts } from './search-product-util';

import { formatError } from './errors';

const withSearchedTerm = createHigherOrderComponent(
    ( OriginalComponent ) => {
        class WrappedComponent extends Component {
			constructor() {
				super( ...arguments );
				this.state = {
					list: [],
					loading: true,
				};
				this.setError = this.setError.bind( this );
				this.debouncedOnSearch = debounce(
					this.onSearch.bind( this ),
					400
				);
			}

			componentDidMount() {
                const { selected } = this.props;
                // TODO retrieve terms, products for now.
            
                getProducts( { selected } )
                    .then( ( list ) => {
                        this.setState( { list, loading: false } );
                    } )
                    .catch( this.setError );
                

			}

			componentWillUnmount() {
				this.debouncedOnSearch.cancel();
			}

			onSearch( search ) {
				const { selected } = this.props;

				getProducts( { selected, search } )
					.then( ( list ) => {
						this.setState( { list, loading: false } );
					} )
					.catch( this.setError );
			}

			async setError( e ) {
				
				// const error = await formatError( e );
				const error = await e;
				console.log( "we are in set error" );
				// const error = true;

				this.setState( { list: [], loading: false, error } );
			}

			render() {
				const { error, list, loading } = this.state;

				return (
					<OriginalComponent
						{ ...this.props }
						error={ error }
						products={ list }
						isLoading={ loading }
						onSearch={
							getSetting( 'isLargeCatalog' )
								? ( search ) => {
										this.setState( { loading: true } );
										this.debouncedOnSearch( search );
								  }
								: null
						}
					/>
				);
			}
		}
		WrappedComponent.propTypes = {
			selected: PropTypes.array,
		};
		WrappedComponent.defaultProps = {
			selected: [],
		};
		return WrappedComponent;
    },
    'withSearchedTerm'
);

export default withSearchedTerm;