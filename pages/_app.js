import { CacheProvider } from '@emotion/core'
import { MDXProvider } from '@mdx-js/react'
import { cache } from 'emotion'
import { ThemeProvider } from 'emotion-theming'
import NextApp from 'next/app'
import Head from 'next/head'
import { CodeBlock, Layout, Link } from '../components'
import theme from '../lib/theme'
import UI from '../lib/ui'
import '../styles/normalize.css'

const { Code, Figure, Global, H1, H2, P } = UI

const components = {
  a: Link,
  code: CodeBlock,
  h1: H1,
  h2: H2,
  inlineCode: Code,
  p: P,
  pre: Figure,
  wrapper: Layout,
}

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props

    return (
      <CacheProvider value={cache}>
        <MDXProvider components={components}>
          <ThemeProvider theme={theme}>
            <Head>
              <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&family=Roboto+Mono&display=swap"
                rel="stylesheet"
              />
            </Head>
            <Global
              xcss={{
                '*, *::before, *::after': {
                  boxSizing: 'border-box',
                },
                body: {
                  WebkitTapHighlightColor: 'transparent',
                  bg: 'white',
                  fontFamily: 'sans',
                  fontSmoothing: 'antialiased',
                  leading: 1.625,
                  m: 0,
                },
              }}
            />
            <Component {...pageProps} />
          </ThemeProvider>
        </MDXProvider>
      </CacheProvider>
    )
  }
}
