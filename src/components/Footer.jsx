import React from 'react'
import './style/Footer.scss'
import { FaLocationDot } from "react-icons/fa6"
import { FaGithub,FaLinkedin,FaCodepen } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri"
import { MdMailOutline } from "react-icons/md"

function Footer() {
  return (
    <footer className='scroll'> 
      <div className='Empty'></div>
      <h1 className='FTitle'>About</h1>
        <div className='FContent'>
          <div className='FOne'>
          <p>&nbsp;&nbsp;&nbsp;A personal portfolio is a website or document that showcases an individual's skills, experiences, projects, and achievements. It serves as a digital resume that goes beyond listing qualifications, allowing you to present a more detailed and interactive view of your work.</p>
          <h4><span><FaLocationDot /></span>Location</h4>
          <h5>CoimBatore,Tamil Nadu,India</h5>
          </div>
          <div className='FTwo'>
            <h1>CONTACT US</h1>
            <div className='FIcon'>
              <a target='_blank' href="Ranjithkumar22445588@gmail.com"><MdMailOutline /></a>
              <a target='_blank' href="https://github.com/Ranjithv88"><FaGithub /></a>
              <a target='_blank' href="https://www.linkedin.com/in/ranjith-kumar-9838a5274/"><FaLinkedin /></a>
              <a target='_blank' href="https://www.instagram.com/ranjith_kumar__v/"><RiInstagramFill /></a>
              <a target='_blank' href="https://codepen.io/ranjith-kumar-the-sasster"><FaCodepen /></a>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer

