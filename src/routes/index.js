import React from 'react';
import UniversalRouter from 'universal-router';

import { Login, Posts, Form, PostDetails } from '../components';
import { NoMatch, MainPage, AboutPage } from '../pages';

import { getPosts } from '../actions/posts';

const scrollToTop = () => {
    if (typeof(window) !== 'undefined') {
        window.scrollTo(0,0);
    }
}

export const routes = [
    {
        path: '',
        action: () => {
            scrollToTop();
            return <MainPage />;
        }
    },
    {
        path: '/about',
        action: () => {
            scrollToTop();
            return <AboutPage />;
        }
    },
    {
        path: '/login',
        action: () => <Login />
    },
    {
        path: '/posts',
        children: [
            {
                path: '',
                async action ({ store }) {
                    await store.dispatch(getPosts());

                    scrollToTop();

                    return <Posts />
                }
            },
            {
                path: '/new',
                action: () => <Form />
            },
            {
                path: '/:id',
                children: [
                    {
                        path: '',
                        async action ({ store, params }) {
                            const postId = params.id;
                            const state = store.getState();

                            if (!state.posts.items || state.posts.items.length === 0) {
                                await store.dispatch(getPosts());
                            }

                            scrollToTop();
                            
                            return <PostDetails postId={postId} />;
                        }
                    },
                    {
                        path: '/edit',
                        async action (context) {
                            return <Form itemId={context.params.id} />;
                        }
                    }
                ],
            },
        ],
    },
    {
        path: '(.*)',
        action: () => <NoMatch />
    }
];

export const createRouter = (store) => {
    return new UniversalRouter(routes, {
        context: { store }
    });
}
