import { ReactNode } from 'react'
import { DefaultCustomerLogos } from '@/components/default/customer-logos'
import { DefaultFooter } from '@/components/default/footer'
import { DefaultHeader } from '@/components/default/header'
import { DefaultUpsellBanner } from '@/components/default/upsell-banner'
import { getScriboConfig } from '@/lib/config'

type GlossariesLayoutProps = {
  children: ReactNode
}

export default function GlossariesLayout({ children }: GlossariesLayoutProps) {
  const config = getScriboConfig()

  const Header = config.components?.Header ?? DefaultHeader
  const Footer = config.components?.Footer ?? DefaultFooter
  const CustomerLogos = config.components?.CustomerLogos ?? DefaultCustomerLogos
  const UpsellBanner = config.components?.UpsellBanner ?? DefaultUpsellBanner

  return (
    <main className="mt-4 flex min-h-screen w-full flex-col items-center gap-16 lg:mt-14">
      <Header />
      <CustomerLogos variant="small" />
      <div className="mx-auto w-full max-w-6xl px-4">{children}</div>
      <div className="flex w-full max-w-4xl flex-col items-center">
        <UpsellBanner />
      </div>
      <Footer />
    </main>
  )
}
