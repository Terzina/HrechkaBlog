'use client'

import { useEffect, useMemo, useState } from 'react'

import { Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'

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
    return null
  }

  return (
    <button onClick={() => setTheme(nextMode)}>
      {isDark ? <Sun className='h-5 w-5' /> : <Moon className='h-5 w-5' />}
    </button>
  )
}

export default ThemeSwitch
