import Styles from "./ProjectsList.module.css";

const ProjectList = ({ projects }) => {
  if (!projects || projects.length === 0) return null;

  return (
    <>
      <div className={Styles.track}>
        {projects.map((project) => (
          <div className={Styles.projectCard} key={project.name}>
            <a href={project.link} target="_blank" rel="noreferrer">
              <img
                src={project.img}
                alt={`${project.name} project screenshot`}
              />
              <div className={Styles.projectCardContent}>
                <h4>{project.name}</h4>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectList;
