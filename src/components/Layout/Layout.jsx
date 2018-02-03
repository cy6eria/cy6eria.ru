import React, { Fragment } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import './Layout.scss';

import { history } from '../../core';

import { Sidebar } from '../Sidebar';
import { Loader } from '../Loader';

export class Layout extends React.Component {
    static childContextTypes = {
        store: PropTypes.object
    }

    constructor (props) {
        super(props);

        this.state = {
            open: false,
            component: props.component || null
        };
    }

    componentDidMount () {
        this.stopListenHistory = history.listen((location, action) => {
            this.handleCurrentRoute(location.pathname);
        });
    }

    componentWillUnmount () {
        this.stopListenHistory();
    }

    getChildContext() {
        return { store: this.props.store };
    }

    handleCurrentRoute = (pathname) => {
        this.props.router.resolve({ pathname }).then(component => {
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
