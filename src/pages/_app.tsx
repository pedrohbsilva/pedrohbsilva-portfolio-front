import { AppProps } from 'next/app'
import 'antd/dist/antd.css'

import { ThemeProvider } from 'styled-components'

import { theme } from '../styles/theme'
import { GlobalStyles } from '../styles/global-styles'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />

    </ThemeProvider>
  )
}

export default MyApp
