export type BlogPostResponse = BlogPost & {
  topic: BlogPostTopic
  sections: BlogPostSection[]
  linkedPosts: LinkedPost[]
}

export type BlogPostTopicPostsResponse = BlogPostTopic & {
  posts: BlogPostListItem[]
}

// ========================
// Concrete Types
// ========================

export type BlogPost = {
  id: string
  title: string
  seoTitle?: string
  slug: string
  keywordsAndSearchTerms?: string
  linkedPosts?: LinkedPost[]
  metaDescription?: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export type BlogPostListItem = Pick<
  BlogPost,
  | 'id'
  | 'title'
  | 'metaDescription'
  | 'slug'
  | 'publishedAt'
  | 'updatedAt'
  | 'createdAt'
>

export type BlogPostSection = {
  id: string
  blogPostId?: string
  organizationId: string
  creatorId: string
  title: string
  content?: string
  orderIndex: number
  createdAt: string
  updatedAt: string
  deletedAt?: string
}

export type BlogPostTopic = {
  id: string
  name: string
  description: string
  slug: string
}

export type LinkedPost = Pick<
  BlogPost,
  | 'id'
  | 'title'
  | 'seoTitle'
  | 'metaDescription'
  | 'slug'
  | 'updatedAt'
  | 'createdAt'
  | 'publishedAt'
>
