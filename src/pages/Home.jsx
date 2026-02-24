import Hero from '../components/Sections/Hero'
import About from '../components/Sections/About'
import Projects from '../components/Sections/Projects'
import Skills from '../components/Sections/Skills'
import Contact from '../components/Sections/Contact'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation()
  return (
    <>
      <Helmet>
        <title>{t('hero.name')} - Full Stack Developer Junior</title>
        <meta name="description" content={t('hero.description')} />
      </Helmet>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}

export default Home