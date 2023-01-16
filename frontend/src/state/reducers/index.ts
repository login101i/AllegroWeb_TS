import { combineReducers } from 'redux';
import { productsReducer } from './products.reducer';

export type State = ReturnType<typeof reducers>;

export const reducers = combineReducers({
	products: productsReducer,
});
