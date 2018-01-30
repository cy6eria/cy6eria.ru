import React from 'react';

import { Link } from '../Link';

import './Sidebar.scss';

import MainNavigation from '../MainNavigation';

export default class Sidebar extends React.Component {
    render () {
        const {open} = this.props;

        return (
            <aside className={`sidebar ${open ? 'open' : ''}`} onClick={this.props.onToggle}>
                <div className="trigger"/>

                <div className="content">
                    <MainNavigation />
                </div>
            </aside>
        )
    }
}