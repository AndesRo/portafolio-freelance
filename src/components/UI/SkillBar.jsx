import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const SkillBar = ({ name, percentage }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className="mb-6">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-gray-800 dark:text-gray-200">
          {name}
        </span>

        <motion.span
          initial={{ opacity: 0, y: 5 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="text-sm text-gray-500 dark:text-gray-400"
        >
          {percentage}%
        </motion.span>
      </div>

      {/* Track */}
      <div className="relative w-full h-3 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
        
        {/* Glow background */}
        <div className="absolute inset-0 opacity-30 blur-md bg-gradient-to-r from-blue-500/30 via-indigo-500/30 to-purple-500/30" />

        {/* Animated bar */}
        <motion.div
          className="h-3 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-md"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : {}}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1] // cubic-bezier más elegante
          }}
        />
      </div>
    </div>
  )
}

export default SkillBar