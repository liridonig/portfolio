import React from "react";
import { FaHome } from "react-icons/fa";
import "./Introduce.css";
import { Link } from "react-scroll";

const Introduce = () => {
  return (
    <section id="introduce" className="section">
      <div className="btn-header ">
        <div className="btn-info">
          <h4 className="btn-info-title">
            <FaHome></FaHome> INTRODUCE
          </h4>
          <h3 className="btn-info-subtitle btn-info-subtitle-intro">
            Hi, I’m <span>Liridon Gashi</span> a Front End Developer.
          </h3>
          <p>
            Since beginning my journey as a freelance designer nearly 8 years
            ago, I've done remote work for agencies, consulted for startups, and
            collaborated with talented people to create digital products for
            both business and consumer use. I'm quietly confident, naturally
            curious, and perpetually working on improving my chopsone design
            problem at a time.
          </p>
        </div>
      </div>
      <div className="introduce">
        <div className="introduce-box">
          <h4>3+</h4>
          <p>YEARS OF EXPERIENCE</p>
        </div>
      </div>
    </section>
  );
};

export default Introduce;
