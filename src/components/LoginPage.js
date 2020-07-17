import React, { useState } from "react";
import {verifyPassword} from "../actions/intrusions";
import {connect} from "react-redux";
import GeneralModal from "./GeneralModal";


const LoginPage = (props)=>{
    const [password,setPass] = useState("");
    const [showModal,setShowModal] = useState(false);
    const [ModalText,setModalText] = useState("");
    const [error,setError] = useState("");
    return (
        <div className="box-layout">
        <div className="box-layout__box">
        <h1 className="box-layout__title">Intrusion Detection</h1>
        <GeneralModal 
            modal = {"login_modal"}
            loader_image={"51.gif"}
            modal__title = {"login_modal__title"}
            showModal={showModal} 
            text={ModalText}
        /> 
            <form onSubmit={ (e)=>{
                e.preventDefault();
                setShowModal(true);
                setModalText("Logging In");
                 props.dispatch(verifyPassword(password)).then(()=>{
                    setShowModal(false) 
                    props.history.push("/intrusions");    
                }).catch((e)=>{
                    setShowModal(false);
                    setError("Authentication Error!!!\nEnter Your password again to login.")
                    console.log(e);
                    
                })
            }} >
                {error && <p style={{color:"red"}}>{error}</p>}
                <input type="password" placeholder="Enter Password" value={password} 
                    onChange={(e)=>{
                        const password = e.target.value;
                        setPass(password);
                    }}
                />
                    <br/>
                    
                    <div>
                    <button className="button" type="submit">Login</button>
                    </div>
                
            </form>
        </div>
        </div>
    )
}

export default connect()(LoginPage);