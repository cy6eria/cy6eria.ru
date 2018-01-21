import React from 'react';

import { history } from '../../core';

export class Link extends React.Component {
    handleClick = (e) => {
        e.preventDefault();
        history.push({
            pathname: e.currentTarget.pathname,
            search: e.currentTarget.search
        });
    }

    render () {
        const { onClick, ...otherProps } = this.props;
        return (
            <a {...otherProps} onClick={this.handleClick} />
        );
    }
}
