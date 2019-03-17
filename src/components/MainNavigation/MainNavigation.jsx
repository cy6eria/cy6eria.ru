import React from 'react';
import Link from 'next/link';

import './MainNavigation.scss';

const MainNavigationView = ({ onToggle }) => (
    <nav onClick={onToggle}>
        <ul>
            <li><Link href="/"><a>Главная</a></Link></li>
            <li><Link href="/about"><a>Обо мне</a></Link></li>
            <li><Link href="/posts"><a>Блог</a></Link></li>
        </ul>
    </nav>
);

export const MainNavigation = React.memo(MainNavigationView);
