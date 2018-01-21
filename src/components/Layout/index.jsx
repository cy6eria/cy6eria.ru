import React from 'react';
import axios from 'axios';
import UniversalRouter from 'universal-router';

import './Layout.scss';

import { history } from '../../core';

import MainPage from '../MainPage';
import AboutPage from '../AboutPage';
import { Posts, Form, PostDetails } from '../Posts';

import Sidebar from '../Sidebar';
import { Loader } from '../Loader';

function NoMatch () {
    return (<h1>404</h1>)
}

const routes = [
    {
        path: '',
        action: () => <MainPage />
    },
    {
        path: '/about',
        action: () => <AboutPage />
    },
    {
        path: '/posts',
        children: [
            {
                path: '',
                action: () => <Posts />
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

const router = new UniversalRouter(routes);

export class Layout extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            open: false,
            isLoading: false,
            component: null
        };

        this.handleCurrentRoute(history.location.pathname);
        
        this.stopListenHistory = history.listen((location, action) => {
            this.handleCurrentRoute(location.pathname);
        });
    }

    handleCurrentRoute = (pathname) => {
        router.resolve({ pathname }).then(component => {
            this.setState({ component });
        });
    }

    handleToggle = (e) => {
        this.setState({
            open: !this.state.open
        });
    }
    
    render () {
        const { open, isLoading, component } = this.state;
        return (
            <div>
                <div className="content">
                    {component}
                </div>
                <div className={`overlay ${open || isLoading ? 'show' : ''}`}>
                    <Loader show={isLoading} />
                </div>
                <Sidebar onToggle={this.handleToggle} open={open}/>
            </div>
        );
    }
}
