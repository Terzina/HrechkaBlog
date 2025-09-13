'use client'

import React from 'react'

import { Menu, X } from 'lucide-react'

import Heading from '@/components/UI/Heading'

import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import AppDrawer from './AppDrawer'

const meta: Meta<typeof AppDrawer> = {
  title: 'UI/AppDrawer',
  component: AppDrawer,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AppDrawer>

export const Default: Story = {
  args: {
    trigger: <Menu />,
    close: <X />,
    title: <Heading level='h3'>Navigation</Heading>,
    content: (
      <ul className='space-y-2'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>Recipes</a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
      </ul>
    ),
    footer: (
      <div className='flex justify-between items-center'>
        <span>© 2025 Hrechka Blog</span>
      </div>
    ),
  },
}

export const WithCustomTrigger: Story = {
  args: {
    trigger: <button className='p-2 bg-yellow-500 text-white rounded'>Open Menu</button>,
    close: <X />,
    title: <Heading level='h3'>Custom Trigger</Heading>,
    content: <p className='text-sm'>You can put anything inside the drawer.</p>,
  },
}
