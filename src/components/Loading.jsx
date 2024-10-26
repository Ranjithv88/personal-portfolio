import React from 'react'
import './style/Loading.scss'
import { motion } from 'framer-motion'

function Loading() {
  return (
    <div className='LoadingOuter'>
      <motion.div className='LoadingInner' initial={{ x: '-50%', y: '-50%' }} animate={{ rotate: 360 }} transition={{
        type: "spring",
        stiffness: 50,
        damping: 30,
        repeat: Infinity,
        repeatType: "loop"}} />
    </div>
  )
}
export default Loading

