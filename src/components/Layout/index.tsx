import './Layout.scss';

import * as React from "react";

import Header from '../Header'

export default class Layout extends React.Component<void, void> {
    render () {
        return (
            <div className="layout">
                <Header />
            </div>   
        );
    }
}