import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Click me',
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {}

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
}

export const Link: Story = {
  args: {
    variant: 'link',
  },
}
