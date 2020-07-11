import React from "react";
import IntrusionList from "./IntrusionsList";
import IntrusionListFilters from "./IntrusionListFilters";

const Dashboard = (props)=>(
    <div>
        <IntrusionListFilters />
        <IntrusionList history={props.history}/>
    </div>
)

export default Dashboard;
