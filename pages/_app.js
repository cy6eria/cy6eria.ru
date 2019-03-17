import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';

import { getStore } from '../src/store';
import { Layout } from '../src/components/Layout';

const isServer = typeof window === 'undefined';
let store;

class MyApp extends App {
    static async getInitialProps(a) {
        const { Component, ctx } = a;
        let initialState = {};
        let pageProps = {};

        if (isServer) {
            store = getStore();
        }

        if (store && Component.getInitialProps) {
            ctx.store = store;
            pageProps = await Component.getInitialProps(ctx);

            initialState = store.getState();
        }

        return { initialState, pageProps };
    }

    render () {
        const { Component, pageProps, initialState } = this.props;

        if (!store) {
            store = getStore(initialState);
        }

        return (
            <Container>
                <Provider store={store}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </Provider>
            </Container>
        );
    }
}

export default MyApp;
