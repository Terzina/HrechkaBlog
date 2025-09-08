import type { Meta, StoryObj } from '@storybook/react'

import Logo from './Logo'

const meta: Meta<typeof Logo> = {
  title: 'UI/Logo',
  component: Logo,
  parameters: {
    nextRouter: {
      path: '/',
      asPath: '/',
      query: {},
    },
  },
  decorators: [(Story) => <Story />],
}

export default meta
type Story = StoryObj<typeof Logo>

export const Default: Story = {
  render: () => (
    <div className='flex justify-center align-middle'>
      <Logo />
    </div>
  ),
}
