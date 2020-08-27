import App from 'next/app'
import '../styles/index.css'
import { ThemeProvider } from 'styled-components'
import { IssueProvider } from '../contexts/IssueContext'
import { theme } from '../tailwind.config'
import DefaultLayout from '../layouts/default'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <IssueProvider>
        <ThemeProvider theme={{ ...theme }}>
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        </ThemeProvider>
      </IssueProvider>
    )
  }
}
