import path from 'path';
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'

import { Layout } from './components';
import reducers from './reducers';
import { createRouter } from './routes';

export const getHTML = (req, res) => {
    fs.readFile(path.resolve(__dirname, '../public/index.html'), 'utf8', (err, data) => {
        const store = createStore(
            reducers,
            undefined,
            applyMiddleware(thunkMiddleware)
        );
        const router = createRouter(store);
        
        router.resolve({ pathname: req.url }).then(component => {
            const HTML = ReactDOMServer.renderToString(
                <Layout
                    store={store}
                    router={router}
                    component={component}
                />
            );
        
            res.send(data.replace('### React content goes here ###', HTML));
        }).catch(err => console.log(err));
        
        
    });
}
