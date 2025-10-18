import { Suspense, cache } from 'react'
import { notFound } from 'next/navigation'
import { BlogPostLoading } from '@/components/ui/blog-post.loading'
import { BlogPostServer } from '@/components/ui/blog-post.server'
import { getPost } from '@/lib/api/blog/get-post'
import { getTopics } from '@/lib/api/blog/get-topics'
import { env } from '@/lib/env'
import { generatePageMetadata } from '@/lib/seo'

const getCachedPost = cache(getPost)
const getCachedTopics = cache(getTopics)

type BlogPostPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params
  const { data } = await getCachedPost({ slug })

  return generatePageMetadata({
    title: data?.seoTitle ?? data?.title,
    description: data?.metaDescription,
    ogUrl: env.getBlogUrl({ slug: data?.slug }),
    shouldIndex: true,
  })
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { slug } = await params

  if (!slug) {
    return notFound()
  }

  return (
    <Suspense fallback={<BlogPostLoading />}>
      <BlogPostServer
        slug={slug}
        getCachedPost={getCachedPost}
        getCachedTopics={getCachedTopics}
      />
    </Suspense>
  )
}
