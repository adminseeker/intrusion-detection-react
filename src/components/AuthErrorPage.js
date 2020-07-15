import React from "react";
import LoginPage from "./LoginPage";

const AuthErrorPage = (props)=>{
    return (
        <div>
            <h1>Authentication Error!!!</h1>
            <h3>Enter Password to Login</h3>
            <LoginPage history={props.history}/>
        </div>
    )
}

export default AuthErrorPage;