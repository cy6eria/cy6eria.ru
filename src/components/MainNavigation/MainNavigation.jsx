import React from 'react';

import { Link } from '../Link';

import './MainNavigation.scss';

export class MainNavigation extends React.PureComponent {
    render () {
        return (
            <nav>
                <ul>
                    <li><Link href="/">Главная</Link></li>
                    <li><Link href="/about">Обо мне</Link></li>
                    <li><Link href="/posts">Блог</Link></li>
                </ul>
            </nav>
        );
    }
}
