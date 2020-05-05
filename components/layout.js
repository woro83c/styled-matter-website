import Link from 'next/link'
import UI from '../lib/ui'
import Logo from './logo'

const { Div, H1, Header, LI, Main, UL } = UI

function Layout({ children }) {
  return (
    <Div
      display="grid"
      gridTemplateColumns="200px auto"
      maxWidth={1280}
      minHeight="100vh"
      mx="auto"
      px={8}
    >
      <Header borderRight="1px solid" borderRightColor="gray.100" py={12}>
        <Div position="fixed" pr={8} width={200}>
          <H1
            as="div"
            alignItems="center"
            display="flex"
            xcss={{ '&::after': { content: '\\00a0' } }}
          >
            <Logo />
          </H1>
          <UL fontSize={1} listUnstyled>
            <LI mb={4}>
              <Link href="/">
                <a>About Styled Matter</a>
              </Link>
            </LI>
            <LI mb={4}>
              <Link href="/getting-started">
                <a>Getting started</a>
              </Link>
            </LI>
            <LI mb={4}>
              <Link href="/responsive-styles">
                <a>Responsive styles</a>
              </Link>
            </LI>
            <LI mb={4}>
              <Link href="/extra-css">
                <a>Extra CSS</a>
              </Link>
            </LI>
            <LI mb={4}>
              <Link href="/pseudo-elements">
                <a>Pseudo-elements</a>
              </Link>
            </LI>
            <LI mb={4}>
              <Link href="/components">
                <a>Components</a>
              </Link>
            </LI>
            <LI mb={4}>
              <Link href="/custom-ui">
                <a>Custom UI</a>
              </Link>
            </LI>
          </UL>
        </Div>
      </Header>
      <Main minWidth={0} p={12} trim>
        {children}
      </Main>
    </Div>
  )
}

export default Layout
