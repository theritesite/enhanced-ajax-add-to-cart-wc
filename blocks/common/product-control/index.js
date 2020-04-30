import React from 'react';
import ProductControler from './view';
import reducer from './state/reducer';

export default ( { list, products, variations, selected, isLoading, error } ) => ( {
// export default ( { inProgress, stepSize, totalSteps, orders, ordersCompleted, error } ) => ( {
	getReducer() {
		return reducer;
	},

	getInitialState() {
		return {
			isLoading: true,
			list: {},
			products: {},
			variations: {},
			selected: {},
			error,
		};
	},

	getStateKey() {
		return 'eaa2c-product-control';
    },
    
    getStateForPersisting() {
        return { selected, products, variations };
	},
	
	View: () => {
		console.log( "in view!" );
		return <ProductControler />;
	},
} );