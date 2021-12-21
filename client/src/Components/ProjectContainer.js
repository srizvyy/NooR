import React from 'react'
import ProjectCard from './ProjectCard'
import Button from '@mui/material/Button';

function ProjectContainer({projectsData}) {
    
    return (
        <>
        <Button>Create Project</Button>
        <div id='project-container'>
            <div>{projectsData.map((project) => {
                return (
                    <ProjectCard key={project.id} project={project}/>
                )
            })}</div>
        </div>
        </>
    )
}

export default ProjectContainer
