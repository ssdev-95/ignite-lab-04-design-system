import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '.'

export default {
  title: 'Components/Heading',
  component: Heading,
	args: {
		children: 'Salame é bom'
	},
	argTypes: {
	  size: {
		  options: ['small', 'medium', 'large'],
			control: {
			  type: 'inline-radio'
			}
		}
	}
} as Meta<HeadingProps>

export const Default:StoryObj<HeadingProps> = {}

export const Small:StoryObj<HeadingProps> = {
  args: {
	  size:'small'
	}
}

export const Medium:StoryObj<HeadingProps> = {
  args: {
	  size:'medium'
	}
}

export const Large:StoryObj<HeadingProps> = {
  args: {
	  size:'large'
	}
}

export const AsChild:StoryObj<HeadingProps> = {
  args: {
	  children: (
		  <h1>Salame é bom</h1>
		)
	},
	argTypes: {
	  children: {
		  table: {
		    disable: true
			}
		}
	}
}
