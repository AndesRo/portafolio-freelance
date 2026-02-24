import { useTheme } from '../../hooks/useTheme'
import { motion } from 'framer-motion'

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="p-2 rounded-md bg-gray-200 dark:bg-gray-700"
      aria-label="Cambiar tema"
    >
      {isDark ? '☀️' : '🌙'}
    </motion.button>
  )
}

export default ThemeToggle