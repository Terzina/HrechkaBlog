import * as React from 'react'

import { cn } from '@/lib/utils'

type DividerProps = React.HTMLAttributes<HTMLDivElement>

const Divider = ({ className, ...props }: DividerProps) => {
  return <div className={cn('h-px w-full bg-gray-200', className)} role='separator' {...props} />
}

export default Divider
