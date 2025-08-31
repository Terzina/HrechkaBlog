'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavLinkProps = {
  href: string
  label: string
}

const NavLink = ({ href, label }: NavLinkProps) => {
  const pathname = usePathname()
  const active = pathname === href
  return (
    <Link
      href={href}
      className={[
        'px-2 py-1 font-secondary font-medium',
        active ? 'text-link' : 'text-text/80 hover:text-link',
      ].join(' ')}
      aria-current={active ? 'page' : undefined}
      suppressHydrationWarning
    >
      {label}
    </Link>
  )
}

export default NavLink
