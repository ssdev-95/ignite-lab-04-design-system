import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'

import { TextInput, TextInputRootProps } from '.'

export default {
  title: 'Components/TextInput',
	component: TextInput.Root,
	args: {
    children: [
		  <TextInput.Icon>
			  <Envelope className="text-gray-400" />
			</TextInput.Icon>,
			<TextInput.Input placeholder="Salaminho" />
	  ]
	},
	argTypes: {
	  children: {
		  table: {
			  disable: true
			}
		}
	}
} as Meta<TextInputRootProps>

export const Default:StoryObj<TextInputRootProps> = {}
