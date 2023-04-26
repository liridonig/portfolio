import React from "react";
import "./About.css";
import { FaUser, FaArrowDown } from "react-icons/fa";
import { Link } from "react-scroll";
import RoundImg from "../../assets/round-text.png";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="btn-header">
        <div className="btn-info">
          <h4 className="btn-info-title standby">
            <FaUser></FaUser> ABOUT
          </h4>
          <h3 className="btn-info-subtitle standby">
            Welcome to my
            <span> portfolio!</span>
          </h3>
          <p className="standby">
            With over 3+ years of experience, I have developed a keen eye for
            creating modern, user-friendly websites that meet the needs of
            businesses and individuals alike. My approach to web development is
            centered on understanding the unique goals and vision of each
            project, and crafting customized solutions that exceed expectations.
            Whether it's building a brand-new website from scratch or revamping
            an existing one, I take pride in delivering high-quality work that
            meets the highest standards of excellence.
          </p>
          <p className="standby">
            Take a look at some of the projects in my portfolio to see examples
            of my work, and feel free to reach out if you have any questions or
            would like to discuss a potential collaboration. I look forward to
            working with you!
          </p>
          <div className="projects-intro standby">
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
        </div>
      </div>
    </section>
  );
};

export default About;
