import { MetadataRoute } from 'next'
import { env } from '@/lib/env'

export default function robots(): MetadataRoute.Robots {
  // If this is a shadow deployment, block all search engines
  // to prevent duplicate content indexing
  if (env.isShadowDeployment()) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    }
  }

  // If this is the main deployment, allow indexing
  const siteUrl = env.getMainAppUrl()
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
