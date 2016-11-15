import * as React from 'react';
import {Link} from 'react-router';

import './Sidebar.scss';

import MainNavigation from '../MainNavigation';

export default class Sidebar extends React.Component<any, any> {
    render () {
        const {open} = this.props;

        return (
            <div className={`sidebar ${open ? 'open' : ''}`} onClick={this.props.onToggle}>
                <div className="trigger"/>

                <div className="content">
                    <MainNavigation />
                </div>
            </div>
        )
    }
}