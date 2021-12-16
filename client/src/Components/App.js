import './App.css';
import TopNav from './TopNav';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import ProjectContainer from './ProjectContainer';
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';

function App() {
  const [projectsData, setProjectsData] = useState([])

  useEffect(() => {
    fetch('/projects')
    .then(res => res.json())
    .then(project => setProjectsData(project))
  }, [])

  return (
    <>
      <TopNav/>
      <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path='login' element={<Login/>}></Route>
      <Route exact path='signup' element={<Signup/>}></Route>
      <Route exact path='projects' element={<ProjectContainer projectsData={projectsData}/>}></Route>
      </Routes>
    </>
  );
}

export default App;
