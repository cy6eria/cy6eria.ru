import * as React from 'react';

import { Link } from '../Link';

import './MainNavigation.scss';

export default function MainNavigation (props) {
    return (
        <nav>
            <ul className="nav align-left">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About me</Link></li>
                <li><Link href="/posts">Blog</Link></li>
            </ul>
        </nav>
    )
}