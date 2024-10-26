import React, { createContext, useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Project from './components/Project'
import Skill from './components/Skill'
import Education from './components/Education'
import Footer from './components/Footer'
import { BiSleepy } from 'react-icons/bi'
import { div } from 'framer-motion/client'

export const Scroll = createContext()

function HomePage() {
  const [value,setValue] = useState(0)
  // const HomeDiv = document.getElementsByClassName("HomePage")
  let timeoutId
  useEffect(() => {
    const homePage = document.getElementsByClassName('scroll')
    homePage[value].scrollIntoView({ block: 'start' })
    timeoutId = setTimeout(() => {
      console.log(' working timeout.... ')
      setValue(prevValue => (prevValue >= 4 ? 0 : prevValue + 1))
    }, 30000)
    return () => { console.log(' working clearUp.... ');clearTimeout(timeoutId) }
  }, [value])
  // const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))
  // HomeDiv[0].EventListener("mousemove",simple())
  // async function simple(){
  //   console.log(' working sleep.... ')
  //   clearTimeout(timeoutId)
  //   await sleep(30000)
  // }
  return (
    <div className='HomePage'>
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

