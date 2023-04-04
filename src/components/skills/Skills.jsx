import React from "react";
import { FaShapes } from "react-icons/fa";
import {
  FaReact,
  FaJs,
  FaWordpress,
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaSass,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import "./Skills.css";

const Skills = () => {
  const skillsData = [
    {
      id: 1,
      title: "React",
      icon: <FaReact></FaReact>,
    },
    {
      id: 2,
      title: "JavaScript",
      icon: <FaJs></FaJs>,
    },
    {
      id: 3,
      title: "Wordpress",
      icon: <FaWordpress></FaWordpress>,
    },
    {
      id: 4,
      title: "HTML",
      icon: <FaHtml5></FaHtml5>,
    },
    {
      id: 5,
      title: "Sass",
      icon: <FaSass></FaSass>,
    },
    {
      id: 6,
      title: "CSS",
      icon: <FaCss3></FaCss3>,
    },
    {
      id: 7,
      title: "Bootstrap",
      icon: <FaBootstrap></FaBootstrap>,
    },
    {
      id: 8,
      title: "Tailwind",
      icon: <SiTailwindcss></SiTailwindcss>,
    },
  ];
  return (
    <section id="skills" className="section">
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
        {skillsData.map((e) => {
          return (
            <div className="skills-box" key={e.id}>
              <div className="skills-box-icon">{e.icon}</div>
              <p>{e.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
