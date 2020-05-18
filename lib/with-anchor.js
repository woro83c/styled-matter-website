import GithubSlugger from 'github-slugger'
import { Link } from '../components'
import { getDisplayName } from '../lib/util'

export default function withAnchor(WrappedComponent) {
  function WithAnchor({ children }) {
    const slugger = new GithubSlugger()
    const id = slugger.slug(children)

    return (
      <WrappedComponent id={id} xcss={{ '&:hover a': { opacity: 1 } }}>
        {children}

        <Link
          color="gray.300"
          href={`#${id}`}
          opacity={0}
          pl=".375em"
          xcss={{ '&:hover': { color: 'primary' }, '&:focus': { opacity: 1 } }}
        >
          #
        </Link>
      </WrappedComponent>
    )
  }

  WithAnchor.displayName = getDisplayName(WrappedComponent)
  WithAnchor.defaultProps = WrappedComponent.defaultProps

  return WithAnchor
}
