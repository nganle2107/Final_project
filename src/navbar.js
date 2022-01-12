import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

class navbar extends React.Component {
  render() {
    return (
      <nav>
        <li> T19m </li>
        <Link to="/maingallery">
          <li> Main Gallery </li>
        </Link>
        <div className="dropdown">
          <button className="dropbtn"> Schedule </button>
            <div className="dropdown-content">
              <Link to="/xemlich">
                <p> Xem lịch hẹn </p>
              </Link>
              <Link to ="datlich">
                <p> Đặt lịch hẹn </p>
              </Link>
            </div>
        </div>
        <Link to="/explore">
          <li> Explore </li>
        </Link>
        <Link to="/user">
          <li style={{float:"right"}}>
            User
          </li>
        </Link>
      </nav>
    );
  }
}

export default navbar;
