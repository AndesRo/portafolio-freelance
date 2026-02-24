import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const SkillBar = ({ name, percentage, color = 'bg-blue-600' }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <motion.div
          className={`h-2.5 rounded-full ${color}`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

export default SkillBar