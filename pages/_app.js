import NextApp from 'next/app'
import { CacheProvider } from '@emotion/core'
import { cache } from 'emotion'
import { ThemeProvider } from 'emotion-theming'
import { MDXProvider } from '@mdx-js/react'
import { Layout } from '../components'
import theme from '../lib/theme'

const components = {
  wrapper: Layout,
}

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props

    return (
      <CacheProvider value={cache}>
        <MDXProvider components={components}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </MDXProvider>
      </CacheProvider>
    )
  }
}
