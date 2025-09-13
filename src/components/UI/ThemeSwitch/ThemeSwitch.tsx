'use client'

import { useEffect, useMemo, useState } from 'react'

import { Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'

import Button from '@/components/UI/Button'

export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
}

const ThemeSwitch = () => {
  const [mount, setMount] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  const isDark = useMemo(() => resolvedTheme === ThemeMode.DARK, [resolvedTheme])
  const nextMode = isDark ? ThemeMode.LIGHT : ThemeMode.DARK

  useEffect(() => {
    setMount(true)
  }, [])

  if (!mount) {
    return <Button variant='ghost' aria-hidden='true' />
  }

  return (
    <Button
      variant='ghost'
      disabled={!mount}
      className='relative [&_svg]:size-5 p-0 transition-colors w-5'
      onClick={() => setTheme(nextMode)}
      aria-label={`Switch to ${nextMode} mode`}
    >
      <Sun
        className={`h-5 w-5 transition-all duration-300 ${
          isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
        }`}
      />
      <Moon
        className={`h-5 w-5 absolute object-center transition-all duration-300 ${
          isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
        }`}
      />
    </Button>
  )
}

export default ThemeSwitch
