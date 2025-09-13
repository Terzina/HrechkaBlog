import Link from 'next/link'

import LogoIcon from '@/components/icons/LogoIcon'
import { siteConfig } from '@/lib/configs/site'
import { cn } from '@/lib/utils'

interface LogoProps {
  wrapperClassName?: string
  titleClassName?: string
}

const Logo = ({ titleClassName, wrapperClassName }: LogoProps) => {
  return (
    <Link
      href='/'
      className={cn('inline-flex items-center gap-2', wrapperClassName)}
      aria-label='Go to homepage'
    >
      <LogoIcon />
      <p className={cn('md:flex items-center gap-6 font-secondary text-3xl', titleClassName)}>
        {siteConfig.name}
      </p>
    </Link>
  )
}

export default Logo
