import 'babel-polyfill';
import './style/icons.css';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import React from 'react';
import { hydrate } from 'react-dom';

import { history } from './core';
import reducers from './reducers';
import { createRouter } from './routes';

import { Layout } from './components/Layout';

// Runing WhyDidYouUpdate tool. 
if (process.env.NODE_ENV !== 'production') {
  const {whyDidYouUpdate} = require('why-did-you-update')
  whyDidYouUpdate(React)
}

const store = createStore(
    reducers,
    undefined,
    applyMiddleware(thunkMiddleware)
);
const router = createRouter(store);

router.resolve({ pathname: history.location.pathname }).then(component => {
    hydrate(
        <Layout
            store={store}
            router={router}
            component={component}
        />,
        document.getElementById('app')
    );
});
