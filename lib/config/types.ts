import { ComponentType } from 'react'

export type ScriboConfig = {
  // Site Metadata
  siteName: string
  siteDescription: string
  siteUrl: string
  ogImageUrl?: string

  // API Configuration
  api: {
    growPilotApiKey: string
    growPilotDomain: string
  }

  // Component Overrides (all optional)
  components?: {
    Header?: ComponentType
    Footer?: ComponentType
    CustomerLogos?: ComponentType<{ variant?: 'default' | 'small' }>
    BlogPageHero?: ComponentType
    UpsellBanner?: ComponentType
    MidArticleUpsell?: ComponentType
    BlogSummarizeCard?: ComponentType<{ blogPostId: string }>
    TryProductCard?: ComponentType
    BlogAuthorInfo?: ComponentType<{ lastUpdatedAt: string }>
  }

  // Theme Overrides (optional)
  theme?: {
    colors?: Record<string, string>
  }
}
