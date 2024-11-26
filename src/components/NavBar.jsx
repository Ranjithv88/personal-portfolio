import { React, useContext, useState } from 'react'
import './style/NavBar.scss'
import { Scroll } from '../HomePage'
import { motion } from 'framer-motion'
import { FaSun } from "react-icons/fa6"
import { MdNightlight } from "react-icons/md"

function NavBar() {
    const scrollContext = useContext(Scroll)
    const [themeColorConditional,setThemeColorConditional] = useState(true)
    const theme = () =>{
        if(themeColorConditional){
            setThemeColorConditional(false)
            document.documentElement.style.setProperty('--BG_COLOR', 'rgba(255, 255, 255, 1)')
            document.documentElement.style.setProperty('--text_COLOR', 'rgba(26, 27, 32, 1)')
        } else {
            setThemeColorConditional(true)
            document.documentElement.style.setProperty('--BG_COLOR', 'rgba(26, 27, 32, 1)')
            document.documentElement.style.setProperty('--text_COLOR', 'rgba(255, 255, 255, 1)')
        }
    }
  return (
    <header>
        <nav>
            <div className='name'>
                <motion.h1  initial={{y: -10}} whileInView={{y: 0}} transition={{ duration: 1 }} viewport={{ amount: 0 }} >RANJITH KUMAR</motion.h1>
            </div>
            <div className='menu'>
                <motion.ul className='menuList' initial={{y: -10}} whileInView={{y: 0}} transition={{ duration: 1 }} viewport={{ amount: 0 }} >
                    <li onClick={theme}>{themeColorConditional?<FaSun/>:<MdNightlight/>}</li>
                    <li onClick={() => {scrollContext.setValue(0);scrollContext.setCon(90000)}}>Home</li>
                    <li onClick={() => {scrollContext.setValue(1);scrollContext.setCon(90000)}}>Project</li>
                    <li onClick={() => {scrollContext.setValue(2);scrollContext.setCon(90000)}}>Skills</li>
                    <li onClick={() => {scrollContext.setValue(3);scrollContext.setCon(90000)}}>Education</li>
                    <li onClick={() => {scrollContext.setValue(4);scrollContext.setCon(90000)}}>About</li>
                </motion.ul>
            </div>
        </nav>
    </header>
  )
}

export default NavBar

