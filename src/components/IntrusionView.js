import React, { useState } from "react";
import {connect} from "react-redux";
import moment from "moment";
import {startDeleteIntrusion} from "../actions/intrusions";
import Header from "./Header";
import { confirmAlert } from "react-confirm-alert"; 
import "react-confirm-alert/src/react-confirm-alert.css"; 
import GeneralModal from "./GeneralModal";
import AuthErrorPage from "./AuthErrorPage";


const IntrusionView = (props)=>{
    const [imageLoaded,setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);
    const [showModal,setShowModal] = useState(false);
    const [ModalText,setModalText] = useState("");
    return(
        props.intrusion ? (
            <div>
            <Header history={props.history}/>
        <div className="content-container-image">
            <GeneralModal modal={"checkbox_modal"} loader_image={"54.gif"} modal__title = {"modal__title"} showModal={showModal} text={ModalText} />
            <h2>There was an Intrusion on {moment( props.intrusion.atTime).format('MMMM Do YYYY, h:mm:ss a')}</h2>
            {imageError && <h3>Your Camera was turned off when this intrusion was detected.</h3>}
            {!imageError &&
                <div className="intrusion-image">
                <img  src = {process.env.REACT_APP_RPI_URL+"/intrusions/images/"+props.intrusion._id +".jpg"} alt={ props.intrusion._id } 
            className={`smooth-image image-${
                imageLoaded ? 'visible' :  'hidden'
              }` + "intrusion-image"}
              onLoad={()=> setImageLoaded(true)}
              onError={()=>{
                  setImageError(true)
              }}
            />
            </div>
            }
            <div className="view-buttons">
            <button 
                className="button"
                onClick={()=>{props.history.push("/intrusions");}}>
                Go Back
                </button>
                <button 
                    className="button button--secondary"
                    onClick={(e)=>{
                    confirmAlert({
                        title: "Confirm to delete this intrusion",
                        message: "Are you sure you want to delete this ?",
                        buttons: [
                                    {
                                        label: "Yes",
                                        onClick: () => {
                                            setShowModal(true);
                                            setModalText("Deleting Intrusion");
                                            props.dispatch(startDeleteIntrusion(props.intrusion._id,props.password)).then(()=>{
                                                setShowModal(false);
                                                props.history.push("/intrusions");
                                            })
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
        </div>
        </div>
        ) : <AuthErrorPage history={props.history}/>
    )
}

const mapStateToProps = (state,props)=>({
    intrusion: state.intrusions.find((intrusion)=>(intrusion._id === props.match.params.id)),
    password: state.filters.password
})

export default connect(mapStateToProps)(IntrusionView);
