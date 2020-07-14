import React from "react";
import IntrusionListItem from "./IntrusionListItem"
import {startDeleteAllIntrusions,startDeleteIntrusion} from "../actions/intrusions";
import {connect} from "react-redux";
import selectIntrusions from "../selectors/intrusions";
import { confirmAlert } from "react-confirm-alert"; 
import "react-confirm-alert/src/react-confirm-alert.css"; 

const IntrusionList = (props)=>(
    
        <div>
        <div className="container">
        <button onClick={(e)=>{
            confirmAlert({
                title: "Confirm to delete all intrusions",
                message: "Are you sure you want to delete all intrusions ?",
                buttons: [
                  {
                      label: "Yes",
                      onClick: () => {
                        props.dispatch(startDeleteAllIntrusions(props.password))
                        props.history.push("/intrusions");
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
            {
                props.intrusions.map((intrusion)=>{
                    return (
                            <div key={intrusion._id}>
                            <IntrusionListItem intrusion={intrusion} history={props.history}/>
                            <div className="container">
                            <button onClick={(e)=>{
                                confirmAlert({
                                    title: "Confirm to delete this intrusion",
                                    message: "Are you sure you want to delete this ?",
                                    buttons: [
                                      {
                                          label: "Yes",
                                          onClick: () => {
                                              props.dispatch(startDeleteIntrusion(intrusion._id,props.password))
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
                            </div>
                        )
                })
            }
        </div>
    )

const mapStateToProps = (state)=>({
    intrusions:selectIntrusions(state.intrusions,state.filters),
    password: state.filters.password
})

export default connect(mapStateToProps)(IntrusionList);
