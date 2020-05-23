import { CacheProvider } from '@emotion/core'
import { MDXProvider } from '@mdx-js/react'
import { cache } from 'emotion'
import { ThemeProvider } from 'emotion-theming'
import NextApp from 'next/app'
import Head from 'next/head'
import { Callout, CodeBlock, Layout, Link } from '../components'
import theme from '../lib/theme'
import UI from '../lib/ui'
import withAnchor from '../lib/with-anchor'
import '../styles/normalize.css'

const { Code, Figure, Global, H1, H2, P } = UI

const components = {
  Callout,
  a: Link,
  code: CodeBlock,
  h1: H1,
  h2: withAnchor(H2),
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
              <title>Styled Matter - One thing to style them all</title>

              {/* Favicons */}
              <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
              <link rel="icon" type="image/svg+xml" href="/logomark.svg" />
              <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
              <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
              <link rel="manifest" href="/site.webmanifest" />
              <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
              <meta name="msapplication-TileColor" content="#ffffff" />
              <meta name="theme-color" content="#ffffff" />

              {/* Fonts */}
              <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
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
