import type { Metadata } from 'next'
import { getScriboConfig } from './config'

export type PageMetadataProps = {
  title?: string | (() => Promise<string>)
  description?: string
  ogImage?: string
  ogImageWidth?: string
  ogImageHeight?: string
  ogUrl?: string
  keywords?: string[]
  shouldIndex?: boolean
  canonical?: string
  siteName?: string
  twitterHandle?: string
}

export async function generatePageMetadata({
  title,
  description,
  ogImage,
  ogImageWidth = '2400',
  ogImageHeight = '1256',
  ogUrl,
  keywords = [],
  shouldIndex = false,
  canonical,
  siteName,
  twitterHandle,
}: PageMetadataProps): Promise<Metadata> {
  // Get defaults from env if not provided
  const defaultSiteName =
    siteName || process.env.NEXT_PUBLIC_SITE_NAME || 'Blog'
  const defaultDescription =
    description ||
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'Articles, guides, and insights'
  const defaultTitle = title || defaultSiteName
  const defaultTwitterHandle = twitterHandle || process.env.NEXT_PUBLIC_TWITTER

  // Get default ogImage from config if not provided
  const config = getScriboConfig()
  const defaultOgImage = ogImage || config.ogImageUrl

  const resolvedTitle =
    typeof defaultTitle === 'function' ? await defaultTitle() : defaultTitle

  return {
    title: resolvedTitle,
    description: defaultDescription,
    openGraph: {
      images: defaultOgImage
        ? [
            {
              url: defaultOgImage,
              width: ogImageWidth,
              height: ogImageHeight,
            },
          ]
        : [],
      url: ogUrl,
      siteName: defaultSiteName,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      site: defaultTwitterHandle,
      creator: defaultTwitterHandle,
      title: resolvedTitle,
      description: defaultDescription,
      images: defaultOgImage ? [{ url: defaultOgImage }] : [],
    },
    keywords: keywords.length > 0 ? keywords.join(', ') : undefined,
    robots: {
      index: shouldIndex,
      follow: shouldIndex,
    },
    alternates: canonical ? { canonical } : undefined,
  }
}
