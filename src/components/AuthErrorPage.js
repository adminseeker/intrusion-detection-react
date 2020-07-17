import React from "react";
import LoginPage from "./LoginPage";

const AuthErrorPage = (props)=>{
    return (
        <div>
            
            <LoginPage history={props.history}/>
        </div>
    )
}

export default AuthErrorPage; 