import Link from 'next/link'

import LogoIcon from '@/components/icons/LogoIcon'

const Logo = () => {
  return (
    <Link href='/public' className='inline-flex items-center gap-2'>
      <LogoIcon />
      <p className='md:flex items-center gap-6 font-secondary text-3xl'>ГРЕЧКА</p>
    </Link>
  )
}

export default Logo
