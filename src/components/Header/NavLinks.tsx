import NavLink from '@/components/UI/NavLink'

const navConfig = [
  { href: '/about', label: 'про нас' },
  { href: '/recipes', label: 'рецепти' },
  { href: '/blog', label: 'блог' },
  { href: '/contacts', label: 'контакти' },
]

const NavLinks = () => {
  return (
    <nav className={'flex justify-between gap-1 md:gap-4 w-full md:max-w-[600px]'}>
      {navConfig.map(({ href, label }) => (
        <NavLink key={href} href={href} label={label} />
      ))}
    </nav>
  )
}

export default NavLinks
