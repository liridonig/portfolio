import React from "react";
import "./Projects.css";
import {
  FaBootstrap,
  FaCss3,
  FaGripVertical,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Hoobank",
      url: "https://hoobankks.netlify.app/",
      image: "https://liridongashi.com/assets/hoobank.png",
      icon: "FaGripVertical",
      buildWith: [<FaReact />, <FaHtml5 />, <SiTailwindcss />],
    },
    {
      id: 2,
      title: "Karrota",
      url: "https://karrota.wtf/",
      image: "https://liridongashi.com/assets/karrota.png",
      icon: "FaGripVertical",
      buildWith: [<FaWordpress />, <FaJs />, <FaHtml5 />, <FaCss3 />],
    },
    {
      id: 3,
      title: "Premium Bakery",
      url: "https://liridongashi.com/premium-bakery",
      image: "https://liridongashi.com/assets/prem.png",
      icon: "FaGripVertical",
      buildWith: [<FaWordpress />, <FaJs />, <FaHtml5 />, <FaCss3 />],
    },
    {
      id: 4,
      title: "Convosio",
      url: "https://convosio.com/",
      image: "https://liridongashi.com/assets/convosio.png",
      buildWith: [<FaJs />, <FaHtml5 />, <FaCss3 />, <FaBootstrap />],
    },
  ];

  return (
    <section id="projects">
      <div className="btn-header">
        <div className="btn-info">
          <h4 className="btn-info-title">
            <FaGripVertical></FaGripVertical> PORTFOLIO
          </h4>
          <h3 className="btn-info-subtitle">
            Featured <span>Projects</span>
          </h3>
        </div>
      </div>
      <div className="projects">
        {projectsData.map((e) => {
          return (
            <a href={e.url} target="_blank" key={e.id}>
              <div className="projects-div">
                <div className="projects-image">
                  <img src={e.image} alt={e.title}></img>
                  <div className="build-with">
                    {e.buildWith.map((t, i) => {
                      return <span key={i}>{t}</span>;
                    })}
                  </div>
                </div>
                <h3>{e.title}</h3>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
