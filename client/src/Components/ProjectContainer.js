import React from 'react'
import ProjectCard from './ProjectCard'

function ProjectContainer({projectsData}) {
    // console.log(projectsData)
    return (
        <div>
            <div>{projectsData.map((project) => {
                return (
                    <ProjectCard key={project.id} project={project}/>
                )
            })}</div>
        </div>
    )
}

export default ProjectContainer
