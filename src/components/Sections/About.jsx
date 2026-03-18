import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
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
  { name: 'React', icon: <SiReact />, level: 90 },
  { name: 'JavaScript', icon: <SiJavascript />, level: 85 },
  { name: 'PHP', icon: <SiPhp />, level: 75 },
  { name: 'MySQL', icon: <SiMysql />, level: 80 },
  { name: 'Tailwind', icon: <SiTailwindcss />, level: 85 },
  { name: 'Node.js', icon: <SiNodedotjs />, level: 80 },
  { name: 'Git', icon: <SiGit />, level: 90 },
  { name: 'Cloudflare', icon: <SiCloudflare />, level: 70 },
  { name: 'Google APIs', icon: <SiGoogle />, level: 75 },
  { name: 'VS Code', icon: <VscCode />, level: 95 },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
      duration: 0.6
    }
  }
}

const About = () => {
  const { t } = useTranslation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [hoveredTech, setHoveredTech] = useState(null)

  return (
    <section
      id="about"
      className="relative py-24 bg-white dark:bg-slate-950 overflow-hidden"
    >
      {/* Fondo con grid animado */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)]"></div>
      </div>

      {/* Partículas flotantes */}
      <div className="absolute inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Gradiente suave de fondo */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full -z-10"></div>

      <div className="container mx-auto px-6 relative z-10">
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
                  y: -8,
                  scale: 1.08,
                  transition: { type: 'spring', stiffness: 300 }
                }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setHoveredTech(tech.name)}
                onHoverEnd={() => setHoveredTech(null)}
                className="group relative bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-2 border-transparent hover:border-blue-500/50 rounded-2xl p-6 flex flex-col items-center justify-center shadow-md hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer"
              >
                {/* Icono con gradiente animado */}
                <div className="text-4xl mb-3 text-slate-700 dark:text-slate-300 group-hover:text-blue-500 transition-all duration-300">
                  {tech.icon}
                </div>

                <span className="font-medium text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                  {tech.name}
                </span>

                {/* Tooltip con nivel (opcional) */}
                {hoveredTech === tech.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-3 rounded-full whitespace-nowrap"
                  >
                    {tech.level}% dominio
                  </motion.div>
                )}

                {/* Borde gradiente animado */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 transition-all duration-500 -z-10 blur-md"></div>

                {/* Efecto de brillo en el borde */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 p-[1px] -z-10">
                    <div className="w-full h-full bg-white dark:bg-slate-900 rounded-2xl"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Barra de nivel general (opcional) */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex justify-center items-center gap-2 text-sm text-slate-500"
          >
            <span>✦</span>
            <span>Pasa el cursor sobre cada tecnología para ver nivel</span>
            <span>✦</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About