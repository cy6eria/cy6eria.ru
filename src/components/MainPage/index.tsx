import './MainPage.scss';

import * as React from 'react';

import MainNavigation from '../MainNavigation';

export default class MainPage extends React.Component<void, void> {
    componentDidMount () {
        document.title = 'Home - Eugene Gundorov aka cy6eria'
    }

    render () {
        return (
            <header>
                <div className="image"/>
                <div className="content">
                    <div className="left-col">
                        <h1>Eugene Gundorov!</h1>
                        <h2>
                            <span>developer</span>
                            <span>  traveler</span>
                            <span>  badass</span>
                        </h2>
                    </div>
                    <div className="right-col">
                        <MainNavigation align="right" />
                    </div>
                </div>
            </header>
        );   
    }
}
