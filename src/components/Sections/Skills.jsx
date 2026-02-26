import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaReact, 
  FaJs, 
  FaPhp, 
  FaPython, 
  FaGitAlt, 
  FaDocker, 
  FaNodeJs,
  FaCode,
  FaServer
} from 'react-icons/fa'
import { 
  SiTailwindcss, 
  SiMysql, 
  SiPostgresql, 
  SiMongodb, 
  SiPostman,
  SiCloudflare
} from 'react-icons/si'

const iconMap = {
  'React': <FaReact className="text-blue-500" />,
  'JavaScript': <FaJs className="text-yellow-500" />,
  'Tailwind': <SiTailwindcss className="text-cyan-500" />,
  'HTML/CSS': <FaCode className="text-orange-500" />,
  'Node.js': <FaNodeJs className="text-green-600" />,
  'PHP': <FaPhp className="text-indigo-400" />,
  'Python': <FaPython className="text-blue-400" />,
  'REST APIs': <FaServer className="text-gray-500" />,
  'MySQL': <SiMysql className="text-blue-600" />,
  'PostgreSQL': <SiPostgresql className="text-blue-500" />,
  'MongoDB': <SiMongodb className="text-green-600" />,
  'Git/GitHub': <FaGitAlt className="text-orange-600" />,
  'Cloudflare': <SiCloudflare className="text-orange-500" />,
  'Docker': <FaDocker className="text-blue-500" />,
  'VS Code': <FaCode className="text-blue-500" />,
  'Postman': <SiPostman className="text-orange-600" />,
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 }
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

const Skills = () => {
  const { t } = useTranslation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  const categories = [
    {
      name: t('skills.frontend'),
      skills: ['React', 'JavaScript', 'Tailwind', 'HTML/CSS']
    },
    {
      name: t('skills.backend'),
      skills: ['Node.js', 'PHP', 'Python', 'REST APIs']
    },
    {
      name: t('skills.database'),
      skills: ['MySQL', 'PostgreSQL', 'MongoDB']
    },
    {
      name: t('skills.devops'),
      skills: ['Git/GitHub', 'Cloudflare', 'Docker']
    },
    {
      name: t('skills.tools'),
      skills: ['VS Code', 'Postman']
    },
  ]

  const skillLevels = {
    'React': 90,
    'JavaScript': 85,
    'Tailwind': 80,
    'HTML/CSS': 90,
    'Node.js': 80,
    'PHP': 75,
    'Python': 70,
    'REST APIs': 85,
    'MySQL': 85,
    'PostgreSQL': 70,
    'MongoDB': 60,
    'Git/GitHub': 90,
    'Cloudflare': 75,
    'Docker': 60,
    'VS Code': 95,
    'Postman': 80,
  }

  return (
    <section
      id="skills"
      className="relative py-24 bg-white dark:bg-slate-950 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full -z-10"></div>

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-16 text-center text-slate-900 dark:text-white"
          >
            {t('skills.title')}
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {categories.map((cat) => (
              <motion.div
                key={cat.name}
                variants={itemVariants}
                className="bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500"
              >
                <h3 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white">
                  {cat.name}
                </h3>

                <div className="space-y-6">
                  {cat.skills.map(skill => (
                    <div key={skill}>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-3">
                          {iconMap[skill]}
                          <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                            {skill}
                          </span>
                        </div>
                        <span className="text-xs text-slate-500">
                          {skillLevels[skill]}%
                        </span>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skillLevels[skill]}%` } : {}}
                          transition={{ duration: 1, ease: 'easeOut' }}
                          className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

export default Skills