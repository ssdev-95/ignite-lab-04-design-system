import { Meta, StoryObj } from '@storybook/react'

import {
  within, userEvent, waitFor
} from '@storybook/testing-library'

import { expect } from '@storybook/jest'
import { rest } from 'msw'
import { Signin, SigninProps } from '.'

export default {
    title: 'Pages/Signin',
    component: Signin,
    args: {},
    argTypes: {
        children: {
            table: {
                disable: true,
            },
        },
    },
		parameters: {
		  msw: {
			  handlers: [
				  rest.post('/auth', (_req, res, ctx) => {
					  return res(ctx.json({
						  message: 'Login successfull'
						}))
					})
				]
			}
		}
} as Meta<SigninProps>

export const Default: StoryObj<SigninProps> = {
  play: async ({ canvasElement }) => {
	  const canvas = within(canvasElement)

		userEvent.type(
		  canvas.getByPlaceholderText('Type your email'),
			'salomas_mixto@quente.xyz'
		)

		userEvent.type(
		  canvas.getByPlaceholderText('Type your password'),
			'salame_eh_massa@123'
		)


		userEvent.click(canvas.getByRole('button'))

		await waitFor(() => {
		  expect(canvas.getByText('Login successfull!')).toBeInTheDocument()
		})
	}
}
