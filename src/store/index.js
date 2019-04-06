import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'

import reducers from '../reducers';

export const getStore = (initialState = {}) => createStore(
    reducers,
    initialState,
    applyMiddleware(thunkMiddleware),
);
