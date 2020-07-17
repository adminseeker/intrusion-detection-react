import React, { useState } from "react";
import {connect} from "react-redux";
import {startSetSelections} from "../actions/selections";
import GeneralModal from "./GeneralModal";

const SelectionCheckBoxes = (props)=>{
    const [camera,setCamera] = useState(!!props.selections.camera);
    const [buzzer,setBuzzer] = useState(!!props.selections.buzzer);
    const [notifications,setNotifications] = useState(!!props.selections.notifications);
    const [showModal,setShowModal] = useState(false);
    const [ModalText,setModalText] = useState("");
    return(
        <div className="list-checkboxes">
        <div className="content-container">
        <div className="list-header">
            <GeneralModal showModal={showModal} text={ModalText} loader_image={"53.gif"} modal__title = {"modal__title"} modal={"checkbox_modal"} />
            <div className="slider-container">
            <h3 className="slider-view-name">Camera</h3>
            <label className="list-header__title switch" htmlFor="camera">

            <input id="camera" className="list-header__title"  type="checkbox"  checked={!!camera} onChange={()=>{
                setShowModal(true);
                !!camera ? setModalText("Turning off camera") : setModalText("Turning on camera");
                props.dispatch(startSetSelections(props.password,{camera:!camera,buzzer,notifications}))
                .then(()=>{
                    setCamera(!camera);
                    setShowModal(false);
                })
            }}/>
            <div className="slider round"></div>
            </label>
            </div>
            <div className="slider-container">
            <div><h3 className="slider-view-name" >Buzzer</h3></div>
            <label className="list-header__title switch" htmlFor="buzzer">
            <input id="buzzer" className="list-header__title"  type="checkbox"  checked={!!buzzer} onChange={()=>{
                setShowModal(true);
                !!buzzer ? setModalText("Turning off buzzer") : setModalText("Turning on buzzer");
                props.dispatch(startSetSelections(props.password,{camera,buzzer:!buzzer,notifications}))
                .then(()=>{
                    setBuzzer(!buzzer);
                    setShowModal(false);
                })
            }}/>
            <div className="slider round"></div>
            </label>
            </div>
            <div className="slider-container">
            <div><h3 className="slider-view-name" >Notifications</h3></div>
            <label className="list-header__title switch" htmlFor="notifications">
            <input id="notifications" className="list-header__title"  type="checkbox"  checked={!!notifications} onChange={()=>{
                setShowModal(true);
                !!notifications ? setModalText("Turning off notifications") : setModalText("Turning on notifications");
                props.dispatch(startSetSelections(props.password,{camera,buzzer,notifications:!notifications}))
                .then(()=>{
                    setNotifications(!notifications);
                    setShowModal(false);
                })
            }}/>
            <div className="slider round"></div>
            </label>
            </div>
         </div>
         </div>
         </div>
    )
}

export default connect()(SelectionCheckBoxes);