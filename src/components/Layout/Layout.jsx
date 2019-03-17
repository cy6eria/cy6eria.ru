import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './Layout.scss';

import { Sidebar } from '../Sidebar';

export const Layout = props => (
    <Fragment>
        <div className="main">
            {props.children}
        </div>
        <Sidebar />
    </Fragment>
);
