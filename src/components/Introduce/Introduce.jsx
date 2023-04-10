import React from "react";
import { FaHome, FaArrowDown } from "react-icons/fa";
import "./Introduce.css";
import { Link } from "react-scroll";
import RoundImg from "../../assets/round-text.png";

const Introduce = () => {
  return (
    <section id="introduce" className="section">
      <div className="btn-header ">
        <div className="btn-info">
          <h4 className="btn-info-title fadeIn">
            <FaHome></FaHome> INTRODUCE
          </h4>
          <h1 className="fadeIn btn-info-subtitle btn-info-subtitle-intro">
            Hi, I’m <span>Liridon Gashi</span> a Front End Developer.
          </h1>
          <p>
            I'm a web developer with over three years of expertise in developing
            and maintaining websites and web applications.
          </p>
        </div>
      </div>
      <div className="introduce">
        <div className="introduce-box">
          <div className="projects-intro">
            <Link
              to="projects"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <img src={RoundImg}></img>
              <FaArrowDown></FaArrowDown>
            </Link>
          </div>
          <h4 className="fadeIn">3+</h4>
          <p className="fadeIn">YEARS OF EXPERIENCE</p>
        </div>
      </div>
    </section>
  );
};

export default Introduce;
