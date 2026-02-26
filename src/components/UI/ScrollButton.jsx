import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'

const ScrollButton = () => {
  const [visible, setVisible] = useState(false)
  const [atBottom, setAtBottom] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      const docHeight = document.documentElement.scrollHeight

      setVisible(scrollTop > 250)
      setAtBottom(scrollTop + windowHeight >= docHeight - 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    if (atBottom) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    }
  }

  return (
    <div className="md:hidden fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {visible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleClick}
            className="p-4 rounded-full 
                       bg-white/20 dark:bg-black/30 
                       backdrop-blur-md 
                       border border-white/30 dark:border-slate-700
                       shadow-xl 
                       text-slate-900 dark:text-white"
          >
            {atBottom ? <FaChevronUp size={18} /> : <FaChevronDown size={18} />}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ScrollButton