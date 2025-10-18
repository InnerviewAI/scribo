import { notFound } from 'next/navigation'
import {
  GetTopicPostsProps,
  GetTopicPostsResult,
} from '@/lib/api/blog/get-topic-posts'
import { TopicPostsClient } from './topic-posts.client'

type TopicPostsServerProps = {
  slug: string
  getCachedTopicPosts: (
    props: GetTopicPostsProps,
  ) => Promise<GetTopicPostsResult>
}

export async function TopicPostsServer({
  slug,
  getCachedTopicPosts,
}: TopicPostsServerProps) {
  const { data, error } = await getCachedTopicPosts({ slug })

  if (error || !data) {
    notFound()
  }

  return <TopicPostsClient data={data} />
}
