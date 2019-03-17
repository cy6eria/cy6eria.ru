import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'

import reducers from '../reducers';

export const getStore = (initialState = {}) => {
    console.log('Creating store...');
    return createStore(
        reducers,
        initialState,
        applyMiddleware(thunkMiddleware),
    );
}
