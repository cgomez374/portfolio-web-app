import React from "react";
import Styles from "./ProjectsList.module.css";

const ProjectList = ({ projects }) => {
  let title;
  if (projects[0] !== undefined) {
    title = projects[0].type;
  }
  return (
    <>
      <h3 id={Styles.title}>{title}</h3>
      {title === "personal projects" && (
        <strong>
          <p>*Requires 30 seconds to start</p>
        </strong>
      )}
      <div className={Styles.track}>
        {projects !== null &&
          projects.map((project, index) => (
            <div className={Styles.projectCard} key={index}>
              <a href={project.link} target="_blank" rel="noreferrer">
                <img src={project.img} alt="project screenshot" />
                <h4>{project.name}</h4>
              </a>
            </div>
          ))}
      </div>
    </>
  );
};

export default ProjectList;
