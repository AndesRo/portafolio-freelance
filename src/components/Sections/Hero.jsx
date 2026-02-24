import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Button from '../UI/Button'
import { Link } from 'react-scroll'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Hero = () => {
  const { t } = useTranslation()
  const [text] = useTypewriter({
    words: [
      t('hero.title'),
      'Web Developer',
      'React Enthusiast',
      'Problem Solver'
    ],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
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
              <a href="/cv.pdf" download>
                <Button variant="secondary">{t('hero.buttons.cv')}</Button>
              </a>
              <Link to="contact" smooth={true} duration={500}>
                <Button variant="outline">{t('hero.buttons.contact')}</Button>
              </Link>
            </div>
          </motion.div>

          {/* Columna de la imagen */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2 flex justify-center"
          >
            <motion.img
              src="/images/img-dev.jpg"
              alt="Desarrollador"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-blue-600 dark:border-blue-400"
              animate={{
                y: [0, -10, 0], // Efecto de flotación
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero