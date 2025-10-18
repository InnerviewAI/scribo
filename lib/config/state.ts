import { DefaultBlogPageHero } from '@/components/default/blog-page-hero'
import { DefaultCustomerLogos } from '@/components/default/customer-logos'
import { DefaultFooter } from '@/components/default/footer'
import { DefaultHeader } from '@/components/default/header'
import { DefaultUpsellBanner } from '@/components/default/upsell-banner'
import { customConfig } from '@/config.customized'
import { ScriboConfig } from './types'

let config: ScriboConfig = {
  siteName: 'Scribo Blog',
  siteDescription: 'Guides, tips, and insights',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3033',
  api: {
    growPilotApiKey: process.env.GROWPILOT_API_KEY || '',
    growPilotDomain:
      process.env.NEXT_PUBLIC_GROWPILOT_DOMAIN || 'http://localhost:3000',
  },
  components: {
    Header: DefaultHeader,
    Footer: DefaultFooter,
    CustomerLogos: DefaultCustomerLogos,
    UpsellBanner: DefaultUpsellBanner,
    BlogPageHero: DefaultBlogPageHero,
  },
}

export const setScriboConfig = (
  newConfig: Partial<ScriboConfig> & { api?: Partial<ScriboConfig['api']> },
) => {
  config = {
    ...config,
    ...newConfig,
    api: {
      ...config.api,
      ...(newConfig.api || {}),
    },
    components: {
      ...config.components,
      ...(newConfig.components || {}),
    },
  }
}

export const getScriboConfig = () => config

export type { ScriboConfig }

// Apply custom configuration synchronously at module load
if (customConfig) {
  setScriboConfig(customConfig)
}
