import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const techIcons = [
  { name: 'React', icon: '⚛️' },
  { name: 'JavaScript', icon: '🟨' },
  { name: 'PHP', icon: '🐘' },
  { name: 'MySQL', icon: '🗄️' },
  { name: 'Tailwind', icon: '🎨' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Git', icon: '📦' },
  { name: 'Cloudflare', icon: '☁️' },
  { name: 'Google APIs', icon: '🔌' },
  { name: 'VS Code', icon: '👨‍💻' },
 
]

const About = () => {
  const { t } = useTranslation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">{t('about.title')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 text-center">
            {t('about.description')}
          </p>
          <h3 className="text-2xl font-semibold mb-6 text-center">{t('about.technologies')}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {techIcons.map((tech, idx) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md flex flex-col items-center justify-center text-center cursor-pointer border-2 border-transparent hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-xl transition-all duration-300"
              >
                <span className="text-4xl mb-2">{tech.icon}</span>
                <span className="font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About