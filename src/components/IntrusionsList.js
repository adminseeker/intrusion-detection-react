import React, { Component } from "react";
import IntrusionListItem from "./IntrusionListItem"
import axios from "axios";

class IntrusionList extends Component{

    state = {
        intrusions:[]
    }

    getDataFromServer = async ()=>{
        let toReturn;
        await axios.get("/intrusions").then((data)=>{
            toReturn = data;
        }).catch((e)=>{
            console.log(e);
        })
        console.log("toReturn: "+toReturn);
        return toReturn;
    }

    componentDidMount = ()=>{
        this.getDataFromServer().then((data)=>{
            console.log(data.data);
            this.setState({
                intrusions : data.data
            });
        }).catch((e)=>{
            console.log(e);
        })
    }

    render(){
        return(
            <div>
                {
                    this.state.intrusions.map((intrusion)=>{
                        return <IntrusionListItem key={intrusion._id} intrusion={intrusion}/>
                    })
                }
            </div>
        )
    }
}

export default IntrusionList;