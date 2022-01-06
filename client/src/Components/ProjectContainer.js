import React from 'react'
import ProjectCard from './ProjectCard'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';


function ProjectContainer({projectsData, handleDeleteProject, user, reviewsData, setDOMUpdater, handleSearch}) {

    if (projectsData.length == undefined) return <p className='loading'> Loading Please Wait</p>
    return (
        <>
        <Link className='link' to="/projects/create-form"><Button id='add-project-btn'>Add Project</Button></Link>
        <input type="text" id='search-bar' placeholder='Search...' onChange={handleSearch}/>
        <Link className='link' to='/resumes'><Button id='resume-btn'>Resumes</Button></Link>
        <div id='project-container'>
            <div>{projectsData.map((project) => {
                return (
                    <ProjectCard key={project.id} setDOMUpdater={setDOMUpdater} project={project} handleDeleteProject={handleDeleteProject} user={user} reviewsData={reviewsData}/>
                )
            })}</div>
        </div>
        </>
    )
}

export default ProjectContainer
