import React from "react";
import "./Profile.css";
import Me from "../../assets/me.jpeg";
import {
  FaLinkedinIn,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaBriefcase,
} from "react-icons/fa";
import CV from "../../assets/cv.pdf";

const Profile = () => {
  return (
    <div className="profile standby fadeIn">
      <div className="profile-pic">
        <img src={Me}></img>
      </div>
      <div className="profile-details">
        <h3>Liridon Gashi</h3>
        <h4>Front End Developer</h4>
        <p>liriddongashi@gmail.com</p>
      </div>
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/liridon-gashi-562331162/"
          target="_blank"
        >
          <FaLinkedinIn />
        </a>
        <a href="https://www.facebook.com/dooni11" target="_blank">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/liridonig/" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://github.com/liridonig" target="_blank">
          <FaGithub />
        </a>
      </div>
      <div className="donwload-cv">
        <a href={CV} download>
          <FaBriefcase></FaBriefcase> Download CV
        </a>
      </div>
    </div>
  );
};

export default Profile;
