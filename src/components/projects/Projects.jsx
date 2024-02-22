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
import Irevu from "../../assets/irevud.png";
import Karrota from "../../assets/karrota.png";
import Convosio from "../../assets/convosio.png";
import Idle from "../../assets/idle.jpg";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Innenausbau",
      url: "https://idlinnenausbau.ch/",
      image: Idle,
      buildWith: [<FaWordpress />, <FaHtml5 />, <FaBootstrap />],
    },
    {
      id: 2,
      title: "Irevu Dashboard",
      url: "https://irevvu.netlify.app",
      image: Irevu,
      buildWith: [<FaJs />, <FaHtml5 />, <FaCss3 />, <FaBootstrap />],
    },
    {
      id: 3,
      title: "Karrota",
      url: "https://karrota.wtf/",
      image: Karrota,
      buildWith: [<FaWordpress />, <FaJs />, <FaHtml5 />, <FaCss3 />],
    },
    {
      id: 4,
      title: "Convosio",
      url: "https://convosio.com/",
      image: Convosio,
      buildWith: [<FaJs />, <FaHtml5 />, <FaCss3 />, <FaBootstrap />],
    },
  ];

  return (
    <section id="projects">
      <div className="btn-header">
        <div className="btn-info">
          <h4 className="btn-info-title standby">
            <FaGripVertical></FaGripVertical> PORTFOLIO
          </h4>
          <h3 className="btn-info-subtitle standby">
            Featured <span>Projects</span>
          </h3>
        </div>
      </div>
      <div className="projects">
        {projectsData.map((e) => {
          const { id, title, url, image, buildWith } = e;
          return (
            <a href={url} target="_blank" key={id}>
              <div className="projects-div standby">
                <div className="projects-image">
                  <img src={image} alt={title}></img>
                  <div className="build-with">
                    {buildWith.map((t, i) => {
                      return <span key={i}>{t}</span>;
                    })}
                  </div>
                </div>
                <h3>{title}</h3>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
