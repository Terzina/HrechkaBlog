import { navConfig } from '@/components/Header/NavLinks/navConfig'
import NavLink from '@/components/UI/NavLink'
import { cn } from '@/lib/utils'

interface NavLinksProps {
  className?: string
}

const NavLinks = ({ className }: NavLinksProps) => {
  return (
    <nav aria-labelledby='main-navigation' className='w-full flex'>
      <ul
        className={cn(
          'my-0 mx-auto hidden sm:flex justify-between gap-1 md:gap-4 w-full md:max-w-[600px]',
          className,
        )}
      >
        {navConfig.map(({ href, label }) => (
          <li key={href} className='text-left'>
            <NavLink href={href} label={label} />
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavLinks
