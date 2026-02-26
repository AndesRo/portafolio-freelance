import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const Footer = () => {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500 dark:text-gray-500"
        >
          {year}{t('footer.rights')}
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

