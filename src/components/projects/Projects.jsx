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

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Karrota",
      url: "https://karrota.wtf/",
      image: "/src/assets/karrota.gif",
      icon: "FaGripVertical",
      buildWith: [<FaWordpress />, <FaJs />, <FaHtml5 />, <FaCss3 />],
    },
    {
      id: 2,
      title: "Convosio",
      url: "https://convosio.com/",
      image: "/src/assets/convosio.svg",
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
