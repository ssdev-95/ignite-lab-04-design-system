import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export interface TextProps {
  size?: 'small' | 'medium' | 'large'
  asChild?: boolean
  children: ReactNode
}

export function Text({ size = 'small', asChild = false, children }: TextProps) {
  const Component = asChild ? Slot : 'span'

  return (
    <Component
      className={clsx('text-gray-400 font-sans', {
        'text-sm': size === 'small',
        'text-md': size === 'medium',
        'text-lg': size === 'large',
      })}
    >
      {children}
    </Component>
  )
}
