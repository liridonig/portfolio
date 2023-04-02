import React from "react";
import { Link } from "react-router-dom";
import "../navbar/Navbar.css";
import { FaHome, FaUser, FaBriefcase, FaShapes } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">
            <FaHome></FaHome>
            <span className="navbar-icon">Introduce</span>
          </Link>
        </li>
        <li>
          <Link to="/About">
            <FaUser></FaUser>
            <span className="navbar-icon">About Me</span>
          </Link>
        </li>
        <li>
          <Link to="/Resume">
            <FaBriefcase></FaBriefcase>
            <span className="navbar-icon">Resume</span>
          </Link>
        </li>
        <li>
          <Link to="/Skills">
            <FaShapes></FaShapes>
            <span className="navbar-icon">My Skills</span>
          </Link>
        </li>
        <li>
          <Link to="/Contact">
            <RiContactsFill></RiContactsFill>
            <span className="navbar-icon">Contact</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
