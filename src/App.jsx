import { React, createContext, useEffect, useState } from 'react'
import './App.scss'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Project from './components/Project'
import Skill from './components/Skill'
import Education from './components/Education'
import Footer from './components/Footer'

export const Scroll = createContext()

function App() {
  const [value,setValue] = useState(0)
  useEffect(
    scroll
  ,[value])
  function scroll (){
    const app = document.getElementsByClassName('scroll')  
    if(value==0)
      app[0].scrollIntoView({ block: 'start' });
    else if(value==1)
      app[1].scrollIntoView({ block: 'start' });
    else if(value==2)
      app[2].scrollIntoView({ block: 'start' });
    else if(value==3)
      app[3].scrollIntoView({ block: 'start' });
    else
      app[4].scrollIntoView({ block: 'start' });
  }
  return (
    <Scroll.Provider value={{ setValue }}>
      <div className='App'>
        <NavBar />
        <Home />
        <Project />
        <Skill />
        <Education />
        <Footer />
      </div>
    </Scroll.Provider>
  )
}

export default App

