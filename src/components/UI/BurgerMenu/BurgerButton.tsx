type BurgerButtonProps = {
  isOpen: boolean
  onClick: () => void
}

const BurgerButton = ({ isOpen, onClick }: BurgerButtonProps) => {
  const lineClasses = [
    isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5',
    isOpen ? 'opacity-0 my-0.5' : 'opacity-100 my-0.5',
    isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5',
  ]

  return (
    <button onClick={onClick} className='flex flex-col justify-center items-center sm:hidden'>
      {lineClasses.map((cls, i) => (
        <span
          key={i}
          className={`bg-surface block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${cls}`}
        />
      ))}
    </button>
  )
}
export default BurgerButton
