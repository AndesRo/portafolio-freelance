import { motion } from 'framer-motion'

const Card = ({ children, className = '', ...props }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      className={`
        relative group
        bg-white/80 dark:bg-gray-900/70
        backdrop-blur-xl
        rounded-2xl
        border border-gray-200 dark:border-gray-800
        shadow-lg shadow-black/5
        hover:shadow-2xl hover:shadow-blue-500/10
        transition-all duration-300
        overflow-hidden
        ${className}
      `}
      {...props}
    >
      {/* Gradient border glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 blur-xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}

export default Card