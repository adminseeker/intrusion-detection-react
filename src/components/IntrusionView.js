import React from "react";

const IntrusionView = (props)=>(
    <div>
        <h2>There was an Intrusion at {props.intrusion.atTime}</h2>
        <img src = {"http://raspberrypi.local/intrusions/images/"+props.intrusion._id+".jpg"} />
    </div>
)

export default IntrusionView;