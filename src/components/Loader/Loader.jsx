import React from 'react';
import { string, bool } from 'prop-types';

import './Loader.scss';

export class Loader extends React.PureComponent {
    static propTypes = {
        className: string,
        show: bool
    }

    render () {
        const { className, show } = this.props;
        let view = null;

        if (show) {
            view = (
                <div className={`loader ${className}`}>
                    <div className="dot"/>
                    <div className="dot"/>
                    <div className="dot"/>
                </div>
            );
        }

        return view;
    }
}
