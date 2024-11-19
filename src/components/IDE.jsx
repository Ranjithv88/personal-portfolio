import React, { useState} from 'react';
import './style/Skills.scss';
import { STAnimation, ide } from './Details.jsx';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRegWindowClose } from "react-icons/fa";

function IDE() {
    const [selectedKey01, setSelectedKey01] = useState(null)
    const selectedSkill01 = ide.find(ide => ide.key === selectedKey01)
    return(
    <main className='Skills'>
        {/* ------ IDE and Tools I Use ------ */}
        <motion.h1 className='SkillTitle' variants={STAnimation} initial='hidden' whileInView='visible' transition={{ duration: 2 }} viewport={{ amount: 0.8 }} >IDE and Tools I Use</motion.h1>
        <div className='SkillInner'>
          {ide.map(ide => (
            <motion.div className='Skill' initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 2 } }} viewport={{ amount: 0 }} key={ide.key} layoutId={ide.key} onClick={() => setSelectedKey01(ide.key)}>
              <motion.img src={ide.image} alt='Logo' /> 
              <motion.h1>{ide.name}</motion.h1>
              <motion.p>{ide.description}</motion.p>
            </motion.div>
          ))}
          <AnimatePresence>
            {selectedSkill01 && (
              <motion.div key={selectedSkill01.key} layoutId={selectedKey01} className="SelectedSkill">
                <motion.div className='SelectedSkill01'><motion.img src={selectedSkill01.image} alt='Logo' /><motion.div/></motion.div>
                <motion.div className='SelectedSkill02'>
                  <motion.h1>{selectedSkill01.name}</motion.h1>
                  <motion.p>{selectedSkill01.description}</motion.p>
                </motion.div>  
                <motion.div className='SelectedSkill03'>  
                  <motion.button onClick={() => setSelectedKey01(null)} ><FaRegWindowClose /></motion.button>
                </motion.div>  
              </motion.div>
            )}
          </AnimatePresence>
        </div>
    </main>
    )
}

export default IDE

