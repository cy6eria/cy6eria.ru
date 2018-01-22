import 'babel-polyfill';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import reducers from './reducers';

import { Layout } from './components/Layout';

ReactDOM.render(<Layout store={createStore(reducers, undefined, applyMiddleware(thunkMiddleware))} />, document.getElementById('app'));
