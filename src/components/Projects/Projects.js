import React from "react";
import { links } from "../../Links";
import Styles from "./Projects.module.css";
import ProjectList from "../ProjectList/ProjectList";

const Projects = () => {
  const personalProjects = links.filter(
    (project) => project.type === "personal projects",
  );
  const internshipProjects = links.filter(
    (project) => project.type === "internship projects",
  );

  return (
    <div className={Styles.projects} id={"projects"}>
      <div className={Styles.listContainer}>
        <ProjectList projects={personalProjects} />
        <ProjectList projects={internshipProjects} />
      </div>
    </div>
  );
};

export default Projects;
