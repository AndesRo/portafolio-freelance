import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const isSpanish = i18n.language === 'es'

  const toggleLanguage = () => {
    i18n.changeLanguage(isSpanish ? 'en' : 'es')
  }

  return (
    <button
      onClick={toggleLanguage}
      className="relative w-16 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center px-1 transition-colors duration-300"
    >
      {/* Sliding indicator */}
      <motion.div
        layout
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className={`absolute top-1 w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md`}
        style={{ left: isSpanish ? '4px' : '36px' }}
      />

      {/* Labels */}
      <div className="w-full flex justify-between text-xs font-semibold px-1 z-10 select-none">
        <span className={`${isSpanish ? 'text-white' : 'text-gray-600 dark:text-gray-300'}`}>
          ES
        </span>
        <span className={`${!isSpanish ? 'text-white' : 'text-gray-600 dark:text-gray-300'}`}>
          EN
        </span>
      </div>
    </button>
  )
}

export default LanguageSwitcher