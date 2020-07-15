import React, { useState } from "react";
import {connect} from "react-redux";
import {startSetSelections} from "../actions/selections";

const SelectionCheckBoxes = (props)=>{
    const [camera,setCamera] = useState(!!props.selections.camera);
    const [buzzer,setBuzzer] = useState(!!props.selections.buzzer);
    const [notifications,setNotifications] = useState(!!props.selections.notifications);
    return(
        <div>
            <input type="checkbox" name="camera" checked={!!camera} onChange={()=>{
                props.dispatch(startSetSelections(props.password,{camera:!camera,buzzer,notifications}))
                .then(()=>{
                    setCamera(!camera);
                })
            }}/>
                <label htmlFor="camera">camera</label><br />
            <input type="checkbox" name="buzzer" checked={!!buzzer} onChange={()=>{
                props.dispatch(startSetSelections(props.password,{camera,buzzer:!buzzer,notifications})) 
                .then(()=>{
                    setBuzzer(!buzzer);
                })
            }}/>
                <label htmlFor="buzzer">buzzer</label><br />
            <input type="checkbox" name="notifications" checked={!!notifications} onChange={()=>{
                props.dispatch(startSetSelections(props.password,{camera,buzzer,notifications:!notifications}))
                .then(()=>{
                    setNotifications(!notifications);
                })
            }}/>
                <label htmlFor="notifications">notifications</label><br /><br />
         </div>
    )
}

export default connect()(SelectionCheckBoxes);