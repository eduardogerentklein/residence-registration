import Image from 'next/image'

import Logo from '../../public/images/cognyte-logo.svg'

import NavigationLink from './NavigationLink.js'

const Navigation = ({ links }) => {
  return (
    <div className='flex items-center mx-4 md:mx-36 my-3 md:my-14'>
      <Image src={Logo} height={64} width={64} />
      <nav className='bg-white-100 w-full flex items-center h-12 md:h-16 ml-1 md:ml-14 px-6 py-3 rounded rounded-lg border border-black-25 filter drop-shadow-lg shadow'>
        <div className='flex items-center md:space-x-4'>
          {links.map(link => (
            <NavigationLink key={link.id} route={link.route}>
              {link.name}
            </NavigationLink>
          ))}
        </div>
      </nav>
    </div>
  )
}

export default Navigation
