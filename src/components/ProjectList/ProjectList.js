import React from "react";
import Styles from "./ProjectsList.module.css";

const ProjectList = ({ projects }) => {
  let title;
  if (projects[0] !== undefined) {
    title = projects[0].type;
  }
  return (
    <>
      <h3>{title}</h3>
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
