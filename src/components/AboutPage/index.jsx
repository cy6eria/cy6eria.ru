import * as React from 'react';

import './AboutPage.scss';

export default class AboutPage extends React.PureComponent {
    componentWillMount () {
        document.title = 'About me - Eugene Gundorov aka cy6eria'
    }
    
    render () {
        return (
            <div className="about-page">
                <h1>Hello there!!!</h1>
                <p>My name is Eugene Gundorov. I'm a frontend developer from Kazan, Russia.</p>
            </div>
        );
    }
}
