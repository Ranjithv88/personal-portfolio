import React from 'react'
import './style/Project.scss'
import { Projects } from './Details'
import { VscGithub } from "react-icons/vsc"
import { GoLinkExternal } from "react-icons/go"

function Project() {
  return (
    <main className='Project scroll'>
      <div className='Empty'></div>
      <h1 className='ProjectTitle'>Project I Created</h1>
      <div className='ProjectOuter'>
        {Projects.map((projects,key)=>(
          <div className='ProjectMap' key={key}>
            <div className='ProjectPreview' style={{  backgroundImage: `linear-gradient(rgba( 0, 0, 0, 0.2), rgba( 0, 0, 0, 0.2)), url(${projects.image})` }}>
                <h1>{projects.name}</h1>
            </div>
            <div className='ProjectDetails'>
              <p>{projects.description}</p>
              <a target='_blank' href={projects.githubRepository}><VscGithub/></a>
              <a className='ProjectLive' target='_blank' href={projects.live}><GoLinkExternal/></a>
            </div>
          </div>
        ))}
        </div>
    </main>
  )
}

export default Project

