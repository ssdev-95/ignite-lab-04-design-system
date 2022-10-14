import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library'
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
        rest.post('/auth', (req, res, ctx) => {
          return res(
            ctx.json({
              message: 'Login successfull',
							data: req.params
            })
          )
        }),
      ],
    },
  },
} as Meta<SigninProps>

export const Default: StoryObj<SigninProps> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    userEvent.type(
      canvas.getByPlaceholderText('Type your email'),
      'ignaito_lab@rocketo.seat'
    )

    userEvent.type(
      canvas.getByPlaceholderText('Type your password'),
      'rocketo_seat@2022'
    )

    userEvent.click(canvas.getByRole('button'))

    await waitFor(() => {
      expect(
			  canvas.getByText('Login successfully')
			).toBeInTheDocument()
    })
  },
}
