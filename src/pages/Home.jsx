import Hero from '../components/Sections/Hero'
import About from '../components/Sections/About'
import Projects from '../components/Sections/Projects'
import Experience from '../components/Sections/Experience' // Nuevo
import Contact from '../components/Sections/Contact'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation()
  return (
    <>
      <Helmet>
        <title>{t('hero.name')} - Software Developer Junior</title>
        <meta name="description" content={t('hero.description')} />
      </Helmet>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </>
  )
}

export default Home