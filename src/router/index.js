import React from "react"
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from  "../views/home/index"
import Login from "../views/login/index"

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/" component={Home}/>


        </Switch>
    </HashRouter>
);

export default BasicRoute;