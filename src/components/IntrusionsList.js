import React , {useState} from "react";
import IntrusionListItem from "./IntrusionListItem";
import {startDeleteAllIntrusions} from "../actions/intrusions";
import {connect} from "react-redux";
import selectIntrusions from "../selectors/intrusions";
import { confirmAlert } from "react-confirm-alert"; 
import "react-confirm-alert/src/react-confirm-alert.css"; 
import GeneralModal from "./GeneralModal";


const IntrusionList = (props)=>{
    const [showModal,setShowModal] = useState(false);
    const [ModalText,setModalText] = useState("");
    return(
      <div>
      <GeneralModal loader_image={"54.gif"} modal={"checkbox_modal"}  modal__title = {"modal__title"} showModal={showModal} text={ModalText} />
      <div className="content-container">
        <div className="list-header">
        <h3 className="list-header__title">Intrusions</h3>
        <button 
          className="button button--secondary" onClick={(e)=>{
            confirmAlert({
                title: "Confirm to delete all intrusions",
                message: "Are you sure you want to delete all intrusions ?",
                buttons: [
                  {
                      label: "Yes",
                      onClick: () => {
                        setShowModal(true);
                        setModalText("Deleting All Intrusions");
                        props.dispatch(startDeleteAllIntrusions(props.password)).then(()=>{
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
        }}>Delete All</button>
        </div>
             <div className="list-body">
            {props.intrusions.length === 0 ? (
              <div className="list-item list-item--message">
              <span>No Intrusions Detected. Click Load Intrusions to load any existing intrusions.</span>
            </div>
            ) :
                (props.intrusions.map((intrusion)=>{
                    return (
                            <div key={intrusion._id}>
                            <div className="container">
                            <IntrusionListItem intrusion={intrusion} history={props.history}/>
                            
                            </div>
                            </div>
                        )
                })
                )
              }
        </div>
        </div>
        </div>
        
    )
}

const mapStateToProps = (state)=>({
    intrusions:selectIntrusions(state.intrusions,state.filters),
    password: state.filters.password
})

export default connect(mapStateToProps)(IntrusionList);
