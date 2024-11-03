import React from 'react'
import './style/Education.scss'
import { Course, STAnimation } from './Details.jsx'
import { motion } from 'framer-motion'

function Education() {
  return (
    <main className='Education scroll' >
      <div className='Empty'></div>
        <motion.h1 className='EducationTitle' variants={STAnimation} initial={{opacity: 0}} whileInView='visible' transition={{ duration: 3 }} viewport={{ amount: 0.8 }} >EDUCATION</motion.h1> 
        {Course.map((course, key)=>(
          <motion.div className='EducationDetails'
          initial={{ scale: 0.5 }} whileInView={{ scale: 1, transition: { duration: 3 } }} viewport={{ amount: 0.8 }} 
          key={key} >
            <h1>{course.courseName}</h1>
            <h2>{course.instituteName}</h2>
            <p>&nbsp;&nbsp;&nbsp;{course.description}</p>
          </motion.div>
        ))}
    </main>
  )
}

export default Education

