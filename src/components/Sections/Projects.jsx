import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: 'easeOut' }
  }
}

const Projects = () => {
  const { t } = useTranslation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section
      id="projects"
      className="relative py-24 bg-white dark:bg-slate-950 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full -z-10"></div>

      <div className="container mx-auto px-6">

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-16 text-center text-slate-900 dark:text-white"
          >
            {t('projects.title')}
          </motion.h2>

          {/* Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {projects.map((project) => (
              <motion.div
                key={project.key}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md hover:shadow-2xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={t(`projects.${project.key}.title`)}
                    className="w-full h-56 object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center gap-4">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700 transition"
                    >
                      {t('projects.demo')}
                    </a>

                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-lg border border-white text-white text-sm hover:bg-white hover:text-black transition"
                    >
                      {t('projects.code')}
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                    {t(`projects.${project.key}.title`)}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                    {t(`projects.${project.key}.description`)}
                  </p>

                  <div className="text-xs text-slate-500 dark:text-slate-500 space-y-2">
                    <p>
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        Problema:
                      </span>{' '}
                      {t(`projects.${project.key}.problem`)}
                    </p>

                    <p>
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        Stack:
                      </span>{' '}
                      {t(`projects.${project.key}.tech`)}
                    </p>
                  </div>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/10 group-hover:to-indigo-500/10 transition duration-500 -z-10"></div>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

export default Projects