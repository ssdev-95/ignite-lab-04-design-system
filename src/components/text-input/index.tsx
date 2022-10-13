import { InputHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'

export interface TextInputRootProps {
  children: ReactNode
}

function TextInputRoot({ children }: TextInputRootProps) {
    return (
        <label className="w-full h-12 focus-within:ring-2 focus-within:ring-green-400 bg-gray-800 py-4 px-3 flex items-center gap-3 rounded mt-1">
            {children}
        </label>
    )
}

TextInputRoot.displayName = 'TextInput.Root'

interface TextInputIconProps {
  children: ReactNode
}

function TextInputIcon({ children }: TextInputIconProps) {
    return <Slot className="w-6 h-6">{children}</Slot>
}

TextInputIcon.displayName = 'TextInput.Icon'

type TextInputInputProps = InputHTMLAttributes<HTMLInputElement>

function TextInputInput(props: TextInputInputProps) {
    return (
        <input
            className="bg-transparent flex-1 group focus:outline-none hover:outline-none text-gray-100 placeholder:gray-300 text-md"
            {...props}
        />
    )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}
