import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export interface HeadingProps {
  size?: 'small' | 'medium' | 'large'
	asChild?:boolean
	children: ReactNode
}

export function Heading({
  size='small',
	asChild=false,
	children
}: HeadingProps) {
	const Component = asChild ? Slot : 'h2'

	return (
	  <Component className={clsx(
		  'text-gray-100 font-sans flex items-center gap-1', {
		    'text-md': size==='small',
  			'text-lg': size==='medium',
  			'text-xl': size==='large',
  		}
		)}>
		  {children}
		</Component>
	)
}
