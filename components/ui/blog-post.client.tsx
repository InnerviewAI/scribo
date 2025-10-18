import { ComponentType } from 'react'
import Link from 'next/link'
import { DefaultBlogAuthorInfo } from '@/components/default/blog-author-info'
import { DefaultBlogSummarizeCard } from '@/components/default/blog-summarize-card'
import { DefaultTryProductCard } from '@/components/default/try-product-card'
import { BlogPostResponse, BlogPostTopic } from '@/lib/api/blog/types'
import { env } from '@/lib/env'
import { AssembledBlogPost } from './assembled-blog-post'
import { RelatedTopics } from './related-topics'
import { SimilarPosts } from './similar-posts'

type BlogPostClientProps = {
  post: BlogPostResponse
  topics: BlogPostTopic[]
  BlogSummarizeCard?: ComponentType<{ blogPostId: string }>
  TryProductCard?: ComponentType
  MidArticleUpsell?: ComponentType
  BlogAuthorInfo?: ComponentType<{ lastUpdatedAt: string }>
}

export const BlogPostClient = ({
  post,
  topics,
  BlogSummarizeCard = DefaultBlogSummarizeCard,
  TryProductCard = DefaultTryProductCard,
  MidArticleUpsell,
  BlogAuthorInfo = DefaultBlogAuthorInfo,
}: BlogPostClientProps) => {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-4 lg:border-b">
      <div className="flex items-center gap-2">
        <Link className="text-xs text-dark" href={env.getBlogUrl()}>
          Blog
        </Link>
        <span className="text-xs text-dark">/</span>
        <Link href={env.getTopicUrl({ slug: post.topic.slug })}>
          {post.topic.name && (
            <span className="rounded-full border border-dark px-2 py-0.5 text-xs text-dark">
              {post.topic.name}
            </span>
          )}
        </Link>
      </div>
      <div className="space-y-2">
        <h1 className="rounded-lg bg-blog-header px-4 pt-4 pb-6 text-3xl font-extrabold md:text-6xl">
          {post.seoTitle ?? post.title}
        </h1>
        <h2 className="pl-4 text-sm opacity-65">{post.metaDescription}</h2>
      </div>
      <div className="relative flex max-w-6xl flex-col gap-6 lg:flex-row">
        <div className="flex flex-col gap-2">
          <BlogSummarizeCard blogPostId={post.id} />
          <div className="mt-4 flex max-w-3xl flex-col gap-2 overflow-hidden rounded-t-lg border border-b lg:border-b-0">
            <AssembledBlogPost
              blogPostSections={post.sections}
              associatedPosts={post.linkedPosts}
              MidArticleUpsell={MidArticleUpsell}
            />
            {post.linkedPosts && post.linkedPosts.length > 0 && (
              <SimilarPosts posts={post.linkedPosts} />
            )}
            {topics.length > 0 && (
              <RelatedTopics currentTopic={post.topic} topics={topics} />
            )}
          </div>
        </div>
        <div className="sticky top-0 flex h-fit w-56 flex-col items-center px-4 pb-4 lg:px-0">
          <BlogAuthorInfo lastUpdatedAt={post.publishedAt} />
          <TryProductCard />
        </div>
      </div>
    </div>
  )
}
