import React from "react";
import { Link } from "react-scroll";
import "../navbar/Navbar.css";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaShapes,
  FaGripVertical,
} from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link
            activeClass="active"
            to="introduce"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <FaHome></FaHome>
            <span className="navbar-icon">Introduce</span>
          </Link>
        </li>
        <li>
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <FaUser></FaUser>
            <span className="navbar-icon">About Me</span>
          </Link>
        </li>
        <li>
          <Link
            to="resume"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <FaBriefcase></FaBriefcase>
            <span className="navbar-icon">Resume</span>
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <FaShapes></FaShapes>
            <span className="navbar-icon">My Skills</span>
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <FaGripVertical></FaGripVertical>
            <span className="navbar-icon">Portfolio</span>
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <RiContactsFill></RiContactsFill>
            <span className="navbar-icon">Contact</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
