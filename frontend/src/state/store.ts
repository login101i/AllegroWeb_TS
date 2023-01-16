import { createStore, applyMiddleware } from 'redux';
import { reducers } from './reducers/index';
import thunk from 'redux-thunk';

const initialState = {};
export const store = createStore(reducers, initialState, applyMiddleware(thunk));
