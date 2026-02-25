import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Button from '../UI/Button'
import { Link } from 'react-scroll'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Tilt from 'react-parallax-tilt'
import { useEffect, useState } from 'react'

const Hero = () => {
  const { t } = useTranslation()
  const [text] = useTypewriter({
    words: [
      t('hero.title'),
      'Software Developer',
      'React Enthusiast',
      'Problem Solver'
    ],
    loop: true,
    delaySpeed: 2000,
  })

  const [binarySpans, setBinarySpans] = useState([])

  useEffect(() => {
    const spans = []
    const count = 40
    // Colores del tema: azul (#3b82f6) y púrpura (#a855f7)
    const colors = ['text-blue-500', 'text-purple-500', 'text-blue-400', 'text-purple-400']
    for (let i = 0; i < count; i++) {
      const left = Math.random() * 100
      const duration = 5 + Math.random() * 10
      const delay = Math.random() * -20
      const colorClass = colors[Math.floor(Math.random() * colors.length)]
      spans.push(
        <motion.div
          key={i}
          className={`absolute text-xs font-mono ${colorClass} dark:opacity-80`}
          style={{
            left: `${left}%`,
            top: '-20%',
            writingMode: 'vertical-rl',
            textOrientation: 'upright',
            opacity: 0.2 + Math.random() * 0.3,
            textShadow: '0 0 8px currentColor',
          }}
          animate={{
            y: ['0vh', '120vh'],
          }}
          transition={{
            duration: duration,
            repeat: Infinity,
            delay: delay,
            ease: 'linear',
          }}
        >
          {Array.from({ length: 20 }, () => (Math.random() > 0.5 ? '0' : '1')).join('')}
        </motion.div>
      )
    }
    setBinarySpans(spans)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 overflow-hidden relative">
      {/* Fondo decorativo con colores del tema */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Columna de texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {t('hero.greeting')}{' '}
              <span className="text-blue-600 dark:text-blue-400">
                {t('hero.name')}
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-6 min-h-[3.5rem]">
              {text}
              <Cursor cursorStyle="_" />
            </h2>
            <p className="text-lg max-w-2xl mx-auto md:mx-0 mb-8 text-gray-600 dark:text-gray-400">
              {t('hero.description')}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Link to="projects" smooth={true} duration={500}>
                <Button>{t('hero.buttons.projects')}</Button>
              </Link>
              <a href="/cv/cv.pdf" download>
                <Button variant="secondary">{t('hero.buttons.cv')}</Button>
              </a>
              <Link to="contact" smooth={true} duration={500}>
                <Button variant="outline">{t('hero.buttons.contact')}</Button>
              </Link>
            </div>
          </motion.div>

          {/* Columna de la imagen con efecto Matrix en colores del tema */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2 flex justify-center"
          >
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1200}
              scale={1.05}
              transitionSpeed={2000}
              gyroscope={true}
              className="relative"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-blue-500 dark:border-purple-400 shadow-2xl overflow-hidden">
                <img
                  src="/images/img-dev.jpg"
                  alt="Desarrollador"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 pointer-events-none mix-blend-screen">
                  {binarySpans}
                </div>
              </div>
            </Tilt>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero