import React, { Suspense, useEffect, useRef } from 'react'
import './App.scss'
import Loading from './components/Loading'

const HomePage = React.lazy(() => import('./HomePage'))

function App() {
  const mouse = { x: 0, y: 0 }
  const circle = { x: 0, y: 0 }
  const speed = 0.17
  const circleElement = useRef()
  const handleMouseMove = (e) => {
    mouse.x = e.clientX
    mouse.y = e.clientY
  }
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    const tick = () => {
      if (circleElement.current) { 
        circle.x += (mouse.x - circle.x) * speed
        circle.y += (mouse.y - circle.y) * speed
        circleElement.current.style.transform = `translate(${circle.x}px, ${circle.y}px)`
      }
      window.requestAnimationFrame(tick)
    }
    tick()
    return () => {
        window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
 return(
  <div className='App'>
    <div className="circle" ref={circleElement}></div>
    <Suspense fallback={<Loading />}>
      <HomePage />
    </Suspense>
  </div>
 )
}

export default App

