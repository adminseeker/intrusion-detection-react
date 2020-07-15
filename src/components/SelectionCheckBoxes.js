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
        <div>
            <GeneralModal showModal={showModal} text={ModalText}/>
            <input type="checkbox" name="camera" checked={!!camera} onChange={()=>{
                setShowModal(true);
                !!camera ? setModalText("Turning off Camera") : setModalText("Turning on Camera");
                props.dispatch(startSetSelections(props.password,{camera:!camera,buzzer,notifications}))
                .then(()=>{
                    setCamera(!camera);
                    setShowModal(false);
                })
            }}/>
                <label htmlFor="camera">camera</label><br />
            <input type="checkbox" name="buzzer" checked={!!buzzer} onChange={()=>{
                setShowModal(true);
                !!buzzer ? setModalText("Turning off Buzzer") : setModalText("Turning on Buzzer");
                props.dispatch(startSetSelections(props.password,{camera,buzzer:!buzzer,notifications})) 
                .then(()=>{
                    setBuzzer(!buzzer);
                    setShowModal(false);
                })
            }}/>
                <label htmlFor="buzzer">buzzer</label><br />
            <input type="checkbox" name="notifications" checked={!!notifications} onChange={()=>{
                setShowModal(true);
                !!notifications ? setModalText("Turning off Notifications") : setModalText("Turning on Notifications");
                props.dispatch(startSetSelections(props.password,{camera,buzzer,notifications:!notifications}))
                .then(()=>{
                    setShowModal(false);
                    setNotifications(!notifications);
                })
            }}/>
                <label htmlFor="notifications">notifications</label><br /><br />
         </div>
    )
}

export default connect()(SelectionCheckBoxes);