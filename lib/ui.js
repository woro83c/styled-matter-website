import { css } from '@emotion/core'
import createUI, { componentize } from 'styled-matter'

const config = {
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
}

const { Code, Figure, H1, H2, P, Pre, ...rest } = createUI(config)

export default {
  ...rest,
  Code: componentize(
    <Code color="pink.400" fontFamily="mono" fontSize="87.5%" fontSmoothing="auto" />
  ),
  Figure: componentize(<Figure m={0} mb={6} />),
  H1: componentize(<H1 fontSize={7} fontWeight={900} leading={1.25} mb={9} mt={0} />),
  H2: componentize(<H2 fontSize={5} fontWeight={900} leading={1.25} mb={4} mt={10} />),
  P: componentize(<P mb={6} mt={0} />),
  Pre: componentize(
    <Pre
      fontFamily="mono"
      fontSize="87.5%"
      fontSmoothing="auto"
      m={0}
      overflow="auto"
      p={5}
      rounded="lg"
    />
  ),
}
