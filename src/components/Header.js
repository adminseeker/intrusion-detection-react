import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {setPassword} from "../actions/filters";


const Header = (props) => (
    <div >
        <Link to="/intrusions">
            <h1>Intrusion Detection</h1>
        </Link>
        <button
            onClick={
                (e)=>{
                    props.dispatch(setPassword(""));
                    props.history.push("/");
                }
            }
        >Logout</button>
    </div>
  );

  export default connect()(Header);