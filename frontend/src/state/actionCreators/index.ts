import { ActionType } from '../actionTypes';
import { Dispatch } from 'redux';
import { Actions } from '../actions/index';

export const getProducts = () => {
	return (dispatch: Dispatch<Actions>) => {
		try {
			dispatch({
				type: ActionType.ALL_PRODUCTS_REQUEST,
				payload: null,
			});

			dispatch({
				type: ActionType.ALL_PRODUCTS_SUCCESS,
				payload: {
					loading: true,
					products: [],
				},
			});
		} catch (err: any) {
			dispatch({
				type: ActionType.ALL_PRODUCTS_FAIL,
				payload: err.response.data.message,
			});
		}
	};
};
