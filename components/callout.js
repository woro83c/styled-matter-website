import { componentize } from 'styled-matter'
import UI from '../lib/ui'

export default componentize(
  <UI.Div
    bg="yellow.100"
    color="yellow.700"
    mb="6"
    p="3 5"
    xcss={{ a: { color: 'yellow.800', fontWeight: 700 } }}
    rounded
    trim
  />
)
