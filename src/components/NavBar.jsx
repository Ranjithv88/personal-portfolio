import { React, useContext, useState, useEffect } from 'react'
import './style/NavBar.scss'
import { Scroll } from '../HomePage'
import { motion } from 'framer-motion'
import { FaSun } from "react-icons/fa6"
import { IoLeaf } from "react-icons/io5"
import { FaCloud } from "react-icons/fa"
import { GiRose } from "react-icons/gi"
import { MdNightlight } from "react-icons/md"

function NavBar() {
    const scrollContext = useContext(Scroll)
    const [themeColorConditional,setThemeColorConditional] = useState(<FaSun/>)
    const [number, setNumber] = useState(1);
    var bg ;
    var  text;
    useEffect(()=>{
        theme()
    },[number])
    const theme = () =>{
        if(number === 1){
            bg = 'rgba(255, 255, 255, 1)'
            text = 'rgba(26, 27, 32, 1)'
            setThemeColorConditional(<FaSun/>)
        } else if(number === 2){
            bg = 'rgba(248, 233, 214, 1)'
            text = 'rgba(20, 115, 95, 1)'
            setThemeColorConditional(<IoLeaf/>)
        }else if(number === 3){
            bg = 'rgba(255, 255, 255, 1)'
            text = 'rgba(138, 170, 229, 1)'
            setThemeColorConditional(<FaCloud/>)
        }else if(number === 4){
            bg = 'rgba(241, 211, 211, 1)'
            text = 'rgb(223, 47, 50)'
            setThemeColorConditional(<GiRose/>)
        }else {
            bg = 'rgba(26, 27, 32, 1)'
            text = 'rgba(255, 255, 255, 1)'
            setThemeColorConditional(<MdNightlight/>)
        }
        document.documentElement.style.setProperty('--BG_COLOR', bg)
        document.documentElement.style.setProperty('--text_COLOR', text)
    }

  return (
    <header>
        <nav>
            <div className='name'>
                <motion.h1  initial={{y: -10}} whileInView={{y: 0}} transition={{ duration: 1 }} viewport={{ amount: 0 }} >RANJITH KUMAR</motion.h1>
            </div>
            <div className='menu'>
                <motion.ul className='menuList' initial={{y: -10}} whileInView={{y: 0}} transition={{ duration: 1 }} viewport={{ amount: 0 }} >
                    <li  onClick={() => setNumber(prevValue => prevValue < 5 ? prevValue + 1 : 1)}>{themeColorConditional}</li>
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

