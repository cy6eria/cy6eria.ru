import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    browserHistory,
    Switch
} from 'react-router-dom';

import './Layout.scss';

import MainPage from "../MainPage";
import AboutPage from "../AboutPage";

function NoMatch () {
    return (<h1>404</h1>)
}

export default function Layout (props) {
    return (
        <Router history={browserHistory}>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/blog" component={AboutPage} />
                <Route component={NoMatch} />
            </Switch>
        </Router>
    );
}
