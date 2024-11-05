import { React, useContext } from 'react'
import './style/NavBar.scss'
import { Scroll } from '../HomePage'
import { motion } from 'framer-motion'

function NavBar() {
    const scrollContext = useContext(Scroll)
  return (
    <header>
        <nav>
            <div className='name'>
                <motion.h1  initial={{y: -25}} whileInView={{y: 0}} transition={{ duration: 1 }} viewport={{ amount: 0 }} >RANJITH KUMAR</motion.h1>
            </div>
            <div className='menu'>
                <motion.ul className='menuList' initial={{y: -20}} whileInView={{y: 0}} transition={{ duration: 2 }} viewport={{ amount: 0 }} >
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

