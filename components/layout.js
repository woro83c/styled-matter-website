import UI from '../lib/ui'

const { Div } = UI

function Layout({ children }) {
  return (
    <Div maxWidth={1280} mx="auto" px={8}>
      {children}
    </Div>
  )
}

export default Layout
