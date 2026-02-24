import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import Button from '../UI/Button'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const { t } = useTranslation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

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

    const templateParams = {
      user_name: data.name,
      user_email: data.email,
      message: data.message,
    }

    emailjs.send(
      'service_aw6upyn',
      'template_82qp8gv',
      templateParams,
      'h0zQr5hy6-ghMbWXf'
    )
    .then(() => {
      setSubmitted(true)
      reset()
      setTimeout(() => setSubmitted(false), 3000)
    })
    .catch((error) => {
      console.error(error)
      alert('Error enviando el mensaje')
    })
    .finally(() => {
      setLoading(false)
    })
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            {t('contact.title')}
          </h2>

          {submitted && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-center">
              {t('contact.success')}
            </div>
          )}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            {/* Nombre */}
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">
                {t('contact.name')}
              </label>
              <input
                type="text"
                id="name"
                {...register('name', { required: true })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              {errors.name && (
                <p className="mt-1 text-red-500 text-sm">
                  Este campo es requerido
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">
                {t('contact.email')}
              </label>
              <input
                type="email"
                id="email"
                {...register('email', {
                  required: true,
                  pattern: /^\S+@\S+\.\S+$/i
                })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              {errors.email?.type === 'required' && (
                <p className="mt-1 text-red-500 text-sm">
                  Este campo es requerido
                </p>
              )}
              {errors.email?.type === 'pattern' && (
                <p className="mt-1 text-red-500 text-sm">
                  Correo inválido
                </p>
              )}
            </div>

            {/* Mensaje */}
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">
                {t('contact.message')}
              </label>
              <textarea
                id="message"
                rows="5"
                {...register('message', { required: true })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              {errors.message && (
                <p className="mt-1 text-red-500 text-sm">
                  Este campo es requerido
                </p>
              )}
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Enviando...' : t('contact.send')}
            </Button>
          </form>

          {/* Redes sociales */}
          <div className="flex justify-center space-x-6 mt-8">
            <a
              href="https://github.com/AndesRo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/romeromllq/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:andespart.ar@gmail.com"
              className="text-3xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <MdEmail />
            </a>

            <a
              href="https://wa.me/56997416485"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FaWhatsapp />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact