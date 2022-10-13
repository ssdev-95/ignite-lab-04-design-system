import { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from '.'

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {
        children: 'Salame é bom?',
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            },
        },
    },
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}
