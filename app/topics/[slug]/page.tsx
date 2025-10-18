import { Suspense, cache } from 'react'
import { notFound } from 'next/navigation'
import { TopicPostsLoading } from '@/components/ui/topic-posts.loading'
import { TopicPostsServer } from '@/components/ui/topic-posts.server'
import {
  GetTopicPostsResult,
  getTopicPosts,
} from '@/lib/api/blog/get-topic-posts'
import { env } from '@/lib/env'
import { generatePageMetadata } from '@/lib/seo'

const getCachedTopicPosts = cache(getTopicPosts)

type TopicPostsPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: TopicPostsPageProps) {
  const { slug } = await params
  const result: GetTopicPostsResult = await getCachedTopicPosts({ slug })

  const topicName = result.data?.name ?? 'Unknown Topic'
  const topicDescription = result.data?.description ?? 'Unknown Topic'

  return generatePageMetadata({
    title: topicName,
    description: topicDescription,
    ogUrl: env.getTopicUrl({ slug }),
    shouldIndex: true,
    canonical: env.getTopicUrl({ slug }),
  })
}

export default async function TopicPostsPage({ params }: TopicPostsPageProps) {
  const { slug } = await params

  if (!slug) {
    return notFound()
  }

  return (
    <Suspense fallback={<TopicPostsLoading />}>
      <TopicPostsServer slug={slug} getCachedTopicPosts={getCachedTopicPosts} />
    </Suspense>
  )
}
