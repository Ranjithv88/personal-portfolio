import React from 'react'
import './style/Home.scss'
import TypingText from './TypingText'
import { IoIosArrowUp,IoIosArrowDown } from "react-icons/io"
import { FaGithub,FaLinkedin,FaCodepen } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri"
import { MdMailOutline } from "react-icons/md"
import { motion } from 'framer-motion'
import { STAnimation } from './Details.jsx'

function Home() {
  const redirect = () => {
    window.open('https://drive.google.com/file/d/11zZM1q5smV6EZCIHSYHEYxLjOx2tBwSu/view?usp=sharing', '_blank')
  }
  return (
    <header className="home scroll">
        <div className="intro">
          <motion.div className='HContact' initial={{x: -15}} whileInView={{x: 0}} transition={{ duration: 2 }} viewport={{ amount: 0, once: true }} >
            <IoIosArrowUp />
            <div></div>
            <a target='_blank' href="mailto:Ranjithkumar22445588@gmail.com"><MdMailOutline /></a>
              <a target='_blank' href="https://github.com/Ranjithv88"><FaGithub /></a>
              <a target='_blank' href="https://www.linkedin.com/in/ranjith-kumar-9838a5274/"><FaLinkedin /></a>
              <a target='_blank' href="https://www.instagram.com/ranjith_kumar__v/"><RiInstagramFill /></a>
              <a target='_blank' href="https://codepen.io/ranjith-kumar-the-sasster"><FaCodepen /></a>
            <div></div>
            <IoIosArrowDown />
            <main></main>
          </motion.div>
            <motion.div className="profile" variants={STAnimation} initial='hidden' whileInView='visible' transition={{ duration: 2 }} viewport={{ amount: 0 }} >
              <h1 className='java'>{`public class`}<span>{` PortFolio`}</span><span className='color01'>{` {`}</span></h1>
              <h1 className='java main'>{`public static void`}<span className='color'>{` main`}</span><span>{`(String[] args)`}</span><span className='color01'>{` {`}</span></h1>
              <div className='HContent'>
                <h1>|<TypingText text={"My Name is Ranjith Kumar"}/>|</h1>
                <h1>|<TypingText text={"I Am a java Full Stuck Developer"}/>|</h1>
                <p>A passionate Java developer with experience in building dynamic web applications using React.js and Spring Boot. Proficient in Java, JavaScript, and front-end technologies. Recently worked on projects such as an "Image-Based Plant Disease Detection" using CNN and OpenCV, and a "Dynamic Furniture E-commerce Website" with React.js.</p>
                <button type='button' onClick={redirect}>RESUME</button>
              </div>
              <h1 className='java main'><span className='color01'>{` }`}</span></h1>
              <h1 className='java'><span className='color01'>{` }`}</span></h1>
            </motion.div>
        </div>
    </header>
  )
}

export default Home

