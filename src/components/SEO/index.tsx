import Head from 'next/head'

interface SEOProps {
  title: string;
  description?: string;
}

const SEO = ({ title, description }: SEOProps): React.ReactElement => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name='description'
        content={
          description ||
          'FrontEnd Developer | ReactJS | Next.js | JavaScript | TypeScript.'
        }
      />

      <meta property='og:site_name' content={process.env.NEXT_PUBLIC_SITE_NAME} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta
        property='og:description'
        content={
          description ||
          'Desenvolvedor Frontend | ReactJS | Next.js | JavaScript | TypeScript.'
        }
      />
      <meta property='og:url' content={process.env.NEXT_PUBLIC_SITE_URL} />

      <meta name='twitter:title' content={title} />
      <meta
        name='twitter:description'
        content={
          description ||
          'Desenvolvedor Frontend | ReactJS | Next.js | JavaScript | TypeScript.'
        }
      />
      <meta name='twitter:url' content={process.env.NEXT_PUBLIC_SITE_URL} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='640' />

    </Head>
  )
}

export default SEO
