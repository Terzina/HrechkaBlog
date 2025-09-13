'use client'

import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import Divider from './Divider'

const meta: Meta<typeof Divider> = {
  title: 'UI/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Divider>

export const Default: Story = {
  args: {
    className: 'my-4 w-[50%]',
  },
}
