import * as React from 'react';

import './AboutPage.scss';

import Page from '../Page';

export default class AboutPage extends React.Component<void, void> {
    componentDidMount () {
        document.title = 'About me - Eugene Gundorov aka cy6eria'
    }
    
    render () {
        return (
            <Page>
                <h1>Hello there!</h1>
                <p>My name is Eugene Gundorov. I'm a frontend developer from Kazan, Russia.</p>
            </Page>
        )
    }
}
