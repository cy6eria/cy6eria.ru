import React from 'react';

import { Link } from '../Link';

import './MainNavigation.scss';

export class MainNavigation extends React.PureComponent {
    render () {
        return (
            <nav>
                <Link href="/">Главная</Link>
                <Link href="/about">Обо мне</Link>
                <Link href="/posts">Блог</Link>
            </nav>
        );
    }
}
