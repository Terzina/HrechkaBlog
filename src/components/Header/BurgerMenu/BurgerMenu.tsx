import * as React from 'react'

import AppDrawer from '@/components/AppDrawer'
import BurgerButton from '@/components/Header/BurgerMenu/BurgerButton'
import Logo from '@/components/Header/Logo'
import NavLinks from '@/components/Header/NavLinks'
import SocialLinks from '@/components/Header/SocialLinks'
import Divider from '@/components/UI/Divider'
import Heading from '@/components/UI/Heading'
import ThemeSwitch from '@/components/UI/ThemeSwitch'

interface DrawerSectionProps {
  id: string
  title: string
  children: React.ReactNode
  className?: string
}

const DrawerSection = ({ id, title, children, className }: DrawerSectionProps) => (
  <section aria-labelledby={id} className={className}>
    <Heading level='h3' variant='drawer' id={id}>
      {title}
    </Heading>
    <div className='mt-3'>{children}</div>
  </section>
)

const BurgerMenu = () => {
  return (
    <AppDrawer
      trigger={<BurgerButton />}
      title={
        <Logo titleClassName='text-2xl' wrapperClassName='[&_svg]:size-6 text-left w-full mb-5' />
      }
      content={
        <div className='flex flex-col justify-between h-[85%]'>
          <div className='flex flex-col justify-between h-3/4'>
            <DrawerSection id='drawer-nav' title='Навігація'>
              <NavLinks className='flex flex-col gap-2' />
            </DrawerSection>

            <Divider />

            <DrawerSection id='about-hrechka' title='Про Гречку'>
              <p className='text-sm text-gray-500'>
                Гречка – це кулінарний блог, присвячений смачним та здоровим рецептам без глютену.
                Ми прагнемо надихати вас на приготування страв, які підходять для людей з целіакією
                або тих, хто обирає безглютеновий спосіб життя.
              </p>
            </DrawerSection>

            <Divider />
          </div>
          <div>
            <DrawerSection id='follow-us' title='Підписуйтесь на нас'>
              <SocialLinks />
            </DrawerSection>

            <DrawerSection id='settings' title='Налаштування'>
              <ThemeSwitch />
            </DrawerSection>
          </div>
        </div>
      }
    />
  )
}

export default BurgerMenu
