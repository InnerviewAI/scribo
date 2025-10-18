import { Suspense, cache } from 'react'
import Link from 'next/link'
import { DefaultBlogPageHero } from '@/components/default/blog-page-hero'
import { LatestBlogPostsLoading } from '@/components/ui/latest-blog-posts.loading'
import { LatestBlogPostsServer } from '@/components/ui/latest-blog-posts.server'
import { getLatestBlogPosts } from '@/lib/api/blog/get-latest-blog-posts'
import { getScriboConfig } from '@/lib/config'
import { env } from '@/lib/env'
import { generatePageMetadata } from '@/lib/seo'

const getCachedLatestBlogPosts = cache(getLatestBlogPosts)

export function generateMetadata() {
  return generatePageMetadata({
    title: 'Inner Dialogue',
    description: 'Guides, tips, and insights for building the best products',
    shouldIndex: true,
    canonical: 'https://innerview.co/blog',
  })
}

export default function Blog() {
  const config = getScriboConfig()
  const BlogPageHero = config.components?.BlogPageHero ?? DefaultBlogPageHero

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <BlogPageHero />
          <Link href={env.getTopicUrl()} className="text-sm">
            Explore all topics
          </Link>
        </div>
        <h2 className="mb-4 max-w-4xl pl-1 text-sm opacity-65">
          The latest guides, tips, and insights for building the best products
        </h2>
        <Suspense fallback={<LatestBlogPostsLoading />}>
          <LatestBlogPostsServer
            getCachedLatestBlogPosts={getCachedLatestBlogPosts}
          />
        </Suspense>
      </div>
    </>
  )
}
