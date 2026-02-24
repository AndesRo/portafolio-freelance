import { motion } from 'framer-motion'

const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
  const base = 'px-6 py-3 rounded-lg font-medium transition-all duration-200 inline-block text-center'
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100',
    outline: 'border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:text-white'
  }
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={`${base} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button