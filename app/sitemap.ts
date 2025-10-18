import { MetadataRoute } from 'next'
import { SitemapEntry, getSitemap } from '@/lib/api/blog/get-sitemap'
import { env } from '@/lib/env'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Don't generate sitemap for shadow deployments
  // to avoid duplicate content indexing issues
  if (env.isShadowDeployment()) {
    return []
  }

  const { data, error } = await getSitemap()

  if (error || !data) {
    console.error('Error fetching sitemap or no data returned:', error)
    return []
  }

  return data.map((entry: SitemapEntry) => ({
    url: entry.url,
    lastModified: entry.lastModified,
    changeFrequency:
      entry.changeFrequency as MetadataRoute.Sitemap[number]['changeFrequency'],
    priority: entry.priority,
  }))
}
