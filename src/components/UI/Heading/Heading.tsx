import type { HTMLAttributes, ReactNode } from 'react'

import { cn } from '@/lib/utils'

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4'

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level: HeadingLevel
  variant?: HeadingVariant
  children: ReactNode
}

type HeadingVariant = 'default' | 'drawer'

const styles: Record<HeadingLevel, string> = {
  h1: 'text-4xl font-extrabold',
  h2: 'text-3xl font-bold',
  h3: 'text-2xl font-semibold',
  h4: 'text-xl font-medium',
}

const variantStyles: Record<HeadingVariant, string> = {
  default: 'text-left',
  drawer: 'text-lg',
}

const Heading = ({
  level = 'h1',
  children,
  variant = 'default',
  className,
  ...props
}: HeadingProps) => {
  const Tag = level

  return (
    <Tag className={cn('text-left', styles[level], variantStyles[variant], className)} {...props}>
      {children}
    </Tag>
  )
}

export default Heading
