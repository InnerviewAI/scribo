'use client'

import React from 'react'
import { BlogPostListItem } from '@/lib/api/blog/types'
import { BlogCard } from './blog-card'

type LatestBlogPostsClientProps = {
  data: BlogPostListItem[]
  baseUrl?: string
}

export const LatestBlogPostsClient: React.FC<LatestBlogPostsClientProps> = ({
  data,
  baseUrl = '',
}) => {
  if (!Array.isArray(data)) {
    console.error('LatestBlogPostsClient: data is not an array', data)
    return <div className="text-red-500">Error loading blog posts</div>
  }

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      {data.map((post) => (
        <BlogCard
          key={post.slug}
          title={post.title}
          metaDescription={post.metaDescription || ''}
          href={`${baseUrl}/blog/${post.slug}`}
          date={post.publishedAt || post.updatedAt || post.createdAt}
        />
      ))}
    </div>
  )
}
