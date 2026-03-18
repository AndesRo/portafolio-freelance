import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  const socialLinks = [
    { icon: <MdEmail size={20} />, link: "mailto:andespart.ar@gmail.com", label: "Email" },
    { icon: <FaGithub size={20} />, link: "https://github.com/AndesRo", label: "GitHub" },
    { icon: <FaLinkedin size={20} />, link: "https://www.linkedin.com/in/romeromllq/", label: "LinkedIn" },
    { icon: <FaWhatsapp size={20} />, link: "https://wa.me/56997416485", label: "WhatsApp" }
  ]

  const menuItems = [
    { to: 'hero', label: t('nav.home') },
    { to: 'projects', label: t('nav.projects') },
    { to: 'contact', label: t('nav.contact') },
  ]

  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          {/* Logo / nombre */}
          <div className="text-lg font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Desarrollo Freelance
          </div>

          {/* Menú rápido */}
          <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-400">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth
                duration={500}
                offset={-80}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition cursor-pointer"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Redes sociales */}
          <div className="flex gap-4">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Línea divisoria y derechos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500"
        >
          <p>© {year} {t('footer.rights')}</p>
          <p className="mt-1 text-xs text-gray-400">
            Built with React, Tailwind & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

