import * as React from 'react';
import { Link } from 'react-router';

import './MainNavigation.scss';

interface IProps {
    align?: "left" | "right";
}

export default function MainNavigation (props: IProps) {
    return (
        <ul className={`nav align-${props.align || 'left'}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About me</Link></li>
        </ul>
    )
}