import { cache } from 'react'
import { getTopics } from '@/lib/api/blog/get-topics'
import { TopicsPageClient } from './topics-list.client'

const getCachedTopics = cache(getTopics)

export async function TopicsPageServer() {
  const { data: topics, error } = await getCachedTopics()

  if (error) {
    return <div>Error: {error}</div>
  }

  if (!topics || topics.length === 0) {
    return <div>No topics found.</div>
  }

  return <TopicsPageClient topics={topics} />
}
