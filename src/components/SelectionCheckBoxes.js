import React, { useState } from "react";
import {connect} from "react-redux";
import {startSetSelections} from "../actions/selections";

const SelectionCheckBoxes = (props)=>{
    const [camera,setCamera] = useState(!!props.selections.camera);
    const [buzzer,setBuzzer] = useState(!!props.selections.buzzer);
    const [notifications,setNotifications] = useState(!!props.selections.notifications);
    return(
        <div>
            <input type="checkbox" name="camera" checked={!!camera} onChange={()=>{setCamera(!camera); props.dispatch(startSetSelections(props.password,{camera:!camera,buzzer,notifications})); }}/>
                <label htmlFor="camera">camera</label><br />
            <input type="checkbox" name="buzzer" checked={!!buzzer} onChange={()=>{setBuzzer(!buzzer); props.dispatch(startSetSelections(props.password,{camera,buzzer:!buzzer,notifications})); }}/>
                <label htmlFor="buzzer">buzzer</label><br />
            <input type="checkbox" name="notifications" checked={!!notifications} onChange={()=>{setNotifications(!notifications); props.dispatch(startSetSelections(props.password,{camera,buzzer,notifications:!notifications})); }}/>
                <label htmlFor="notifications">notifications</label><br /><br />
         </div>
    )
}

export default connect()(SelectionCheckBoxes);