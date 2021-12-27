import './App.css';
import TopNav from './TopNav';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import ProjectContainer from './ProjectContainer';
import CreateNewForm from './CreateNewForm';
import SingleCardInfo from './SingleCardInfo';
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';

function App() {
  const [projectsData, setProjectsData] = useState([])
  const [reviewsData, setReviewsData] = useState([])
  const [user, setUser] = useState('')
  
  useEffect(() => {
    fetch('/projects')
    .then(res => res.json())
    .then(project => setProjectsData(project))
  }, [])

  useEffect(() => {
    fetch('/reviews')
    .then(res => res.json())
    .then(review => setReviewsData(review))
  }, [])

  useEffect(() => {
    fetch("/me")
      .then(r => r.json())
      .then(data => setUser(data))

  }, [])

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
      }
    })
  }

  function handleNewCard (addCard) {
    setProjectsData((project) => [...project, addCard])
  }

    function handleDeleteProject(deletedProject) {
    setProjectsData((projects) =>
      projects.filter((project) => project.id !== deletedProject.id)
    );
  }


  return (
    <>
      <TopNav user={user} setUser={setUser} handleLogout={handleLogout}/>
      <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path='login' element={<Login setUser={setUser}/>}></Route>
      <Route exact path='signup' element={<Signup setUser={setUser}/>}></Route>
      <Route exact path='projects' element={<ProjectContainer reviewsData={reviewsData} user={user} handleDeleteProject={handleDeleteProject} projectsData={projectsData}/>}></Route>
      <Route exact path="projects/create-form" element={<CreateNewForm handleNewCard={handleNewCard} user={user}/>}></Route>
      <Route exact path={"/projects/:id"} element={<SingleCardInfo  user={user}/>}></Route>
      </Routes>
    </>
  );
}

export default App;
