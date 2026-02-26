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

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

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

  return (
    <section
      id="contact"
      className="relative py-32 bg-white dark:bg-slate-950"
    >
      <div className="container mx-auto px-6">

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-14 text-center"
          >
            {t('contact.title')}
          </motion.h2>

          {/* FORMULARIO */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-10 rounded-3xl shadow-2xl"
          >
            {submitted && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-xl text-center">
                {t('contact.success')}
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

              <div>
                <label className="block mb-2 text-sm font-medium">
                  {t('contact.name')}
                </label>
                <input
                  {...register('name', { required: true })}
                  className="w-full px-5 py-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition"
                />
                {errors.name && (
                  <p className="mt-1 text-red-500 text-sm">
                    {t('contact.required')}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  {...register('email', { required: true })}
                  className="w-full px-5 py-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition"
                />
                {errors.email && (
                  <p className="mt-1 text-red-500 text-sm">
                    {t('contact.invalidEmail')}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  {t('contact.message')}
                </label>
                <textarea
                  rows="6"
                  {...register('message', { required: true })}
                  className="w-full px-5 py-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition"
                />
                {errors.message && (
                  <p className="mt-1 text-red-500 text-sm">
                    {t('contact.required')}
                  </p>
                )}
              </div>

              <Button type="submit" className="w-full py-4 text-lg" disabled={loading}>
                {loading ? t('contact.sending') : t('contact.send')}
              </Button>

            </form>
          </motion.div>

          {/* REDES SOCIALES ABAJO */}
          <motion.div
            variants={itemVariants}
            className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { icon: <MdEmail size={26} />, link: "mailto:andespart.ar@gmail.com", label: "Email" },
              { icon: <FaGithub size={26} />, link: "https://github.com/AndesRo", label: "GitHub" },
              { icon: <FaLinkedin size={26} />, link: "https://www.linkedin.com/in/romeromllq/", label: "LinkedIn" },
              { icon: <FaWhatsapp size={26} />, link: "https://wa.me/56997416485", label: "WhatsApp" }
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-2 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                {item.icon}
                <span className="text-sm font-medium">{item.label}</span>
              </a>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

export default Contact