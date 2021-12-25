import Aos from 'aos'
import 'aos/dist/aos.css'

import { useEffect } from 'react'

import Image from 'next/image'

import Header from 'src/components/Header'
import Footer from 'src/components/Footer'
import Seo from 'src/components/SEO'
import Contacts from 'src/components/Contacts'

const Home = (): React.ReactElement => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const siteName = process.env.NEXT_PUBLIC_SITE_NAME
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Seo title={`Home | ${siteName}`} />
      <Header pageName='home' />
      <h1 />
      <div
        data-aos='fade-down'
        data-aos-anchor-placement='center-center'
      >
        <Image
          src='/images/home.svg'
          alt='Olá'
          width={300}
          height={200}
          layout='fixed'
        />
      </div>
      <Contacts />
      <Footer />
    </div>
  )
}

export default Home
