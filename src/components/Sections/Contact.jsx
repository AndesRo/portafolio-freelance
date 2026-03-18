import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import Button from '../UI/Button'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import emailjs from '@emailjs/browser'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}

const Contact = () => {
  const { t } = useTranslation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const onSubmit = (data) => {
    setLoading(true)
    emailjs.send(
      'service_aw6upyn',
      'template_82qp8gv',
      {
        user_name: data.name,
        user_email: data.email,
        message: data.message,
      },
      'h0zQr5hy6-ghMbWXf'
    )
      .then(() => {
        setSubmitted(true)
        reset()
        setTimeout(() => setSubmitted(false), 3000)
      })
      .catch(() => alert(t('contact.error')))
      .finally(() => setLoading(false))
  }

  const socialLinks = [
    { icon: <MdEmail size={24} />, link: "mailto:andespart.ar@gmail.com", label: "Email" },
    { icon: <FaGithub size={24} />, link: "https://github.com/AndesRo", label: "GitHub" },
    { icon: <FaLinkedin size={24} />, link: "https://www.linkedin.com/in/romeromllq/", label: "LinkedIn" },
    { icon: <FaWhatsapp size={24} />, link: "https://wa.me/56997416485", label: "WhatsApp" }
  ]

  return (
    <section id="contact" className="relative py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-12 text-center">
            {t('contact.title')}
          </motion.h2>

          {/* Grid: Formulario + Redes sociales integradas */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Formulario - ocupa 2 columnas en lg */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl shadow-xl">
                {submitted && (
                  <div className="mb-6 p-3 bg-green-100 text-green-700 rounded-lg text-center text-sm">
                    {t('contact.success')}
                  </div>
                )}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div>
                    <label className="block mb-1 text-sm font-medium">{t('contact.name')}</label>
                    <input
                      {...register('name', { required: true })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition"
                    />
                    {errors.name && <p className="mt-1 text-red-500 text-xs">{t('contact.required')}</p>}
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-medium">{t('contact.email')}</label>
                    <input
                      type="email"
                      {...register('email', { required: true })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition"
                    />
                    {errors.email && <p className="mt-1 text-red-500 text-xs">{t('contact.invalidEmail')}</p>}
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-medium">{t('contact.message')}</label>
                    <textarea
                      rows="4"
                      {...register('message', { required: true })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition"
                    />
                    {errors.message && <p className="mt-1 text-red-500 text-xs">{t('contact.required')}</p>}
                  </div>
                  <Button type="submit" className="w-full py-3 text-base" disabled={loading}>
                    {loading ? t('contact.sending') : t('contact.send')}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Redes sociales - columna compacta */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-xl h-full flex flex-col justify-center">
                <h3 className="text-lg font-semibold mb-4 text-center lg:text-left">Encuéntrame en</h3>
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                  {socialLinks.map((item, i) => (
                    <a
                      key={i}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-md hover:-translate-y-0.5 transition-all"
                    >
                      <span className="text-blue-600 dark:text-blue-400">{item.icon}</span>
                      <span className="text-sm font-medium">{item.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact