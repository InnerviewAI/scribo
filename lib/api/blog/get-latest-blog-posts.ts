import { BlogPostListItem } from './types'

export type GetLatestBlogPostsResult = {
  data?: { posts: BlogPostListItem[] }
  error?: string
}

export type GetLatestBlogPostsProps = {
  limit?: number
}

export async function getLatestBlogPosts({
  limit = 10,
}: GetLatestBlogPostsProps = {}): Promise<GetLatestBlogPostsResult> {
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

  const url = new URL(`${domain}/api/v1/posts`)
  url.searchParams.append('limit', limit.toString())

  const response = await fetch(url.toString(), {
    method: 'GET',
    headers: {
      'X-API-Key': apiKey,
    },
    next: { revalidate: 3600 }, // revalidate every hour
  })

  if (!response.ok) {
    const errorData = await response.json()
    const errorMessage = errorData.message || response.statusText
    return { error: errorMessage }
  }

  const data = (await response.json()) as { posts: BlogPostListItem[] }
  return { data }
}
