import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es')
  }

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggleLanguage}
      className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 text-sm font-medium"
    >
      {i18n.language === 'es' ? 'EN' : 'ES'}
    </motion.button>
  )
}

export default LanguageSwitcher