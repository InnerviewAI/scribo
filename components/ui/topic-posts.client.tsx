'use client'

import React from 'react'
import Link from 'next/link'
import { BlogCard } from '@/components/ui/blog-card'
import { BlogPost, BlogPostTopicPostsResponse } from '@/lib/api/blog/types'
import { env } from '@/lib/env'

type TopicPostsClientProps = {
  data: BlogPostTopicPostsResponse
}

export const TopicPostsClient: React.FC<TopicPostsClientProps> = ({ data }) => {
  const { posts } = data
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-4xl font-extrabold capitalize">{data.name}</h1>
          <Link href={env.getTopicUrl()} className="text-sm">
            Explore all topics
          </Link>
        </div>
        <h2 className="max-w-4xl pl-1 text-sm opacity-65">
          {data.description}
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {posts.length === 0 && (
          <div className="col-span-full py-8 text-center">
            <p className="text-lg opacity-50">No posts yet</p>
          </div>
        )}
        {posts.map((post) => {
          const blogPost = post as BlogPost
          return (
            <BlogCard
              key={blogPost.slug}
              title={blogPost.seoTitle ?? blogPost.title}
              metaDescription={blogPost.metaDescription || ''}
              href={env.getBlogUrl({ slug: blogPost.slug })}
              date={blogPost.publishedAt}
            />
          )
        })}
      </div>
    </div>
  )
}
