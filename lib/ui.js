import { css } from '@emotion/core'
import createUI from 'styled-matter'

export default createUI({
  listUnstyled: () => css`
    list-style: none;
    padding-left: 0;
  `,
})
