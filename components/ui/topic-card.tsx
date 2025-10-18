import React from 'react'
import Link from 'next/link'
import { BlogPostTopic } from '@/lib/api/blog/types'

type TopicCardProps = BlogPostTopic & {
  href: string
}

export const TopicCard: React.FC<TopicCardProps> = ({
  name,
  description,
  href,
}) => {
  return (
    <Link
      href={href}
      className="flex flex-col overflow-hidden rounded-lg border transition-all hover:shadow-lg"
    >
      <div className="flex flex-1 flex-col justify-between rounded-b-lg bg-primary p-6">
        <div>
          <h2 className="font-display line-clamp-1 text-xl font-bold opacity-75">
            {name}
          </h2>
          <p className="mt-2 line-clamp-3 text-sm opacity-50">{description}</p>
        </div>
      </div>
    </Link>
  )
}
