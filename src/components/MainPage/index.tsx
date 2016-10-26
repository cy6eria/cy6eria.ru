import './MainPage.scss';

import * as React from 'react';
import { Link } from 'react-router';

export default function MainPage () {
    return (
        <header>
            <div className="image"/>
            <div className="content">
                <div className="left-col">
                    <h1>Eugene Gundorov</h1>
                    <h2>
                        <span>developer</span>
                        <span>  traveler</span>
                        <span>  asshole</span>
                    </h2>
                </div>
                <div className="right-col">
                    <ul className="nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About me</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );   
}
