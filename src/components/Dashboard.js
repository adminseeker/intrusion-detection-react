import React from "react";
import IntrusionList from "./IntrusionsList";
import IntrusionListFilters from "./IntrusionListFilters";
import Header from "./Header";

const Dashboard = (props)=>(
    <div>
        <Header history={props.history}/>
        <IntrusionListFilters />
        <IntrusionList history={props.history}/>
    </div>
)

export default Dashboard;