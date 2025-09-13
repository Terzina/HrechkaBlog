'use client'

import React from 'react'

import { Menu, X } from 'lucide-react'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/UI/Drawer'

interface AppDrawerProps {
  trigger?: React.ReactNode
  close?: React.ReactNode
  title?: React.ReactNode
  footer?: React.ReactNode
  content?: React.ReactNode
}

const AppDrawer = ({
  trigger = <Menu />,
  close = <X />,
  title,
  footer,
  content,
}: AppDrawerProps) => {
  return (
    <Drawer direction='right'>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent className='h-full outline-none w-[310px]'>
        <div className='mx-auto w-full max-w-sm p-4'>
          <DrawerHeader>
            <DrawerClose className='flex justify-end'>{close}</DrawerClose>
            <DrawerTitle>{title}</DrawerTitle>
          </DrawerHeader>
          {content}
          <DrawerFooter>{footer}</DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default AppDrawer
