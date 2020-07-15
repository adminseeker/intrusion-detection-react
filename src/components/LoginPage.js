import React, { useState } from "react";
import {verifyPassword} from "../actions/intrusions";
import {connect} from "react-redux";
import GeneralModal from "./GeneralModal";


const LoginPage = (props)=>{
    const [password,setPass] = useState("");
    const [showModal,setShowModal] = useState(false);
    const [ModalText,setModalText] = useState("");
    return (
        <div>
        <GeneralModal showModal={showModal} text={ModalText}/> 
            <form onSubmit={ (e)=>{
                e.preventDefault();
                setShowModal(true);
                setModalText("Logging In");
                 props.dispatch(verifyPassword(password)).then(()=>{
                    setShowModal(false) 
                    props.history.push("/intrusions");    
                }).catch((e)=>{
                    console.log(e);
                    props.history.push("/authError")
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