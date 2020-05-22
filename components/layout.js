import Head from 'next/head'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import menu from '../lib/menu'
import UI from '../lib/ui'
import { Link, Logomark } from '.'

const { After, Div, H1, Header, LI, Main, UL } = UI

function Layout({ children, meta: { title } = {} }) {
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
      {title && (
        <Head>
          <title>{title} - Styled Matter</title>
        </Head>
      )}

      <Header borderRight="1px solid" borderRightColor="gray.100" py={12}>
        <Div position="fixed" pr={8} width={200} trim>
          <NextLink href="/" passHref>
            <H1 as="a" alignItems="center" display="inline-flex">
              <Logomark height="100%" width={63} />
              <After visibility="hidden">\00a0</After>
            </H1>
          </NextLink>

          {!!menu.length && (
            <UL fontSize={1} fontWeight={500} listUnstyled trim>
              {menu.map(({ children, href }, index) => (
                <LI key={index} mb={4}>
                  <Link color={href === pathname ? 'primary' : 'black'} href={href}>
                    {children}
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
