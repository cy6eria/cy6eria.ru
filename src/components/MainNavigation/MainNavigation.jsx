import * as React from 'react';

import { Link } from '../Link';

import './MainNavigation.scss';

export function MainNavigation (props) {
    return (
        <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About me</Link>
            <Link href="/posts">Blog</Link>
        </nav>
    );
}
