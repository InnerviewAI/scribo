import { BlogPostTopic } from '@/lib/api/blog/types'
import { env } from '@/lib/env'

interface RelatedTopicsProps {
  currentTopic: BlogPostTopic
  topics: BlogPostTopic[]
}

export const RelatedTopics: React.FC<RelatedTopicsProps> = ({
  currentTopic,
  topics,
}) => {
  const filteredTopics = topics.filter((topic) => topic.id !== currentTopic.id)

  if (filteredTopics.length === 0) {
    return null
  }

  return (
    <div className="p-4">
      <h2 className="mb-4 text-2xl font-bold">Related Topics</h2>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
        {filteredTopics.map((topic) => (
          <a
            key={topic.id}
            href={env.getTopicUrl({ slug: topic.slug })}
            className="rounded-lg border p-2 text-center text-xs hover:bg-gray-100"
          >
            {topic.name}
          </a>
        ))}
      </div>
    </div>
  )
}
