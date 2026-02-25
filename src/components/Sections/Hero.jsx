import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../UI/Button'
import { Link } from 'react-scroll'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Tilt from 'react-parallax-tilt'

const Hero = () => {
  const { t } = useTranslation()
  const [text] = useTypewriter({
    words: [
      t('hero.title'),
      'software developer',
      'React Enthusiast',
      'Problem Solver'
    ],
    loop: true,
    delaySpeed: 2000,
  })

  const [showFirstImage, setShowFirstImage] = useState(true)

  useEffect(() => {
    // Secuencia de volteo al cargar la página
    const timeout1 = setTimeout(() => {
      setShowFirstImage(false)
    }, 500) // media vuelta a los 0.5s

    const timeout2 = setTimeout(() => {
      setShowFirstImage(true)
    }, 1000) // vuelve a la primera a 1s

    return () => {
      clearTimeout(timeout1)
      clearTimeout(timeout2)
    }
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 overflow-hidden relative">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Columna del texto */}
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

          {/* Columna de la imagen con efecto de volteo */}
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
              <div className="relative w-64 h-64 md:w-80 md:h-80" style={{ perspective: '1200px' }}>
                <AnimatePresence initial={false} mode="wait">
                  {showFirstImage ? (
                    <motion.img
                      key="front"
                      src="/images/img-dev.jpg"
                      alt="Desarrollador"
                      className="absolute inset-0 w-full h-full object-cover rounded-full shadow-2xl"
                      initial={{ rotateY: 180, opacity: 0 }}
                      animate={{ rotateY: 0, opacity: 1 }}
                      exit={{ rotateY: -180, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  ) : (
                    <motion.img
                      key="back"
                      src="/images/img-dev.jpg" // Cambia por tu segunda imagen
                      alt="Desarrollador otra perspectiva"
                      className="absolute inset-0 w-full h-full object-cover rounded-full shadow-2xl"
                      initial={{ rotateY: -180, opacity: 0 }}
                      animate={{ rotateY: 0, opacity: 1 }}
                      exit={{ rotateY: 180, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                </AnimatePresence>
              </div>
              
              {/* Partículas decorativas */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full blur-md animate-ping"></div>
              <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-purple-500 rounded-full blur-md animate-pulse"></div>
            </Tilt>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero