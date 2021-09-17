import Link from 'next/link'
import { useRouter } from 'next/router'

import TextButton from '../typography/TextButton'

const NavigationLink = ({ route, children }) => {
  const router = useRouter()
  let className =
    'py-1 px-3 rounded-lg text-gray-600 dark:text-gray-300 font-medium transition'

  if (router.pathname === route) {
    className = `${className} bg-white-25`
  }

  return (
    <Link href={route}>
      <a className={className}>
        <TextButton size={2} className='text-black-75'>
          {children}
        </TextButton>
      </a>
    </Link>
  )
}

export default NavigationLink
