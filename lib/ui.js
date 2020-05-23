import { css } from '@emotion/core'
import createUI from 'styled-matter'

export default createUI({
  props: {
    fontSmoothing: (vx) => css`
      -webkit-font-smoothing: ${vx()};
      -moz-osx-font-smoothing: ${vx() === 'antialiased' ? 'grayscale' : vx()};
    `,
    listUnstyled: () => css`
      list-style: none;
      padding-left: 0;
    `,
    trim: () => css`
      > :first-child {
        margin-top: 0;
      }

      > :last-child {
        margin-bottom: 0;
      }
    `,
  },
  defaultProps: {
    a: {
      color: 'primary',
      textDecoration: 'none',
      xcss: { '&:hover': { textDecoration: 'underline' } },
    },
    code: {
      color: 'pink.400',
      fontFamily: 'mono',
      fontSize: '87.5%',
      fontSmoothing: 'auto',
    },
    figure: {
      m: '0 0 6',
    },
    h1: {
      fontSize: 7,
      fontWeight: 900,
      leading: 1.25,
      mb: 9,
      mt: 0,
    },
    h2: {
      fontSize: 5,
      fontWeight: 900,
      leading: 1.25,
      mb: 4,
      mt: 10,
    },
    ol: {
      mb: 6,
      mt: 0,
    },
    p: {
      mb: 6,
      mt: 0,
    },
    pre: {
      fontFamily: 'mono',
      fontSize: '87.5%',
      fontSmoothing: 'auto',
      m: 0,
      overflow: 'auto',
      p: 5,
      rounded: true,
    },
    ul: {
      mb: 6,
      mt: 0,
    },
  },
})
