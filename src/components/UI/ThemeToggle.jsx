import { useTheme } from '../../hooks/useTheme'
import { motion } from 'framer-motion'
import { FiSun, FiMoon } from 'react-icons/fi'

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label="Cambiar tema"
      className="relative w-16 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center px-1 transition-colors duration-300"
    >
      {/* Sliding indicator */}
      <motion.div
        layout
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="absolute top-1 w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md flex items-center justify-center text-white"
        style={{ left: isDark ? '36px' : '4px' }}
      >
        {isDark ? <FiSun size={14} /> : <FiMoon size={14} />}
      </motion.div>

      {/* Background icons */}
      <div className="w-full flex justify-between text-gray-500 dark:text-gray-300 px-1 text-xs">
        <FiMoon size={14} />
        <FiSun size={14} />
      </div>
    </button>
  )
}

export default ThemeToggle