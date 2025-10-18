/**
 * Custom Configuration
 *
 * This file demonstrates how to configure Scribo with custom components.
 * Replace the component imports and config values with your own branding.
 */
import type { ScriboConfig } from './lib/config/types'
import { Blog10xInsightsCard } from './components/innerview/blog-10x-insights-card'
import { InnerviewBlogAuthorInfo } from './components/innerview/blog-author-info'
import { InnerviewBlogPageHero } from './components/innerview/blog-page-hero'
import { BlogSummarizePostCard } from './components/innerview/blog-summarize-post-card'
import { InnerviewCustomerLogos } from './components/innerview/customer-logos'
import { InnerviewFooter } from './components/innerview/footer'
import { InnerviewHeader } from './components/innerview/header'
import { TryInnerviewCard } from './components/innerview/try-innerview-card'
import { InnerviewUpsellBanner } from './components/innerview/upsell-banner'

export const customConfig: Partial<ScriboConfig> = {
  siteName: 'Inner Dialogue',
  siteDescription: 'Guides, tips, and insights for building the best products',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://innerview.co',
  ogImageUrl:
    'https://innerview-public-assets.s3.amazonaws.com/og-image-and-twitter-card.png?1726134043', // Optional: Custom OpenGraph image URL

  api: {
    growPilotApiKey: process.env.GROWPILOT_API_KEY || '',
    growPilotDomain:
      process.env.NEXT_PUBLIC_GROWPILOT_DOMAIN || 'https://api.growpilot.com',
  },

  components: {
    Header: InnerviewHeader,
    Footer: InnerviewFooter,
    CustomerLogos: InnerviewCustomerLogos,
    UpsellBanner: InnerviewUpsellBanner,
    BlogPageHero: InnerviewBlogPageHero,
    BlogAuthorInfo: InnerviewBlogAuthorInfo,
    MidArticleUpsell: Blog10xInsightsCard,
    BlogSummarizeCard: BlogSummarizePostCard,
    TryProductCard: TryInnerviewCard,
  },
}
