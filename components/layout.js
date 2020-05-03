import UI from '../lib/ui'

const { Div } = UI

function Layout({ children }) {
  return (
    <Div maxWidth={1200} mx="auto">
      {children}
    </Div>
  )
}

export default Layout
