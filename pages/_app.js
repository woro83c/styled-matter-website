import { CacheProvider, css, Global } from '@emotion/core'
import { MDXProvider } from '@mdx-js/react'
import { cache } from 'emotion'
import { ThemeProvider } from 'emotion-theming'
import NextApp from 'next/app'
import { Layout } from '../components'
import theme from '../lib/theme'
import { H1, H2 } from '../primitives'
import '../styles/normalize.css'

const components = {
  h1: H1,
  h2: H2,
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

                h1,
                h2,
                h3,
                h4,
                h5,
                h6 {
                  font-weight: 900;
                  line-height: 1.25;
                  margin-bottom: 1rem;
                  margin-top: 0;
                }

                p {
                  margin-bottom: 1.5rem;
                  margin-top: 0;
                }

                a {
                  color: ${theme.colors.primary};
                  text-decoration: none;

                  &:hover {
                    text-decoration: underline;
                  }
                }

                pre {
                  overflow: auto;
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
