import {createContext, React,useContext, useEffect, useRef, useState} from 'react'
import './App.scss'
import NavBar from './components/NavBar'
import Project from './components/Project'
import Skill from './components/Skill'
import Education from './components/Education'
import Footer from './components/Footer'
export const Scroll = createContext()
function App() {
  const [value,setValue] = useState(1)
  useEffect(
    scroll
  ,[value])
  function scroll (){
    const app = document.getElementsByClassName('components')  
    if(value==1)
      app[0].scrollIntoView({ block: 'start' });
    else if(value==2)
      app[1].scrollIntoView({ block: 'start' });
    else if(value==3)
      app[2].scrollIntoView({ block: 'start' });
    else if(value==4)
      app[3].scrollIntoView({ block: 'start' });
    else
      app[4].scrollIntoView({ block: 'start' });
  }
  return (
    <Scroll.Provider value={{ setValue }}>
      <div className='App'>
        <NavBar />
        <Project />
        <Skill />
        <Education />
        <Footer />
      </div>
    </Scroll.Provider>
  )
}

export default App

