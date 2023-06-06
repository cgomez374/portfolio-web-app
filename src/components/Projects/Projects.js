import React, { useState, useEffect } from "react";
import { links } from "../../Links";
import Styles from "./Projects.module.css";
import ProjectList from "../ProjectList/ProjectList";

const Projects = () => {
  const [personalProjects, setPersonalProjects] = useState([]);
  const [mpProjects, setMpProjects] = useState([]);

  const getProjects = (type) => {
    let projects = [];
    links.forEach((project) => {
      if (project.type === type) {
        projects.push(project);
      }
    });

    if (type === "personal projects") setPersonalProjects(projects);
    else if (type === "internship projects") setMpProjects(projects);
  };

  useEffect(() => {
    getProjects("personal projects");
    getProjects("internship projects");
  }, []);
  return (
    <div className={Styles.projects} id={"projects"}>
      <h2>what i've built</h2>
      <div className={Styles.listContainer}>
        <ProjectList projects={personalProjects} />
        <ProjectList projects={mpProjects} />
      </div>
    </div>
  );
};

export default Projects;
