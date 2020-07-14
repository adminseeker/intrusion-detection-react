import React, { useState } from "react";
import {connect} from "react-redux";
import moment from "moment";
import {startDeleteIntrusion} from "../actions/intrusions";
import NotFoundPage from "./NotFoundPage";
import Header from "./Header";
import { confirmAlert } from "react-confirm-alert"; 
import "react-confirm-alert/src/react-confirm-alert.css"; 

const IntrusionView = (props)=>{
    const [imageLoaded,setImageLoaded] = useState(false);
    return(
        props.intrusion ? (
        <div>
            <Header history={props.history}/>
            <h2>There was an Intrusion at {moment( props.intrusion.atTime).format('MMMM Do YYYY, h:mm:ss a')}</h2>
            <img src = {process.env.REACT_APP_RPI_URL+"/intrusions/images/"+props.intrusion._id +".jpg"} alt={ props.intrusion._id }
            className={`smooth-image image-${
                imageLoaded ? 'visible' :  'hidden'
              }`}
              onLoad={()=> setImageLoaded(true)}
            />
            <div className="container">
                <button onClick={(e)=>{
                    confirmAlert({
                        title: "Confirm to delete this intrusion",
                        message: "Are you sure you want to delete this ?",
                        buttons: [
                                    {
                                        label: "Yes",
                                        onClick: () => {
                                            props.dispatch(startDeleteIntrusion(props.intrusion._id,props.password))
                                            props.history.push("/intrusions");
                                        }
                                    },
                                    {
                                        label: "No",
                                        onClick: () =>{}
                                    }
                                ]
                    });
                }}>Delete</button>
            </div>
            <button onClick={()=>{props.history.push("/intrusions");}}>
                Go Back
            </button>
        </div>) : <NotFoundPage />
    )
}

const mapStateToProps = (state,props)=>({
    intrusion: state.intrusions.find((intrusion)=>(intrusion._id === props.match.params.id)),
    password: state.filters.password
})

export default connect(mapStateToProps)(IntrusionView);
