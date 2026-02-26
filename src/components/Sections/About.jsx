import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  SiReact,
  SiJavascript,
  SiPhp,
  SiMysql,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiCloudflare,
  SiGoogle
} from 'react-icons/si'

import { VscCode } from 'react-icons/vsc'

const techIcons = [
  { name: 'React', icon: <SiReact /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'PHP', icon: <SiPhp /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'Tailwind', icon: <SiTailwindcss /> },
  { name: 'Node.js', icon: <SiNodedotjs /> },
  { name: 'Git', icon: <SiGit /> },
  { name: 'Cloudflare', icon: <SiCloudflare /> },
  { name: 'Google APIs', icon: <SiGoogle /> },
  { name: 'VS Code', icon: <VscCode /> },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const About = () => {
  const { t } = useTranslation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section
      id="about"
      className="relative py-24 bg-white dark:bg-slate-950 overflow-hidden"
    >
      {/* Soft gradient background */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full -z-10"></div>

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white"
          >
            {t('about.title')}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto"
          >
            {t('about.description')}
          </motion.p>

          <motion.h3
            variants={itemVariants}
            className="text-2xl font-semibold mb-10 text-slate-800 dark:text-slate-200"
          >
            {t('about.technologies')}
          </motion.h3>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          >
            {techIcons.map((tech) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={{
                  y: -6,
                  scale: 1.05
                }}
                className="group relative bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-3 text-slate-700 dark:text-slate-300 group-hover:text-blue-500 transition duration-300">
                  {tech.icon}
                </div>

                <span className="font-medium text-slate-800 dark:text-slate-200">
                  {tech.name}
                </span>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/10 group-hover:to-indigo-500/10 transition duration-500 -z-10"></div>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

export default About