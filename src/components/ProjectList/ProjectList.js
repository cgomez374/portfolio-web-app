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
              <img src={project.img} alt="project image" />
              <h4>
                <a href={project.link} target="_blank">
                  {project.name}
                </a>
              </h4>
            </div>
          ))}
      </div>
    </>
  );
};

export default ProjectList;
