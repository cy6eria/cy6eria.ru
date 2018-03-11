import * as React from 'react';

import { Link } from '../Link';

import './MainNavigation.scss';

export function MainNavigation (props) {
    return (
        <nav>
            <Link href="/">Главная</Link>
            <Link href="/about">Обо мне</Link>
            <Link href="/posts">Блог</Link>
        </nav>
    );
}
