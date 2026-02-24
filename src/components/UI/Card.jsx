import { motion } from 'framer-motion'

const Card = ({ children, className = '', ...props }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card