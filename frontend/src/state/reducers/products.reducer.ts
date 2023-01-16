import { ActionType } from '../actionTypes';
import { State, TInitialProducts } from '../interfaces/interfaces';
import { Actions } from '../actions';

export const productsReducer = (state: State, action: Actions): TInitialProducts => {
	switch (action.type) {
		case ActionType.ALL_PRODUCTS_REQUEST:
			return {
				loading: true,
				products: [],
				error: 'error',
			};

		case ActionType.ALL_PRODUCTS_SUCCESS:
			return {
				loading: false,
				products: action.payload.products,
				productsCount: action.payload.productsCount,
				resPerPage: action.payload.resPerPage,
				filteredProducts: action.payload.filteredProducts,
			};

		case ActionType.ALL_PRODUCTS_FAIL:
			return {
				products: [],
				loading: false,
				error: action.payload.error,
			};

		case ActionType.CLEAR_ERRORS:
			return {
				...state,
				error: null,
			};

		default:
			return {
				loading: false,
				products: [],
			};
	}
};
