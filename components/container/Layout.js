import Navigation from '../navigation/Navigation'

const links = [
  { name: 'Residence', route: '/', id: 1 },
  { name: 'Heat Map', route: '/map', id: 2 }
]
const Layout = ({ children }) => {
  return (
    <div>
      <Navigation links={links} />
      <>{children}</>
    </div>
  )
}

export default Layout
