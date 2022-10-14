import { ButtonHTMLAttributes } from 'react'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="w-full text-gray-100 text-center font-sans bg-green-400 hover:bg-green-300 rounded p-3 mt-8"
      {...props}
    >
      {children}
    </button>
  )
}
