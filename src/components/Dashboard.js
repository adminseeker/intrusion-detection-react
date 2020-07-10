import React, { Component } from "react";

class Dashboard extends Component{
    state = {
        response : ""
    }
    fetchServer=async ()=>{
        const response =  await fetch("/test");
        const body = await response.json();
        if(response.status!==200) throw Error(body.message);
        return body;
    }

    componentDidMount = ()=>{
        setTimeout(()=>{
            this.fetchServer().then((res)=>(this.setState({response:res.data}))).catch((error)=>console.log(error));
        },5000);
        
    }

    render(){
        return(
            <div>
                <h1>Message from Server: {this.state.response}</h1>
            </div>
        )
    }
     
}

export default Dashboard;
