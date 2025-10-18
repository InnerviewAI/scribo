export type SitemapEntry = {
  url: string
  lastModified: string
  changeFrequency: string
  priority: number
}

export type GetSitemapResult = {
  data?: SitemapEntry[]
  error?: string
}

export type GetSitemapOptions = {
  includeTopics?: boolean
  includeGlossaries?: boolean
  blogPath?: string
  topicsPath?: string
  glossariesPath?: string
  siteUrl?: string
}

export async function getSitemap(
  options: GetSitemapOptions = {},
): Promise<GetSitemapResult> {
  const {
    includeTopics = true,
    includeGlossaries = true,
    blogPath = '/blog',
    topicsPath = '/topics',
    glossariesPath = '/glossaries',
    siteUrl,
  } = options

  const apiKey = process.env.GROWPILOT_API_KEY
  if (!apiKey) {
    throw new Error('GROWPILOT_API_KEY is not set in environment variables')
  }

  const domain = process.env.NEXT_PUBLIC_GROWPILOT_DOMAIN
  if (!domain) {
    throw new Error(
      'NEXT_PUBLIC_GROWPILOT_DOMAIN is not set in environment variables',
    )
  }

  // Use provided siteUrl or fallback to env
  const domainUrl =
    siteUrl ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_URL ||
    'http://localhost:3001'

  // Build the query parameters
  const params = new URLSearchParams({
    domainUrl,
    blogPath,
    topicsPath,
    glossariesPath,
  })

  if (includeTopics) {
    params.append('includeTopics', 'true')
  }

  if (includeGlossaries) {
    params.append('includeGlossaries', 'true')
  }

  const response = await fetch(
    `${domain}/api/v1/sitemap?${params.toString()}`,
    {
      method: 'GET',
      headers: {
        'X-API-Key': apiKey,
      },
      next: { revalidate: 0 }, // always fetch fresh data
    },
  )

  if (!response.ok) {
    const errorData = await response.json()
    const errorMessage = errorData.message || response.statusText
    return { error: errorMessage }
  }

  const data: SitemapEntry[] = await response.json()
  return { data }
}
