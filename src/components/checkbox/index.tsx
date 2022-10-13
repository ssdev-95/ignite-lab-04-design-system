import * as RCheckbox from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

import { Text } from '../text'

export interface CheckboxProps {
  children?: string
}

export function Checkbox({ children }: CheckboxProps) {
    return (
        <label className="flex items-center gap-2">
            <RCheckbox.Root className="bg-gray-800 h-6 w-6 p-[2px]">
                <RCheckbox.CheckboxIndicator>
                    <Check weight="bold" className="h-5 w-5 text-green-400" />
                </RCheckbox.CheckboxIndicator>
            </RCheckbox.Root>

            <Text size="medium">{children}</Text>
        </label>
    )
}
