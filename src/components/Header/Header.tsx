import Logo from '@/components/Header/Logo'
import NavLinks from '@/components/Header/NavLinks'
import ThemeSwitch from '@/components/UI/ThemeSwitch'

const Header = () => {
  return (
    <header className='sticky top-0 z-40 bg-background/80 backdrop-blur'>
      <div className='mx-auto max-w-7xl px-4 lg:px-6 h-16 flex items-center justify-between gap-4'>
        <Logo />
        <NavLinks />
        <div className='flex items-center gap-3'>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  )
}

export default Header
