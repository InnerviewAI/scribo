import { BlogPostTopicPostsResponse } from './types'

export type GetTopicPostsResult = {
  data?: BlogPostTopicPostsResponse
  error?: string
}

export type GetTopicPostsProps = {
  slug: string
}

export async function getTopicPosts({
  slug,
}: GetTopicPostsProps): Promise<GetTopicPostsResult> {
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

  const response = await fetch(`${domain}/api/v1/topics/${slug}`, {
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

  const data = (await response.json()) as BlogPostTopicPostsResponse
  return { data }
}
