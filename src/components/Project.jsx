import React from 'react'
import './style/Project.scss'
import { Projects, STAnimation } from './Details'
import { VscGithub } from "react-icons/vsc"
import { GoLinkExternal } from "react-icons/go"
import { motion } from 'framer-motion'

function Project() {
  return (
    <main className='Project scroll'>
      <div className='Empty'></div>
      <motion.h1 className='ProjectTitle' variants={STAnimation} initial='hidden' whileInView='visible' transition={{ duration: 2 }} viewport={{ amount: 0.8 }} >Project I Created</motion.h1>
      <div className='ProjectOuter'>
        {Projects.map((projects,key)=>(
          <motion.div className='ProjectMap' 
          initial={{ x: -100 }} whileInView={{ x: 0, transition: { duration: 2 } }} viewport={{ amount: 0 }} 
          key={key}>
            <div className='ProjectPreview' style={{  backgroundImage: `linear-gradient(rgba( 0, 0, 0, 0.2), rgba( 0, 0, 0, 0.2)), url(${projects.image})` }}>
                <h1>{projects.name}</h1>
            </div>
            <div className='ProjectDetails'>
              <p>{projects.description}</p>
              <span><a target='_blank' href={projects.githubRepository}><VscGithub/></a></span>
              <span className='ProjectLive' ><a target='_blank' href={projects.live}><GoLinkExternal/></a></span>
            </div>
          </motion.div>
        ))}
        </div>
    </main>
  )
}

export default Project

