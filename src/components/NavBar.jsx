import { React, useContext } from 'react'
import './style/NavBar.scss'
import { Scroll } from '../HomePage'

function NavBar() {
    const scrollContext = useContext(Scroll)
  return (
    <header>
        <nav>
            <div className='name'>
                <h1>RANJITH KUMAR</h1>
            </div>
            <div className='menu'>
                <ul className='menuList' >
                    <li onClick={() => {scrollContext.setValue(0);scrollContext.setCon(90000)}}>Home</li>
                    <li onClick={() => {scrollContext.setValue(1);scrollContext.setCon(90000)}}>Project</li>
                    <li onClick={() => {scrollContext.setValue(2);scrollContext.setCon(90000)}}>Skills</li>
                    <li onClick={() => {scrollContext.setValue(3);scrollContext.setCon(90000)}}>Education</li>
                    <li onClick={() => {scrollContext.setValue(4);scrollContext.setCon(90000)}}>About</li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default NavBar

