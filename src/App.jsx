import React, { Suspense, useEffect, useRef } from 'react'
import './App.scss'
import Loading from './components/Loading'

const HomePage = React.lazy(() => import('./HomePage'))

function App() {
 var mouse = { x: 0, y: 0 }
 var previousMouse = { x: 0, y: 0 }
 var circle = { x: 0, y: 0 }
 var currentScale = 0
 var currentAngle = 0
 const circleElement = useRef(null)
 const speed = 0.17

 const handleMouseMove = (e) => {
   mouse.x = e.x
   mouse.y = e.y
 }

 useEffect(() => {
   window.addEventListener('mousemove', handleMouseMove)

   const tick = () => {
     circle.x += (mouse.x - circle.x) * speed
     circle.y += (mouse.y - circle.y) * speed
     const translateTransform = `translate(${circle.x}px, ${circle.y}px)`

     const deltaMouseX = mouse.x - previousMouse.x
     const deltaMouseY = mouse.y - previousMouse.y
     previousMouse.x = mouse.x
     previousMouse.y = mouse.y
     const mouseVelocity = Math.min(Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 4) * 100, 150)
     const scaleValue = (mouseVelocity / 150) * 0.5
     currentScale += (scaleValue - currentScale) * speed
     const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`

     const angle = Math.atan2(deltaMouseY, deltaMouseX) * 180 / Math.PI
     if (mouseVelocity > 20) 
       currentAngle = angle
     const rotateTransform = `rotate(${currentAngle}deg)`

     if (circleElement.current)
       circleElement.current.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`

     window.requestAnimationFrame(tick)
   }
   tick()
   return () => {
     window.removeEventListener('mousemove', handleMouseMove)
   }
 },[])
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

