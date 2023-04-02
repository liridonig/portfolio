import React from "react";
import "./About.css";
import { FaUser } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className="btn-header">
        <div className="btn-info">
          <h4 className="btn-info-title">
            <FaUser></FaUser> ABOUT
          </h4>
          <h3 className="btn-info-subtitle">
            Every great design begin with an even
            <span> better story</span>
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
    </>
  );
};

export default About;
