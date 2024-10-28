import React, { createContext, useEffect, useRef, useState } from 'react'
import './HomePage.scss'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Project from './components/Project'
import Skill from './components/Skill'
import Education from './components/Education'
import Footer from './components/Footer'

export const Scroll = createContext()

function HomePage() {
  const [value, setValue] = useState(0)
  let timeoutId = null
  
  useEffect(() => {
    const homePage = document.getElementsByClassName('scroll')
    homePage[value].scrollIntoView({ block: 'start' })
    timeoutId = setTimeout(() => {
      console.log(' working timeout.... ')
      setValue(prevValue => (prevValue >= 4 ? 0 : prevValue + 1))
    }, 2000)
    return () => { console.log(' working clearUp.... '); clearTimeout(timeoutId) }
  }, [value])

const handleTimeOut = ()=>{
  if(timeoutId !== null){
    clearTimeout(timeoutId)
  }
  timeoutId = setTimeout(() => {
        console.log(' working timeout.... ')
        setValue(prevValue => (prevValue >= 4 ? 0 : prevValue + 1))
      }, 4000)
}
  return (
    <div className='HomePage' onClick={handleTimeOut}>
      <Scroll.Provider value={{ setValue }}>
        <NavBar />
        <Home />
        <Project />
        <Skill />
        <Education />
        <Footer />
      </Scroll.Provider>
    </div>
  )
}

export default HomePage

