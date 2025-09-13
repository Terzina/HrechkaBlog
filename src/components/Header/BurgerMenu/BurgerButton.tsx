import { Menu } from 'lucide-react'

import Button from '@/components/UI/Button'

type BurgerButtonProps = {
  onClick?: () => void
}

const BurgerButton = ({ onClick }: BurgerButtonProps) => {
  return (
    <Button onClick={onClick} variant='ghost' size='icon' className='sm:hidden gap-0'>
      <Menu />
    </Button>
  )
}
export default BurgerButton
