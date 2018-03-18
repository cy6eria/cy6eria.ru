import path from 'path';
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Helmet } from 'react-helmet';

import { Layout } from './components';
import reducers from './reducers';
import { createRouter } from './routes';

const indexPath = '../public/index.html';

export const getHTML = (req, res) => {
    fs.readFile(indexPath, 'utf8', (err, data) => {
        console.log(path.resolve(__dirname), err);
        const store = createStore(
            reducers,
            undefined,
            applyMiddleware(thunkMiddleware)
        );
        const router = createRouter(store);
        
        router.resolve({ pathname: req.url }).then(component => {
            let result = data;
            const HTML = ReactDOMServer.renderToString(
                <Layout
                    store={store}
                    router={router}
                    component={component}
                />
            );
            const helmet = Helmet.renderStatic();

            result = result.replace('### React content goes here ###', HTML);
            result = result.replace('### Head content goes here ###', [
                helmet.title.toString(),
                helmet.meta.toString()
            ].join(''));
        
            res.send(result);
        }).catch(err => console.log(err));
    });
}
