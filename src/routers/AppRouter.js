import React from "react";
import {Route, Switch, Router} from "react-router-dom";
import createHistory from "history/createBrowserHistory"
import Dashboard from "../components/Dashboard";
import IntrusionView from "../components/IntrusionView";
import LoginPage from "../components/LoginPage";
import NotFoundPage from "../components/NotFoundPage";

const history = createHistory();

const AppRouter = ()=>{
    return(
        <Router history={history}>
            <div>
                <Switch>
                    <Route path="/" component={LoginPage} exact={true}/>    
                    <Route path="/intrusions" component={Dashboard} exact={true}/>
                    <Route path="/intrusions/:id" component={IntrusionView}/>
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter;