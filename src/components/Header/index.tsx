import './Header.scss';

import * as React from 'react';

export default function Header () {
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
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About me</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );   
}
