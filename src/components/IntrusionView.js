import React from "react";
import {connect} from "react-redux";
import moment from "moment";
import {startDeleteIntrusion} from "../actions/intrusions";

const IntrusionView = (props)=>(
    <div>
        <h2>There was an Intrusion at {moment(props.intrusion.atTime).format('MMMM Do YYYY, h:mm:ss a')}</h2>
        <img src = {"http://raspberrypi.local:3000/intrusions/images/"+props.intrusion._id+".jpg"} alt={props.intrusion._id}/>
        <button onClick={(e)=>{
            props.dispatch(startDeleteIntrusion(props.intrusion._id))
            props.history.push("/");
        }}>
        Delete
        </button>
    </div>
)

const mapStateToProps = (state,props)=>({
    intrusion: state.intrusions.find((intrusion)=>(intrusion._id === props.match.params.id))
})

export default connect(mapStateToProps)(IntrusionView);