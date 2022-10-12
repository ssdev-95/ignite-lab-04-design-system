import { Meta, StoryObj } from '@storybook/react'
import { Form, FormProps } from '.'

export default {
  title: 'Components/Form',
  component: Form,
	args: {},
	argTypes: {
	  children: {
		  table: {
			  disable: true
			}
		}
	}
} as Meta<FormProps>

export const Default:StoryObj<FormProps> = {}
