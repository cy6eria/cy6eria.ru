import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import MainPage from "./components/MainPage";
import AboutPage from "./components/AboutPage";
import Layout from "./components/Layout";

function NoMatch () {
    return (<h1>404</h1>)
}

const AppRouter = (
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={MainPage}/>
            <Route path="about" component={AboutPage}/>
            <Route path="*" component={NoMatch}/>
        </Route>
  </Router>
)

ReactDOM.render(AppRouter, document.getElementById("app"));
