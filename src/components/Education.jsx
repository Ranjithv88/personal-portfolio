import React from 'react'
import './style/Education.scss'
import { Course } from './Details.jsx'

function Education() {
  return (
    <main className='Education scroll'>
      <div className='Empty'></div>
        <h1 className='EducationTitle'>EDUCATION</h1>
        {Course.map((course, key)=>(
          <div className='EducationDetails' key={key}>
            <h1>{course.courseName}</h1>
            <h2>{course.instituteName}</h2>
            <p>&nbsp;&nbsp;&nbsp;{course.description}</p>
          </div>
        ))}
    </main>
  )
}

export default Education

