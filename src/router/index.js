import React from "react"
import {Router, Route, Switch} from 'react-router-dom';
import { createBrowserHistory } from "history";
import Home from  "../views/home/index"
import Login from "../views/login/index"

//react-router的4.0

const history = createBrowserHistory();

const BasicRoute = () => (
    <Router   history={history}>
        <Switch>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/" component={Login}/>
        </Switch>
    </Router>
);

export default BasicRoute;