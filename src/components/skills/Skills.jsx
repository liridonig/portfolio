import React from "react";
import { FaShapes } from "react-icons/fa";
import {
  FaReact,
  FaJs,
  FaWordpress,
  FaHtml5,
  FaCss3,
  FaBootstrap,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import "../skills/Skills.css";

const Skills = () => {
  return (
    <>
      <div className="btn-header">
        <div className="btn-info">
          <h4 className="btn-info-title">
            <FaShapes></FaShapes> My Skills
          </h4>
          <h3 className="btn-info-subtitle">
            My <span>Advantages</span>
          </h3>
        </div>
      </div>
      <div className="skills">
        <div className="skills-box">
          <div className="skills-box-icon">
            <FaReact></FaReact>
          </div>
          <p>React</p>
        </div>
        <div className="skills-box">
          <div className="skills-box-icon">
            <FaJs></FaJs>
          </div>
          <p>JavaScript</p>
        </div>
        <div className="skills-box">
          <div className="skills-box-icon">
            <FaWordpress></FaWordpress>
          </div>
          <p>Wordpress</p>
        </div>
        <div className="skills-box">
          <div className="skills-box-icon">
            <FaHtml5></FaHtml5>
          </div>
          <p>HTML</p>
        </div>
        <div className="skills-box">
          <div className="skills-box-icon">
            <FaCss3></FaCss3>
          </div>
          <p>CSS</p>
        </div>
        <div className="skills-box">
          <div className="skills-box-icon">
            <FaBootstrap></FaBootstrap>
          </div>
          <p>Bootstrap</p>
        </div>
        <div className="skills-box">
          <div className="skills-box-icon">
            <SiTailwindcss></SiTailwindcss>
          </div>
          <p>Tailwind</p>
        </div>
      </div>
    </>
  );
};

export default Skills;
