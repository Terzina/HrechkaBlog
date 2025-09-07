import { useState } from 'react'

import BurgerButton from '@/components/UI/BurgerMenu/BurgerButton'

const BurgerMenu = () => {
  const [isOpenMenu, setOpenMenu] = useState(false)

  const handleClickBurgerMenu = () => setOpenMenu(!isOpenMenu)

  return <BurgerButton isOpen={isOpenMenu} onClick={handleClickBurgerMenu} />
}

export default BurgerMenu
