import React, { useEffect, useState, useRef } from 'react';
import './style/Skills.scss';
import { Skills, STAnimation, ide } from './Details.jsx';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRegWindowClose } from "react-icons/fa";

function Skill() {
  const [selectedKey, setSelectedKey] = useState(null);
  const selectedSkill = Skills.find(skill => skill.key === selectedKey) || ide.find(ide => ide.key === selectedKey);
  const ref = useRef();
  const [fixRender, setFixRender] = useState(true);

  useEffect(() => {
    if (!fixRender) {
      ref.current.scrollIntoView({ block: 'start' });
    } else {
      setFixRender(false);
    }
  }, [selectedKey]);

  return (
    <main ref={ref} className='Skills scroll'>
      <div className='Empty'></div>
     {/* ------ I Code in ------ */}
      <motion.h1 className='SkillTitle' variants={STAnimation} initial='hidden' whileInView='visible' transition={{ duration: 2 }} viewport={{ amount: 0.8 }}>
        I Code in
      </motion.h1>
      <div className='SkillInner'>
        {Skills.map(skill => (
          <motion.div className='Skill' key={skill.key} layoutId={skill.key} onClick={() => setSelectedKey(skill.key)} initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 2 } }} viewport={{ amount: 0 }}>
            <motion.img src={skill.image} alt={`${skill.name} Logo`} />
            <motion.h1>{skill.name}</motion.h1>
            <motion.p>{skill.description}</motion.p>
          </motion.div>
        ))}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div key={selectedSkill.key} layoutId={selectedKey} className="SelectedSkill">
              <motion.div className='SelectedSkill01'>
                <motion.img src={selectedSkill.image} alt={`${selectedSkill.name} Logo`} />
              </motion.div>
              <motion.div className='SelectedSkill02'>
                <motion.h1>{selectedSkill.name}</motion.h1>
                <motion.p>{selectedSkill.description}</motion.p>
              </motion.div>
              <motion.div className='SelectedSkill03'>
                <motion.button onClick={() => setSelectedKey(null)} aria-label="close">
                  <FaRegWindowClose />
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
       {/* ------ IDE and Tools I Use ------ */}
      <motion.h1 className='SkillTitle' variants={STAnimation} initial='hidden' whileInView='visible' transition={{ duration: 2 }} viewport={{ amount: 0.8 }}>
        IDE and Tools I Use
      </motion.h1>
      <div className='SkillInner'>
        {ide.map(ide => (
          <motion.div className='Skill Ide' key={ide.key} layoutId={ide.key} onClick={() => setSelectedKey(ide.key)} initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 2 } }} viewport={{ amount: 0 }}>
            <motion.img src={ide.image} alt={`${ide.name} Logo`} />
            <motion.h1>{ide.name}</motion.h1>
            <motion.p>{ide.description}</motion.p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}

export default Skill;

