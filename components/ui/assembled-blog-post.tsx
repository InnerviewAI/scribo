import React from 'react'
import { DefaultMidArticleUpsell } from '@/components/default/mid-article-upsell'
import { MarkdownViewer } from '@/components/ui/markdown-viewer'
import { BlogPostSection, LinkedPost } from '@/lib/api/blog/types'
import { env } from '@/lib/env'

export function AssembledBlogPost({
  blogPostSections,
  associatedPosts,
  MidArticleUpsell = DefaultMidArticleUpsell,
}: {
  blogPostSections: BlogPostSection[]
  associatedPosts: LinkedPost[]
  MidArticleUpsell?: React.ComponentType
}): React.ReactElement {
  if (blogPostSections.length === 0) {
    return <MarkdownViewer content="*No post content yet*" />
  }

  // limit to 3 posts within the entire blog post
  const firstThreePosts = associatedPosts.slice(0, 3)

  const addDiscoverMoreInsights = (
    content: string,
    associatedPost: LinkedPost,
  ) => {
    return `${content}\n* * *\nDiscover more insights in: [${associatedPost.title}](${env.getBlogUrl({ slug: associatedPost.slug })})\n* * *\n`
  }

  const introSection = blogPostSections[0]
  const remainingSections = blogPostSections.slice(1)

  const assembleContent = (sections: BlogPostSection[]) => {
    return sections
      .map((section, index) => {
        let sectionContent = `## ${section.title}\n\n${section.content || ''}`

        const associatedPostIndex = Math.min(Math.floor(index / 2), 2)
        const associatedPost = firstThreePosts[associatedPostIndex]

        if (index % 2 === 1 && associatedPost) {
          sectionContent = addDiscoverMoreInsights(
            sectionContent,
            associatedPost,
          )
        }

        if (
          index === sections.length - 1 &&
          associatedPostIndex < firstThreePosts.length - 1
        ) {
          const nextAssociatedPost = firstThreePosts[associatedPostIndex + 1]
          if (nextAssociatedPost) {
            sectionContent = addDiscoverMoreInsights(
              sectionContent,
              nextAssociatedPost,
            )
          }
        }

        return sectionContent
      })
      .join('\n\n')
  }

  return (
    <>
      <MarkdownViewer
        content={assembleContent([introSection])}
        className="w-full px-4 pt-4 pb-12"
        proseSize="base"
      />
      <MidArticleUpsell />
      <MarkdownViewer
        content={assembleContent(remainingSections)}
        className="w-full px-4 pt-4 pb-12"
        proseSize="base"
      />
    </>
  )
}
