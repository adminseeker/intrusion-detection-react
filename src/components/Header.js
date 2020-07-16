import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {setPassword} from "../actions/filters";


const Header = (props) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/intrusions">
                    <h1>Intrusion Detection</h1>
                </Link>
                <button
                    className="button button--link"
                    onClick={
                        (e)=>{
                            props.dispatch(setPassword(""));
                            props.history.push("/");
                        }
                    }
                >Logout</button>
            </div>
        </div>
    </header>
  );

  export default connect()(Header);