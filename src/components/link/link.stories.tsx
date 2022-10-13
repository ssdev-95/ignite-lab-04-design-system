import { Meta, StoryObj } from '@storybook/react'
import { Link, LinkProps } from '.'

export default {
    title: 'Components/Link',
    component: Link,
    args: {
        href: '#',
        children: 'Salame world',
    },
    argTypes: {},
} as Meta<LinkProps>

export const Default: StoryObj<LinkProps> = {}
