import React from "react";
import {Route, Switch, Router} from "react-router-dom";
import {connect} from "react-redux";
import createHistory from "history/createBrowserHistory"
import Dashboard from "../components/Dashboard";
import IntrusionView from "../components/IntrusionView";
import LoginPage from "../components/LoginPage";
import NotFoundPage from "../components/NotFoundPage";
import AuthErrorPage from "../components/AuthErrorPage";

const history = createHistory();

const AppRouter = ()=>{
    return(
        <Router history={history}>
            <div>
                <Switch>
                    <Route path="/" component={LoginPage} exact={true}/>    
                    <Route path="/intrusions" component={Dashboard} exact={true}/>
                    <Route path="/intrusions/:id" component={IntrusionView}/>
                    <Route path="/authError" component={AuthErrorPage}/>
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </Router>
    )
}
 
export default AppRouter;