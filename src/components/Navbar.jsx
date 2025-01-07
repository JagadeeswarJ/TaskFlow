import React from "react";
import icon from "../assets/favicon.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="header">
      <div className="container">
        <div className="image-container">
          <Link to="">
            <img src={icon} alt="Main-Logo" className="logo"></img>
          </Link>
        </div>
        <div>
          <ul className="nav-menu">
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="todo">ToDo</Link>
            </li>
            <li>
              <Link to="eisen">Eisen - Hower Matrix</Link>
            </li>
            <li>
              <Link to="repeatedTask">Reapeated Task</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
