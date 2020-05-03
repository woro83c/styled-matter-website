import NextApp from 'next/app'
import { CacheProvider, css, Global } from '@emotion/core'
import { cache } from 'emotion'
import { ThemeProvider } from 'emotion-theming'
import { MDXProvider } from '@mdx-js/react'
import { Layout } from '../components'
import theme from '../lib/theme'
import '../styles/normalize.css'

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
            <Global
              styles={css`
                *,
                *::before,
                *::after {
                  box-sizing: border-box;
                }

                body {
                  background-color: white;
                  font-family: ${theme.fonts.sans};
                  -webkit-font-smoothing: antialiased;
                  -moz-osx-font-smoothing: grayscale;
                  line-height: 1.625;
                  margin: 0;
                  -webkit-tap-highlight-color: transparent;
                }
              `}
            />
            <Component {...pageProps} />
          </ThemeProvider>
        </MDXProvider>
      </CacheProvider>
    )
  }
}
