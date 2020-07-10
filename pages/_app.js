import App from 'next/app'
import '../styles/index.css'
import { ThemeProvider } from 'styled-components'
import { theme } from '../tailwind.config'
import DefaultLayout from '../layouts/default'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={{ ...theme }}>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </ThemeProvider>
    )
  }
}
