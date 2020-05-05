import { componentize } from 'styled-matter'
import UI from '../lib/ui'

export default componentize(
  <UI.Div
    bg="yellow.100"
    color="yellow.700"
    px={5}
    py={3}
    rounded="lg"
    xcss={{ a: { color: 'yellow.800', fontWeight: 700 } }}
    trim
  />
)
