import React from "react";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import Dashboard from "../components/Dashboard";
import IntrusionView from "../components/IntrusionView";

const AppRouter = ()=>{
    return(
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" component={Dashboard} exact={true}/>
                    <Route path="/intrusions" component={Dashboard} exact={true}/>
                    <Route path="/intrusions/:id" component={IntrusionView}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter;