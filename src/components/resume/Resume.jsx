import React from "react";
import { FaBriefcase } from "react-icons/fa";
import "./Resume.css";

const Resume = () => {
  const resumeData = [
    {
      id: 1,
      title: "Wordpress Developer",
      source: "Karrota",
      dateStart: "01/10/2019",
      dateEnd: `30/09/2022`,
      icon: "<FaBriefcase/>",
    },
    {
      id: 2,
      title:
        "Certificate of Completion for React Developer(Redux, Hooks, GraphQL)",
      source: "Udemy",
      dateStart: "01/12/2022",
      dateEnd: "15/02/2023",
    },
    {
      id: 3,
      title: "Certificate of Completion for Web Design",
      source: "Innovation Centre of Kosovo (ICK)",
      dateStart: "20/12/2018",
      dateEnd: "20/03/2019",
    },
  ];

  return (
    <>
      <div className="btn-header">
        <div className="btn-info">
          <h4 className="btn-info-title">
            <FaBriefcase></FaBriefcase> RESUME
          </h4>
          <h3 className="btn-info-subtitle">
            Training & <span>Experience</span>
          </h3>
        </div>
      </div>
      <div className="resume">
        {resumeData.map((e) => {
          return (
            <div className="resume-div" key={e.id}>
              <p>
                {e.dateStart} - {e.dateEnd}
              </p>
              <h2>{e.title}</h2>
              <h3>{e.source}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Resume;
