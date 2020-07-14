import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import moment from "moment";

const IntrusionListItem = (props)=>{
    return(
        <Link to={"/intrusions/"+props.intrusion._id}> 
            <div>
                <h3>Intrusion detected on: {moment(props.intrusion.atTime).format('MMMM Do YYYY, h:mm:ss a')}</h3>
            </div>
        </Link>
    )
}

export default connect()(IntrusionListItem);