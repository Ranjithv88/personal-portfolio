import React, { useEffect, useState, useRef } from 'react';
import './style/Skills.scss';
import { Skills, STAnimation } from './Details.jsx';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRegWindowClose } from "react-icons/fa";

function Skill() {
  const [selectedKey, setSelectedKey] = useState(null)
  const selectedSkill = Skills.find(skill => skill.key === selectedKey)
  const ref = useRef()
  const [fixRender, setFixRender] = useState(true)
  useEffect(()=>{
    if(!fixRender)
      ref.current.scrollIntoView({ block: 'start' })
    else
      setFixRender(false)
  },[selectedKey])
  return (
    <main ref={ref} className='Skills scroll'>
      <div className='Empty'></div>
      <motion.h1 className='SkillTitle' variants={STAnimation} initial='hidden' whileInView='visible' transition={{ duration: 2 }} viewport={{ amount: 0.8 }} >I Code in</motion.h1>
      <div className='SkillInner'>
        {Skills.map(skill => (
          <motion.div className='Skill' initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 2 } }} viewport={{ amount: 0 }} key={skill.key} layoutId={skill.key} onClick={() => setSelectedKey(skill.key)}>
            <motion.img src={skill.image} alt='Logo' /> 
            <motion.h1>{skill.name}</motion.h1>
            <motion.p>{skill.description}</motion.p>
          </motion.div>
        ))}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div key={selectedSkill.key} layoutId={selectedKey} className="SelectedSkill">
              <motion.div className='SelectedSkill01'><motion.img src={selectedSkill.image} alt='Logo' /><motion.div/></motion.div>
              <motion.div className='SelectedSkill02'>
                <motion.h1>{selectedSkill.name}</motion.h1>
                <motion.p>{selectedSkill.description}</motion.p>
              </motion.div>  
              <motion.div className='SelectedSkill03'>  
                <motion.button onClick={() => setSelectedKey(null)} ><FaRegWindowClose /></motion.button>
              </motion.div>  
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

export default Skill;

