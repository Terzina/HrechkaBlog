import { Sun, Moon } from 'lucide-react'

import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta = {
  title: 'UI/LucideIcons',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj

const IconBox = ({ children }: { children: React.ReactNode }) => (
  <div className='flex items-center gap-4 p-4 text-gray-800 dark:text-gray-200'>{children}</div>
)

export const Default: Story = {
  render: () => (
    <div className='grid gap-4'>
      <IconBox>
        <Sun className='w-6 h-6' /> Sun
      </IconBox>
      <IconBox>
        <Moon className='w-6 h-6' /> Moon
      </IconBox>
    </div>
  ),
}
