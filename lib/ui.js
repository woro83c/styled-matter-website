import { css } from '@emotion/core'
import createUI from 'styled-matter'

export default createUI({
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
})
