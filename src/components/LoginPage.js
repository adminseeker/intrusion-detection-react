import React, { useState } from "react";
import {verifyPassword} from "../actions/intrusions";
import {connect} from "react-redux";


const LoginPage = (props)=>{
    const [password,setPass] = useState("");
    return (
        <div>
            <form onSubmit={ (e)=>{
                e.preventDefault();
                 props.dispatch(verifyPassword(password)).then(()=>{
                     props.history.push("/intrusions");
                }).catch((e)=>{
                    console.log(e);
                    props.history.push("/error")
                })
            }} >
                <input type="password" placeholder="Enter Password" value={password} 
                    onChange={(e)=>{
                        const password = e.target.value;
                        setPass(password);
                    }}
                />
                
                    <button type="submit">Login</button>
                
                
            </form>
        </div>
    )
}

const mapStateToProps = (state)=>({
    password: state.filters.password
})

export default connect(mapStateToProps)(LoginPage);