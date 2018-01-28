import React from 'react';
import UniversalRouter from 'universal-router';

import { Login, Posts, Form, PostDetails } from '../components';
import { NoMatch, MainPage, AboutPage } from '../pages';

import { getPosts } from '../actions';

export const routes = [
    {
        path: '',
        action: () => {
            return (<MainPage />);
        }
    },
    {
        path: '/about',
        action: () => {
            return (<AboutPage />);
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
                        async action (context) {
                            const resp = await axios(`/api/posts/${context.params.id}`);
                            
                            return (
                                <PostDetails
                                    id={context.params.id}
                                    content={resp.data}
                                />
                            );
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
