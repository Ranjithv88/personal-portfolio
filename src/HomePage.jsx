import React, { createContext, useEffect, useState } from 'react'
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
  const [con, setCon] = useState(20000)
  let timeoutId = null
  useEffect(() => {
    const homePage = document.getElementsByClassName('scroll')
    homePage[value].scrollIntoView({ block: 'start' })
      timeoutId = setTimeout(() => {
        if(con === 20000)
          setValue(prevValue => (prevValue >= 4 ? 0 : prevValue + 1))
        else
          setValue(prevValue => (prevValue >= 4 ? 0 : prevValue + 1))
      }, con)
      return () => { clearTimeout(timeoutId); setCon(20000) }
  }, [value])
  const handleTimeOut = () => {
    if(timeoutId !== null)
      clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      setValue(prevValue => (prevValue >= 4 ? 0 : prevValue + 1))
    }, 90000)
  }
  return (
    <Scroll.Provider value={{ setValue, setCon }}>
    <div className='HomePage' onClick={ handleTimeOut }>
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

export default HomePage

