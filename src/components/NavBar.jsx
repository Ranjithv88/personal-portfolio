import {React,useContext} from 'react'
import './style/NavBar.scss'
import { Scroll } from '../App';

function NavBar() {
    const scrollContext = useContext(Scroll)
  return (
    <header className='components'>
        <nav>
            <div className='name'>
                <h1>RANJITH KUMAR</h1>
            </div>
            <div className='menu'>
                <ul className='menuList'>
                    <li onClick={() => scrollContext.setValue(1)}>Home</li>
                    <li onClick={() => scrollContext.setValue(2)}>Project</li>
                    <li onClick={() => scrollContext.setValue(3)}>Skills</li>
                    <li onClick={() => scrollContext.setValue(4)}>Education</li>
                    <li onClick={() => scrollContext.setValue(5)}>About</li>
                </ul>
            </div>
        </nav>
        <div className="intro">
            <div className="profile">
                <h1>My Name is Ranjith Kumar</h1>
                <h1>I Am a java Full Stuck Devoleper</h1>
                <p>A passionate Java developer with experience in building dynamic web applications using React.js and Spring Boot. Proficient in Java, JavaScript, and front-end technologies. Recently worked on projects such as an "Image-Based Plant Disease Detection" using CNN and OpenCV, and a "Dynamic Furniture E-commerce Website" with React.js.</p>
                <button type='button'>RESUME</button>
            </div>
        </div>
    </header>
  )
}

export default NavBar

