import React,{useState} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import selectIntrusions from "../selectors/intrusions";
import {startDeleteIntrusion} from "../actions/intrusions";
import moment from "moment";
import { confirmAlert } from "react-confirm-alert"; 
import "react-confirm-alert/src/react-confirm-alert.css"; 
import GeneralModal from "./GeneralModal";

const IntrusionListItem = (props)=>{
    const [ModalText,setModalText] = useState("");
    const [showModal,setShowModal] = useState(false);
    return(
        <div>
        <Link className="list-item" to={"/intrusions/"+props.intrusion._id}> 
                <h3 className="list-item__data">Intrusion detected on: {moment(props.intrusion.atTime).format('MMMM Do YYYY, h:mm:ss a')}</h3>
                </Link>
                <GeneralModal loader_image={"54.gif"} modal={"checkbox_modal"}  modal__title = {"modal__title"} showModal={showModal} text={ModalText} />          
                
                <button className="button button--secondary pos_right" onClick={(e)=>{
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
                            
    )
}

const mapStateToProps = (state)=>({
    intrusions:selectIntrusions(state.intrusions,state.filters),
    password: state.filters.password
})

export default connect(mapStateToProps)(IntrusionListItem);