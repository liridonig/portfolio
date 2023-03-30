import React from "react";
import { Link } from "react-router-dom";
import "../navbar/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About Me</Link>
          </li>
          <li>
            <Link to="/Skills">My Skills</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
