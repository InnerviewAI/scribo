import { notFound } from 'next/navigation'
import {
  GetLatestBlogPostsProps,
  GetLatestBlogPostsResult,
} from '@/lib/api/blog/get-latest-blog-posts'
import { LatestBlogPostsClient } from './latest-blog-posts.client'

type LatestBlogPostsServerProps = {
  getCachedLatestBlogPosts: (
    props: GetLatestBlogPostsProps,
  ) => Promise<GetLatestBlogPostsResult>
  baseUrl?: string
}

export async function LatestBlogPostsServer({
  getCachedLatestBlogPosts,
  baseUrl,
}: LatestBlogPostsServerProps) {
  const result = await getCachedLatestBlogPosts({ limit: 12 })

  if (result.error || !result.data) {
    notFound()
  }

  return <LatestBlogPostsClient data={result.data.posts} baseUrl={baseUrl} />
}
