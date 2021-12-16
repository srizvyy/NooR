import React from 'react'

function ProjectCard({project}) {
    console.log(project)
    return (
        <div>
           <h3 className='card-title'>{project.title}</h3> 
           <img src={project.image} alt="" />
           <h6>{project.description}</h6>
           <h6>{project.language}</h6>
        </div>
    )
}

export default ProjectCard
