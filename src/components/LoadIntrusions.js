import React,{useState} from "react";
import {connect} from "react-redux";
import {startGetIntrusions} from "../actions/intrusions";
import GeneralModal from "./GeneralModal";

const LoadIntrusions =(props)=>{
    const [showModal,setShowModal] = useState(false);
    const [ModalText,setModalText] = useState("");
    return (
        <span>
        <GeneralModal modal={"checkbox_modal"} loader_image={"52.gif"} modal__title = {"modal__title"} showModal={showModal} text={ModalText} />
            <button
                className="button button--secondary button-load-intrusions" 
                onClick={(e)=>{
                    setShowModal(true)
                    setModalText("Loading Intrusions")
                    props.dispatch(startGetIntrusions(props.password)).then(()=>{
                        setShowModal(false)
                    }).catch((e)=>{
                        console.log(e);
                    })
                }}
            >Load Intrusions</button>
        </span>
    )
}


export default connect()(LoadIntrusions);