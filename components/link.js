import NextLink from 'next/link'
import UI from '../lib/ui'

const { A } = UI

function Link(props) {
  const { href } = props

  if (href.startsWith('/')) {
    return (
      <NextLink href={href}>
        <A {...props} />
      </NextLink>
    )
  }

  if (href.includes('@') || href.startsWith('#')) {
    return <A {...props} />
  }

  return <A {...props} target="_blank" rel="noopener noreferrer" />
}

export default Link
