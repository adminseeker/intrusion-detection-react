import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";


const Header = (props) => (
    <div >
        <Link to="/intrusions">
            <h1>Intrusion Detection</h1>
        </Link>
        <button>Logout</button>
    </div>
  );

  export default connect()(Header);