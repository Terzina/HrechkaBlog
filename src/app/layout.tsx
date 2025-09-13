import { Montserrat, Montserrat_Alternates } from 'next/font/google'

import Providers from '@/app/providers'
import Header from '@/components/Header/Header'
import { siteConfig } from '@/lib/configs/site'

import type { Metadata } from 'next'

import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const montserratAlternates = Montserrat_Alternates({
  subsets: ['latin'],
  variable: '--font-montserrat-alternates',
  style: ['normal', 'italic'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${montserratAlternates.variable} antialiased h-[2200px]`}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
