import React from "react";
import IntrusionList from "./IntrusionsList";

const Dashboard = (props)=>(
    <div>
        <IntrusionList history={props.history}/>
    </div>
)

export default Dashboard;
