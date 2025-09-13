import * as React from 'react'

import Link from 'next/link'

import { socialLinks } from '@/lib/configs/links'

const SocialLinks = () => {
  return (
    <div className='flex gap-4 my-2'>
      {socialLinks.map(({ href, icon: Icon, name }) => (
        <Link
          key={href}
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={`${name} link`}
          title={name}
          className='text-yellow-500 hover:text-accent/80 transition-colors'
        >
          <Icon aria-hidden className='size-6' />
        </Link>
      ))}
    </div>
  )
}

export default SocialLinks
