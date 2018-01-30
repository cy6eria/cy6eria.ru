import './MainPage.scss';

import React from 'react';

export class MainPage extends React.Component {
    render () {
        return (
            <section className="main_page">
                <div className="image"/>
                <div className="content">
                    <h1>Eugene Gundorov</h1>
                    <h2>
                        <span>developer</span>
                        <span>  traveler</span>
                        <span>  badass</span>
                    </h2>
                </div>
            </section>
        );   
    }
}
