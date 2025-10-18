'use client'

import React from 'react'
import { BlogPostTopic } from '@/lib/api/blog/types'
import { env } from '@/lib/env'
import { TopicCard } from './topic-card'

type TopicsPageClientProps = {
  topics: BlogPostTopic[]
}

export const TopicsPageClient: React.FC<TopicsPageClientProps> = ({
  topics,
}) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-extrabold capitalize">Topics</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {topics.map((topic) => (
          <TopicCard
            key={topic.id}
            {...topic}
            href={env.getTopicUrl({ slug: topic.slug })}
          />
        ))}
      </div>
    </div>
  )
}
