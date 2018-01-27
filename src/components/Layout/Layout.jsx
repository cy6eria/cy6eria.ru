import React, { Fragment } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import UniversalRouter from 'universal-router';
import moment from 'moment';
import 'moment/locale/ru';

import './Layout.scss';

import { history } from '../../core';

import MainPage from '../MainPage';
import AboutPage from '../AboutPage';
import { Login } from '../Login';
import { Posts, Form } from '../Posts';
import { PostDetails } from '../PostDetails';

import Sidebar from '../Sidebar';
import { Loader } from '../Loader';

import { getPosts } from '../../actions';

function NoMatch () {
    return (<h1>404</h1>)
}

moment.locale('ru');

const routes = [
    {
        path: '',
        action: () => {
            document.title = 'Home - Eugene Gundorov aka cy6eria';
            return (<MainPage />);
        }
    },
    {
        path: '/about',
        action: () => {
            document.title = 'About me - Eugene Gundorov aka cy6eria';
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

export class Layout extends React.Component {
    static childContextTypes = {
        store: PropTypes.object
    }

    constructor (props) {
        super(props);

        this.state = {
            open: false,
            component: null
        };

        this.router = new UniversalRouter(routes, {
            context: {
                store: props.store
            }
        });

        this.handleCurrentRoute(history.location.pathname);
        
        this.stopListenHistory = history.listen((location, action) => {
            this.handleCurrentRoute(location.pathname);
        });
    }

    getChildContext() {
        return { store: this.props.store };
    }

    handleCurrentRoute = (pathname) => {
        this.router.resolve({ pathname }).then(component => {
            this.setState({ component });
        });
    }

    handleToggle = (e) => {
        this.setState({
            open: !this.state.open
        });
    }
    
    render () {
        const { open, component } = this.state;
        const { isLoading } = this.props;

        return (
            <Fragment>
                <div className="main">
                    {component}
                </div>
                <div className={`overlay ${open || isLoading ? 'show' : ''}`}>
                    <Loader show={isLoading} />
                </div>
                <Sidebar onToggle={this.handleToggle} open={open}/>
            </Fragment>
        );
    }
}
