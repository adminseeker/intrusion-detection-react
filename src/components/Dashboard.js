import React from "react";
import IntrusionList from "./IntrusionsList";
import IntrusionListFilters from "./IntrusionListFilters";
import Header from "./Header";
import SelectionCheckBoxes from "./SelectionCheckBoxes";
import {connect} from "react-redux";
import {startGetSelections} from "../actions/selections";
import NotFoundPage from "./NotFoundPage";

const Dashboard = (props)=>{
    props.dispatch(startGetSelections(props.password));
    return(
        <div>
            {!props.password && <NotFoundPage />}
            {props.password && <Header history={props.history}/>}
            {props.password && <IntrusionListFilters />}
            {props.selections.id === "options"  &&( <SelectionCheckBoxes  selections={props.selections} password={props.password}/> )}
            {props.password && <IntrusionList history={props.history}/>}
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        selections: state.selections,
        password: state.filters.password
    }
}

export default connect(mapStateToProps)(Dashboard);