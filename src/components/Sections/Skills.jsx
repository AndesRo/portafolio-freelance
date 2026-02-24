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
  FaDatabase,
  FaCloud,
  FaFigma,
  FaCode,
  FaServer
} from 'react-icons/fa'
import { 
  SiTailwindcss, 
  SiMysql, 
  SiPostgresql, 
  SiMongodb, 
  SiPostman,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiCloudflare
} from 'react-icons/si'

// Mapa de iconos para cada tecnología
const iconMap = {
  'React': <FaReact className="text-blue-500" />,
  'JavaScript': <FaJs className="text-yellow-500" />,
  'Tailwind': <SiTailwindcss className="text-cyan-500" />,
  'HTML/CSS': <FaCode className="text-orange-500" />,
  'Node.js': <FaNodeJs className="text-green-600" />,
  'PHP': <FaPhp className="text-indigo-400" />,
  'Python': <FaPython className="text-blue-400" />,
  'REST APIs': <FaServer className="text-gray-600 dark:text-gray-400" />,
  'MySQL': <SiMysql className="text-blue-800 dark:text-blue-400" />,
  'PostgreSQL': <SiPostgresql className="text-blue-500" />,
  'MongoDB': <SiMongodb className="text-green-600" />,
  'Git/GitHub': <FaGitAlt className="text-orange-600" />,
  'Cloudflare': <SiCloudflare className="text-orange-500" />,
  'Docker': <FaDocker className="text-blue-500" />,
  'VS Code': <FaCode className="text-blue-500" />,
  'Postman': <SiPostman className="text-orange-600" />,
  'Figma': <FaFigma className="text-purple-600" />,
}

// Componente de estrellas (5 estrellas, se llenan según nivel)
const SkillStars = ({ level }) => {
  const filled = Math.round(level / 20) // 20% por estrella
  return (
    <div className="flex space-x-0.5 text-lg">
      {[...Array(5)].map((_, i) => (
        <span 
          key={i} 
          className={i < filled ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}
        >
          ★
        </span>
      ))}
    </div>
  )
}

const Skills = () => {
  const { t } = useTranslation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  // Categorías con sus habilidades
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
      skills: ['VS Code', 'Postman', 'Figma']
    },
  ]

  // Niveles de cada habilidad (ajusta según tu criterio)
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
    'Figma': 65,
  }

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          {t('skills.title')}
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">
                {cat.name}
              </h3>
              <div className="space-y-4">
                {cat.skills.map(skill => (
                  <div key={skill} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {iconMap[skill] || <FaCode className="text-gray-500" />}
                      <span className="font-medium">{skill}</span>
                    </div>
                    <SkillStars level={skillLevels[skill]} />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills