import React, { useState, useEffect } from 'react';
import {links} from '../../Links';
import Styles from './Projects.module.css';
import ProjectList from '../ProjectList/ProjectList';

const Projects = () => {
    const [reactProjects, setReactProjects] = useState([]);
    const [mpProjects, setMpProjects] = useState([]);
    const [basicsProjects, setBasicsProjects] = useState([]);

    const getProjects = (type) => {
        let projects = [];
        links.forEach((project) => {
            if(project.type === type){
                projects.push(project);
            }
        })

        if(type === 'react')
            setReactProjects(projects);
        else if(type === 'minority programmers association')
            setMpProjects(projects)
        else if(type === 'html + css + javascript')
            setBasicsProjects(projects)

    }

    useEffect(() => {
        getProjects('react');
        getProjects('minority programmers association');
        getProjects('html + css + javascript')
    }, [])
    return (
        <div className={Styles.projects} id={'projects'}>
            <h2>what i have accomplished</h2>
            <div className={Styles.listContainer} >
                <ProjectList projects={reactProjects} />
                <ProjectList projects={mpProjects} />
                <ProjectList projects={basicsProjects} />
            </div>
        </div>
    )
}

export default Projects
