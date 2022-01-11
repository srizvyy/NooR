import './App.css';
import TopNav from './TopNav';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import ProjectContainer from './ProjectContainer';
import CreateNewForm from './CreateNewForm';
import CreateNewResume from './CreateNewResume';
import SingleCardInfo from './SingleCardInfo';
import ResumeContainer from './ResumeContainer';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';

function App() {
  const [projectsData, setProjectsData] = useState([])
  const [reviewsData, setReviewsData] = useState([])
  const [filterSearch, setFilterSearch] = useState(projectsData)
  const [user, setUser] = useState('')
  const location = useLocation()
  const [DOMUpdater, setDOMUpdater] = useState(0)

   useEffect(() => {
    if (location.pathname.includes("projects")) {
      fetch(`${location.pathname}`)
        .then(res => res.json())
        .then(data => setProjectsData(data))
        // .then(console.log("new fetch "))
    }
  }, [location.pathname, DOMUpdater])

  useEffect(() => {
    fetch('/reviews')
    .then(res => res.json())
    .then(data => setReviewsData(data))
  }, [])

  useEffect(() => {
    fetch("/me")
      .then(r => r.json())
      .then(data => setUser(data))

  }, [])

  const navigate = useNavigate()

  function handleLogout () {
    fetch('/logout', {
      method: 'DELETE'
    })
    .then(res => {
      if (res.ok) {
        setUser({
          email: '',
          password: ''
        })
        navigate('/')
      }
    })
  }

useEffect(() => {
setFilterSearch(projectsData)
},[projectsData])

const handleSearch = (e) => {
  const filtered = projectsData.filter((project) => {
    return project.title.toLowerCase().includes(e.target.value)
  })
  setFilterSearch(filtered)
}

  function handleNewCard (addCard) {
    setProjectsData((project) => [...project, addCard])
  }
  
  function handleNewComment (addComment) {
    setReviewsData((comment) => [...comment, addComment])
  }
  
  
  function handleDeleteProject(deletedProject) {
    setProjectsData((projects) =>
      projects.filter((project) => project.id !== deletedProject.id)
    );
  }

  function handleDeleteComment(deletedComment) {
    setReviewsData((comments) => comments.filter((comment)  => comment.id !== deletedComment))
  }

  return (
    <>
      <TopNav user={user} setUser={setUser} handleLogout={handleLogout}/>
      <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path='login' element={<Login setUser={setUser}/>}></Route>
      <Route exact path='signup' element={<Signup setUser={setUser}/>}></Route>
      <Route exact path='/projects' element={<ProjectContainer handleSearch={handleSearch} reviewsData={reviewsData} user={user} handleDeleteProject={handleDeleteProject} projectsData={filterSearch}/>}></Route>
      <Route exact path="projects/create-form" element={<CreateNewForm project={filterSearch} handleNewCard={handleNewCard} user={user}/>}></Route>
      <Route exact path={"/projects/:id"} element={<SingleCardInfo handleDeleteComment={handleDeleteComment} handleNewComment={handleNewComment} setUser={setUser} setDOMUpdater={setDOMUpdater} reviewsData={reviewsData} project={projectsData} user={user}/>}></Route>
      <Route exact path={'/resumes'} element={<ResumeContainer user={user} />}></Route>
      <Route exact path='resumes/create-resume' element={<CreateNewResume user={user} />}></Route>
      </Routes>
    </>
  );
}

export default App;
