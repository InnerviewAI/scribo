import { notFound } from 'next/navigation'
import { GetPostProps, GetPostResult } from '@/lib/api/blog/get-post'
import { GetTopicsResult } from '@/lib/api/blog/get-topics'
import { getScriboConfig } from '@/lib/config'
import { BlogPostClient } from './blog-post.client'

type BlogPostServerProps = {
  slug: string
  getCachedPost: (props: GetPostProps) => Promise<GetPostResult>
  getCachedTopics: () => Promise<GetTopicsResult>
}

export async function BlogPostServer({
  slug,
  getCachedPost,
  getCachedTopics,
}: BlogPostServerProps) {
  const { data: post } = await getCachedPost({ slug })
  const { data: topics } = await getCachedTopics()

  if (!post) {
    notFound()
  }

  const config = getScriboConfig()

  return (
    <BlogPostClient
      post={post}
      topics={topics ?? []}
      BlogSummarizeCard={config.components?.BlogSummarizeCard}
      TryProductCard={config.components?.TryProductCard}
      MidArticleUpsell={config.components?.MidArticleUpsell}
      BlogAuthorInfo={config.components?.BlogAuthorInfo}
    />
  )
}
