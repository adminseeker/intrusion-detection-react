import React from "react";
import {Route, Switch, Router} from "react-router-dom";
import createHistory from "history/createBrowserHistory"
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import IntrusionView from "../components/IntrusionView";

const history = createHistory();

const AppRouter = ()=>{
    return(
        <Router history={history}>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={Dashboard} exact={true}/>
                    <Route path="/intrusions" component={Dashboard} exact={true}/>
                    <Route path="/intrusions/:id" component={IntrusionView}/>
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter;