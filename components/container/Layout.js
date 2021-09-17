import navigationLinks from '../../data/navigationlinks.json'
import Navigation from '../navigation/Navigation'

const Layout = ({ children }) => {
  const { links } = navigationLinks
  return (
    <main>
      <Navigation links={links} />
      <>{children}</>
    </main>
  )
}

export default Layout
