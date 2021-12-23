import React from 'react'
import ProjectCard from './ProjectCard'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

function ProjectContainer({projectsData, handleDeleteProject, user}) {
    

    
    return (
        <>
        <Link className='link' to="/projects/create-form"><Button>Create Project</Button></Link>
        <div id='project-container'>
            <div>{projectsData.map((project) => {
                return (
                    <ProjectCard key={project.id} project={project} handleDeleteProject={handleDeleteProject} user={user}/>
                )
            })}</div>
        </div>
        </>
    )
}

export default ProjectContainer
