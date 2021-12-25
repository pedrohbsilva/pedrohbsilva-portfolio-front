import Header from 'src/components/Header'
import Footer from 'src/components/Footer'
import Seo from 'src/components/SEO'
import AboutComponent from 'src/components/About'

const About = (): React.ReactElement => {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME
  return (
    <>
      <Seo title={`Sobre mim | ${siteName}`} />
      <Header pageName='about' />
      <AboutComponent />
      <Footer />
    </>
  )
}

export default About
