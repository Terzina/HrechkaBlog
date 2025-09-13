import type { ComponentType, SVGProps } from 'react'

import { YoutubeIcon, InstagramIcon, TikTokIcon } from '@/components/icons'

export type ExternalLinks = {
  youtube: string
  instagram: string
  tiktok: string
}

export type SocialLink = {
  name: string
  href: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

export const externalLinks: ExternalLinks = {
  youtube: 'https://www.youtube.com/@hrechkablog',
  instagram: 'https://www.instagram.com/ks_terzina',
  tiktok: 'https://www.tiktok.com/@hrechkablog',
}

export const socialLinks: SocialLink[] = [
  {
    name: 'YouTube',
    href: externalLinks.youtube,
    icon: YoutubeIcon,
  },
  {
    name: 'Instagram',
    href: externalLinks.instagram,
    icon: InstagramIcon,
  },
  {
    name: 'TikTok',
    href: externalLinks.tiktok,
    icon: TikTokIcon,
  },
]
