import 'babel-polyfill';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import * as React from 'react';
import { hydrate } from 'react-dom';

import { history } from './core';
import reducers from './reducers';
import { createRouter } from './routes';

import { Layout } from './components/Layout';

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
