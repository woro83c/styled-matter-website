import { CacheProvider, css, Global } from '@emotion/core'
import { MDXProvider } from '@mdx-js/react'
import { cache } from 'emotion'
import { ThemeProvider } from 'emotion-theming'
import NextApp from 'next/app'
import { CodeBlock, Layout } from '../components'
import theme from '../lib/theme'
import { Code, Figure, H1, H2, P } from '../primitives'
import '../styles/normalize.css'

const components = {
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

                a {
                  color: ${theme.colors.primary};
                  text-decoration: none;

                  &:hover {
                    text-decoration: underline;
                  }
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
