import React from "react";
import { FaBriefcase } from "react-icons/fa";
import "./Resume.css";

const Resume = () => {
  const resumeData = [
    {
      id: 0,
      title: "Front End Developer & Wordpress Developer",
      source: "Triokos",
      dateStart: "01/07/2023",
      dateEnd: "Current",
    },
    {
      id: 1,
      title: "Front End Developer & Wordpress Developer",
      source: "Karrota",
      dateStart: "01/10/2019",
      dateEnd: `30/09/2022`,
    },
    {
      id: 2,
      title: "CERTIFICATE  FOR REACT DEVELOPER(REDUX, HOOKS, REACT QUERY)",
      source: "Udemy",
      dateStart: "01/12/2022",
      dateEnd: "05/02/2024",
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
    <section id="resume" className="section">
      <div className="btn-header">
        <div className="btn-info">
          <h4 className="btn-info-title standby">
            <FaBriefcase></FaBriefcase> RESUME
          </h4>
          <h3 className="btn-info-subtitle standby">
            Training & <span>Experience</span>
          </h3>
        </div>
      </div>
      <div className="resume">
        {resumeData.map((e) => {
          const { id, title, source, dateStart, dateEnd } = e;
          return (
            <div className="resume-div" key={id}>
              <p className="standby">
                {dateStart} - {dateEnd}
              </p>
              <h2 className="standby">{title}</h2>
              <h3 className="standby">{source}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Resume;
