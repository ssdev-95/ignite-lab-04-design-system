import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '.'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Salame é bom',
  },
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
  args: {
    size: 'small',
  },
}

export const Medium: StoryObj<TextProps> = {
  args: {
    size: 'medium',
  },
}

export const Large: StoryObj<TextProps> = {
  args: {
    size: 'large',
  },
}

export const AsChild: StoryObj<TextProps> = {
  args: {
    children: <p>Salame é bom</p>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
}
