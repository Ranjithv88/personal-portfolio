import { React,useContext } from 'react'
import './style/NavBar.scss'
import { Scroll } from '../App'

function NavBar() {
    const scrollContext = useContext(Scroll)
  return (
    <header>
        <nav>
            <div className='name'>
                <h1>RANJITH KUMAR</h1>
            </div>
            <div className='menu'>
                <ul className='menuList'>
                    <li onClick={() => scrollContext.setValue(0)}>Home</li>
                    <li onClick={() => scrollContext.setValue(1)}>Project</li>
                    <li onClick={() => scrollContext.setValue(2)}>Skills</li>
                    <li onClick={() => scrollContext.setValue(3)}>Education</li>
                    <li onClick={() => scrollContext.setValue(4)}>About</li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default NavBar

