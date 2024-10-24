import React from 'react'
import './style/Skills.scss'
import { Skills } from './Details.jsx'

function Skill() {
  return (
    <main className='Skills components'>
      <h1 className='SkillTitle'>I Code in</h1>
        <div className='SkillInner'>
        {Skills.map((skill, key) => (
            <div key={key} >
              <img src={skill.image} alt="Logo"  /> 
              <h1>{skill.name}</h1>
              <p>{skill.description}</p>
            </div>
        ))}
        </div>
    </main>
  )
}

export default Skill

