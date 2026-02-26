import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-scroll'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { Dialog } from '@headlessui/react'
import { useState } from 'react'
import Tilt from 'react-parallax-tilt'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: 'easeOut' }
  }
}

const Hero = () => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const [text] = useTypewriter({
    words: t('hero.typewriter', { returnObjects: true }),
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-slate-950"
      >
        {/* Grid Background */}
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)]"></div>
        </div>

        {/* Glow */}
        <div className="absolute top-20 left-1/3 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full -z-10"></div>

        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-col lg:flex-row items-center justify-between gap-16"
          >

            {/* LEFT */}
            <div className="lg:w-1/2 text-center lg:text-left">

              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-slate-900 dark:text-white"
              >
                {t('hero.greeting')}
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {t('hero.name')}
                </span>
              </motion.h1>

              <motion.h2
                variants={itemVariants}
                className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-6 min-h-[3rem]"
              >
                {text}
                <Cursor cursorStyle="|" />
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-slate-600 dark:text-slate-400 max-w-xl mb-10"
              >
                {t('hero.description')}
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <Link to="contact" smooth duration={500}>
                  <button className="px-7 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition shadow-lg hover:shadow-blue-500/40">
                    {t('hero.buttons.contact')}
                  </button>
                </Link>

                <button
                  onClick={() => setIsOpen(true)}
                  className="px-7 py-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  {t('hero.buttons.cv')}
                </button>
              </motion.div>

            </div>

            {/* RIGHT */}
            <motion.div
              variants={itemVariants}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="lg:w-1/2 flex justify-center"
            >
              <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} perspective={1000}>
                <div className="relative flex items-center justify-center">

                  {/* Rotating Ring */}
                  <motion.div
                    className="absolute w-80 h-80 rounded-full"
                    style={{
                      background:
                        "conic-gradient(from 0deg, #3b82f6, #6366f1, #8b5cf6, #3b82f6)"
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <div className="absolute inset-[6px] bg-white dark:bg-slate-950 rounded-full"></div>
                  </motion.div>

                  {/* Gradient Border */}
                  <div className="relative p-[4px] rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 shadow-2xl">
                    <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-2xl scale-110 -z-10"></div>

                    <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden">
                      <img
                        src="/images/img-dev.jpg"
                        alt="Developer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                </div>
              </Tilt>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* CV MODAL */}
      <AnimatePresence>
        {isOpen && (
          <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="relative z-50"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            <div className="fixed inset-0 flex items-center justify-center p-6">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden"
              >
                <div className="flex justify-between items-center p-4 border-b dark:border-slate-700">
                  <h3 className="text-lg font-semibold">
                    {t('hero.modalTitle')}
                  </h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-slate-500 hover:text-red-500"
                  >
                    ✕
                  </button>
                </div>

                <div className="h-[70vh]">
                  <iframe
                    src="/cv/cv_andres.pdf"
                    className="w-full h-full"
                    title="Curriculum"
                  />
                </div>

                <div className="flex justify-end gap-4 p-4 border-t dark:border-slate-700">
                  <a
                    href="/cv/cv_andres.pdf"
                    download
                    className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                  >
                    {t('hero.download')}
                  </a>
                </div>
              </motion.div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  )
}

export default Hero