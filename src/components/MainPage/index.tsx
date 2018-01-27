import './MainPage.scss';

import * as React from 'react';

export default class MainPage extends React.Component<void, void> {
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
