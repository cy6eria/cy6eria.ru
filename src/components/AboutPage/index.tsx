import * as React from 'react';

import './AboutPage.scss';

import Page from '../Page';

export default function AboutPage (props) {
    console.log(props);
    return (
        <Page>
            <h1>Hello there!</h1>
            <p>My name is Eugene Gundorov. I'm a frontend developer from Kazan, Russia.</p>
        </Page>
    )
}
