import React from 'react'
import { motion } from "framer-motion"

function TypingText({text}) {
  const content = text.split("")
  return (
      <>
        {content.map((texts, key) => (
            <motion.span
            initial={{ opacity: 1, color: 'rgba(89, 120, 64, 1)' }}
            animate={{ opacity: 0, color: 'rgba(89, 120, 64, 1)' }}
            transition={{ duration: 3, delay: key * 0.1, repeat: Infinity }}
            key={key}
            >
            {texts}
            </motion.span>
        ))}
    </>
  )
}

export default TypingText

