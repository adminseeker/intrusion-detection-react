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
            <label className="list-header__title" htmlFor="camera">Camera</label>
            <input className="list-header__title" type="checkbox" name="camera" checked={!!camera} onChange={()=>{
                setShowModal(true);
                !!camera ? setModalText("Turning off Camera") : setModalText("Turning on Camera");
                props.dispatch(startSetSelections(props.password,{camera:!camera,buzzer,notifications}))
                .then(()=>{
                    setCamera(!camera);
                    setShowModal(false);
                })
            }}/>
            <label className="list-header__title" htmlFor="buzzer">Buzzer</label>
            <input className="list-header__title" type="checkbox" name="buzzer" checked={!!buzzer} onChange={()=>{
                setShowModal(true);
                !!buzzer ? setModalText("Turning off Buzzer") : setModalText("Turning on Buzzer");
                props.dispatch(startSetSelections(props.password,{camera,buzzer:!buzzer,notifications})) 
                .then(()=>{
                    setBuzzer(!buzzer);
                    setShowModal(false);
                })
            }}/>
            <label className="list-header__title" htmlFor="notifications">Notifications</label>
            <input className="list-header__title" type="checkbox" name="notifications" checked={!!notifications} onChange={()=>{
                setShowModal(true);
                !!notifications ? setModalText("Turning off Notifications") : setModalText("Turning on Notifications");
                props.dispatch(startSetSelections(props.password,{camera,buzzer,notifications:!notifications}))
                .then(()=>{
                    setShowModal(false);
                    setNotifications(!notifications);
                })
            }}/>
         </div>
         </div>
         </div>
    )
}

export default connect()(SelectionCheckBoxes);