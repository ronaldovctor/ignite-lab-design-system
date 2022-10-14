import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, getByRole, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { rest } from 'msw'
import { SignIn } from './SignIn'

export default {
	title: 'Components/Signin',
	component: SignIn,
	args: {},
	argTypes: {},
	parameters: {
		msw: {
			handlers: [
				rest.post('/sessions', (req, res, ctx) => {
					return res(
						ctx.json({
							message: 'Login realizado!',
						})
					)
				}),
			],
		},
	},
} as Meta

export const Default: StoryObj = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		userEvent.type(
			canvas.getByPlaceholderText('Digite seu e-mail'),
			'ronaldo@email.com'
		)
		userEvent.type(canvas.getByPlaceholderText('********'), '123456')

		userEvent.click(canvas.getByRole('button'))

		await waitFor(
			() => {
				return expect(canvas.getByText('Login realizado!')).toBeInTheDocument()
			},
			{
				interval: 100,
			}
		)
	},
}
