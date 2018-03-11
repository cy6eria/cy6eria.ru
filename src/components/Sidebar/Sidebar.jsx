import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Link } from '../Link';
import { MainNavigation } from '../MainNavigation';

import './Sidebar.scss';

export class Sidebar extends React.PureComponent {
    static propTypes = {
        open: PropTypes.bool.isRequired,
        onToggle: PropTypes.func.isRequired
    }

    render () {
        const { open, onToggle } = this.props;

        return (
            <div>
                <button
                    className={cx('trigger', { show: !open })}
                    onClick={onToggle}
                    aria-label={open ? 'Скрыть меню' : 'Показать меню'}
                >
                    <div />
                </button>

                <aside 
                    className={cx('sidebar', { open })}
                    onClick={onToggle}
                >
                    <div className="content">
                        <MainNavigation />
                    </div>
                </aside>
            </div>  
        );
    }
}