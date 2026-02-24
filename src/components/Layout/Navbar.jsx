import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import LanguageSwitcher from '../UI/LanguageSwitcher'
import ThemeToggle from '../UI/ThemeToggle'

const Navbar = () => {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { to: 'hero', label: t('nav.home') },
    { to: 'about', label: t('nav.about') },
    { to: 'projects', label: t('nav.projects') },
    { to: 'skills', label: t('nav.skills') },
    { to: 'contact', label: t('nav.contact') },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="hero" smooth={true} duration={500} className="text-2xl font-bold cursor-pointer">
          Freelance
        </Link>
        <div className="hidden md:flex space-x-8">
          {menuItems.map(item => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-blue-600 dark:text-blue-400"
              className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar