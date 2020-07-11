import React from "react";
import IntrusionListItem from "./IntrusionListItem"
import {startDeleteAllIntrusions,startDeleteIntrusion} from "../actions/intrusions";
import {connect} from "react-redux";
import selectIntrusions from "../selectors/intrusions";


const IntrusionList = (props)=>(
    
        <div>
            <button onClick={(e)=>{
                props.dispatch(startDeleteAllIntrusions())
                props.history.push("/");
            }}>
            Delete All
            </button>
            {
                props.intrusions.map((intrusion)=>{
                    return (
                            <div key={intrusion._id}>
                            <IntrusionListItem intrusion={intrusion} history={props.history}/>
                            <button onClick={(e)=>{
                                props.dispatch(startDeleteIntrusion(intrusion._id))
                                props.history.push("/");
                            }}>
                            Delete
                            </button>
                            </div>
                        )
                })
            }
        </div>
    )

const mapStateToProps = (state)=>({
    intrusions:selectIntrusions(state.intrusions,state.filters)
})

export default connect(mapStateToProps)(IntrusionList);