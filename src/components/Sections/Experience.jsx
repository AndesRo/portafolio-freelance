import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaBriefcase, 
  FaCalendarAlt, 
  FaMapMarkerAlt,
  FaCode
} from 'react-icons/fa'

const experiences = [
  {
    id: 1,
    role: 'Full Stack Developer Freelance',
    company: 'Proyectos Propios',
    location: 'Remoto',
    period: '2022 - Presente',
    description: 'Desarrollo de aplicaciones web a medida, sistemas de gestión, landing pages y automatización de procesos para pequeños negocios y emprendedores.',
    technologies: ['React', 'Node.js', 'MySQL', 'Tailwind', 'Cloudflare'],
    icon: <FaBriefcase className="text-blue-500" />,
  },
  {
    id: 2,
    role: 'Desarrollador Web',
    company: 'Agencia Digital XYZ',
    location: 'Santiago, Chile',
    period: '2021 - 2022',
    description: 'Maquetación y desarrollo de sitios web corporativos, integración con APIs de terceros, mantenimiento de plataformas WordPress y optimización SEO.',
    technologies: ['PHP', 'WordPress', 'JavaScript', 'CSS', 'APIs REST'],
    icon: <FaBriefcase className="text-purple-500" />,
  },
  {
    id: 3,
    role: 'Práctica Profesional',
    company: 'Empresa ABC',
    location: 'Temuco, Chile',
    period: '2020 - 2021',
    description: 'Colaboración en el desarrollo de un sistema interno de inventario, soporte técnico y documentación de procesos.',
    technologies: ['Java', 'MySQL', 'Git', 'Scrum'],
    icon: <FaBriefcase className="text-indigo-500" />,
  },
  {
    id: 4,
    role: 'Proyecto Final: Sistema de Reclamos Turísticos',
    company: 'Instituto Profesional',
    location: 'Temuco',
    period: '2019 - 2020',
    description: 'Desarrollo completo de una plataforma web para gestión de reclamos, con autenticación, paneles administrativos y generación de reportes.',
    technologies: ['React', 'Node.js', 'MySQL', 'JWT', 'Tailwind'],
    icon: <FaCode className="text-green-500" />,
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const Experience = () => {
  const { t } = useTranslation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="experience" className="relative py-24 bg-white dark:bg-slate-950 overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full -z-10"></div>

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-12 text-center text-slate-900 dark:text-white"
          >
            {t('experience.title', 'Experiencia Profesional')}
          </motion.h2>

          {/* Timeline */}
          <div className="relative">
            {/* Línea central decorativa (solo visible en desktop) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500/30 via-purple-500/30 to-pink-500/30 hidden md:block"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row items-start gap-6 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Punto indicador en la línea de tiempo */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full hidden md:block z-10"></div>

                {/* Tarjeta de experiencia */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="group bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{exp.icon}</span>
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                        {exp.role}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-2">
                      <FaCalendarAlt className="text-xs" />
                      <span>{exp.period}</span>
                      <FaMapMarkerAlt className="text-xs ml-2" />
                      <span>{exp.location}</span>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Espacio vacío para mantener la estructura en desktop */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience