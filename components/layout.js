import Link from 'next/link'
import { useRouter } from 'next/router'
import menu from '../lib/menu'
import UI from '../lib/ui'
import { H1, UL } from '../primitives'
import Logo from './logo'

const { A, Div, Header, LI, Main } = UI

function Layout({ children }) {
  const { pathname } = useRouter()

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
        <Div position="fixed" pr={8} width={200} trim>
          <H1
            as="div"
            alignItems="center"
            display="flex"
            xcss={{ '&::after': { content: '\\00a0' } }}
          >
            <Logo />
          </H1>

          {!!menu.length && (
            <UL fontSize={1} fontWeight={500} listUnstyled trim>
              {menu.map(({ children, href }, index) => (
                <LI key={index} mb={4}>
                  <Link href={href} passHref>
                    <A color={href === pathname ? 'primary' : 'black'}>{children}</A>
                  </Link>
                </LI>
              ))}
            </UL>
          )}
        </Div>
      </Header>
      <Main minWidth={0} p={12} trim>
        {children}
      </Main>
    </Div>
  )
}

export default Layout
