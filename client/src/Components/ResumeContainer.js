import React, {useState, useEffect} from 'react'
import ResumeCard from './ResumeCard'
import {useLocation, Link } from 'react-router-dom'
import Button from '@mui/material/Button';


function ResumeContainer({user}) {
    const [resumeData, setResumeData] = useState([])
    const [search, setSearch] = useState(resumeData)
    const [DOMUpdater, setDOMUpdater] = useState(0)
    const location = useLocation()
    
    useEffect(() => {
        if (location.pathname.includes("resumes")) {
        fetch(`${location.pathname}`)
            .then(res => res.json())
            .then(data => setResumeData(data))
        }
    }, [location.pathname, DOMUpdater])

     function handleDeleteResume(deletedResume) {
    setResumeData((resumes) =>
      resumes.filter((resume) => resume.id !== deletedResume.id)
    );
  }
    useEffect(() => {
        setSearch(resumeData)
    }, [resumeData])

  function handleFilterSearch (e) {
    const filtered = resumeData.filter((resume) => {
       return resume.name.toLowerCase().includes(e.target.value)
    })
    setSearch(filtered)
  }
    return (
        <>
        <div id='testing'>
        <Link className='link' to="/resumes/create-resume"><Button id='add-project-btn'>Add Resume</Button></Link>
        <input onChange={handleFilterSearch} type="text" id='search-bar' placeholder='Search...' />
       
        <Link className='link' to='/projects'><Button id='resume-btn'>Projects</Button></Link>
        </div>
        <div id='resume-container'>
            <div>
                {search.map((resume) => {
                return (
                    <ResumeCard handleDeleteResume={handleDeleteResume} user={user} resume={resume}/>
                )
            })}
            </div>
        </div>
        </>
    )
}

export default ResumeContainer
