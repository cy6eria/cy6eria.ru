import * as React from 'react';
import { Link } from 'react-router';

import './MainNavigation.scss';

interface IProps {
    align?: "left" | "right";
}

export default function MainNavigation (props: IProps) {
    return (
        <nav>
            <ul className={`nav align-${props.align || 'left'}`}>
                <li><Link to="/" activeClassName="active" onlyActiveOnIndex>Home</Link></li>
                <li><Link to="/about" activeClassName="active">About me</Link></li>
            </ul>
        </nav>
    )
}