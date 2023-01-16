import { ActionType } from '../actionTypes';
import { TInitialProducts } from '../interfaces/interfaces';

export type Actions =
	| { type: ActionType.ALL_PRODUCTS_REQUEST; payload: null }
	| { type: ActionType.ALL_PRODUCTS_SUCCESS; payload: TInitialProducts }
	| { type: ActionType.ALL_PRODUCTS_FAIL; payload: any }
	| { type: ActionType.CLEAR_ERRORS; payload: null };
