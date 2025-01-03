import React from "react";
import icon from "../assets/favicon.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <div>
        <img src={icon} alt="Main-Logo"></img>
      </div>
      <div>
        <ul>
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
  );
}

export default Header;
