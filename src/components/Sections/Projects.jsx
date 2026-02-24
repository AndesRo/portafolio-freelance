import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Card from '../UI/Card'
import Button from '../UI/Button'

const projects = [
  {
    key: 'project1',
    image: '/images/panel_inventario.jpg',
    demo: 'https://servimotomolina.vercel.app/',
    code: 'https://github.com/AndesRo/sistema_inventario.git',
  },
  {
    key: 'project2',
    image: '/images/landing_pages.jpg',
    demo: 'https://casavillarrica.vercel.app',
    code: 'https://github.com/AndesRo/casavillarrica.git',
  },
  {
    key: 'project3',
    image: '/images/sistema_reclamos.jpg',
    demo: 'https://demo3.com',
    code: 'https://github.com/AndesRo/systemTour.git',
  },
]

const Projects = () => {
  const { t } = useTranslation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          {t('projects.title')}
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.key}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.2 }}
            >
              <Card>
                <img src={project.image} alt={t(`projects.${project.key}.title`)} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{t(`projects.${project.key}.title`)}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{t(`projects.${project.key}.description`)}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">
                    <span className="font-semibold">Problema:</span> {t(`projects.${project.key}.problem`)}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                    <span className="font-semibold">Tecnologías:</span> {t(`projects.${project.key}.tech`)}
                  </p>
                  <div className="flex justify-between">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">{t('projects.demo')}</Button>
                    </a>
                    <a href={project.code} target="_blank" rel="noopener noreferrer">
                      <Button variant="secondary" size="sm">{t('projects.code')}</Button>
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects