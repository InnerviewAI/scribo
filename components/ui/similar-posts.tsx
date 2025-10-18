import { BlogCard } from '@/components/ui/blog-card'
import { LinkedPost } from '@/lib/api/blog/types'
import { env } from '@/lib/env'

interface SimilarPostsProps {
  posts: LinkedPost[]
}

export const SimilarPosts: React.FC<SimilarPostsProps> = ({ posts }) => {
  return (
    <div className="p-4">
      <h2 className="mb-4 text-2xl font-bold">Similar Posts</h2>
      <div className="relative">
        <div className="overflow-x-auto">
          <div className="flex space-x-4 pb-4">
            <>
              {posts.map((post) => (
                <div key={post.slug} className="w-64 flex-shrink-0">
                  <BlogCard
                    title={post.seoTitle ?? post.title}
                    href={env.getBlogUrl({ slug: post.slug })}
                    date={post.publishedAt}
                    metaDescription={post.metaDescription || ''}
                    size="small"
                  />
                </div>
              ))}
              <div className="w-4 flex-shrink-0" />
            </>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent"></div>
      </div>
    </div>
  )
}
