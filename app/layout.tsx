import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import '@/lib/config/state'
import { cn } from '@/lib/utils/cn'
import './globals.css'

// initializes defaults and applies brand config

const jakarta = Plus_Jakarta_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
})

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articles, guides, and insights',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn(jakarta.variable)}>
      <body
        className={cn(jakarta.className)}
        style={{ backgroundColor: '#FFFFFF' }}
      >
        {children}
      </body>
    </html>
  )
}
