import React from "react";


const NotFoundPage = (props)=>{
    return (
        <div className="not-found">
                
                <div className="box-layout__title">
            <button 
            className="button button--secondary not-found-button"
            onClick={(e)=>{
                props.history.push("/");
            }}> Go Back to Login Page
            </button>
        </div>
        </div>
    )
}

export default NotFoundPage;