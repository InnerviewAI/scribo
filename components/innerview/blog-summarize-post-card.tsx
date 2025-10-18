'use client'

import { Stars02 } from '@untitled-ui/icons-react'
import React, { useState } from 'react'
import { MarkdownViewer } from '@/components/ui/markdown-viewer'
import { ResponseLoading } from '@/components/ui/response-loading'
import { useGetPostSummary } from '@/lib/api/blog/use-get-post-summary'
import { Blog10xInsightsCard } from './blog-10x-insights-card'
import { LandingButton } from './landing-button'

export const BlogSummarizePostCard: React.FC<{ blogPostId: string }> = ({
  blogPostId,
}) => {
  const { summary, isGenerating, error, fetchPostSummary } = useGetPostSummary()
  const [isExpanded, setIsExpanded] = useState(false)

  const handleSummarizePost = () => {
    if (!summary && !isGenerating) {
      fetchPostSummary({ id: blogPostId })
      setIsExpanded(true)
    } else {
      setIsExpanded(!isExpanded)
    }
  }

  return (
    <div className="mx-2 my-4 w-full overflow-hidden rounded-2xl border border-accent-light bg-primary p-4 shadow-md md:mx-4 md:w-[735px] md:p-6 md:shadow-lg">
      <div
        className="flex cursor-pointer flex-col items-center gap-1 sm:flex-row md:gap-10"
        onClick={handleSummarizePost}
      >
        <h2 className="font-display flex grow items-center font-bold">
          Short on time? Get instant insights with an AI summary of this post.
        </h2>
        {!isGenerating && !summary && (
          <div className="mt-4 flex shrink-0 items-center sm:mt-0 sm:self-stretch">
            <LandingButton
              onClick={handleSummarizePost}
              className="h-full whitespace-nowrap"
              variant="filled"
              icon={<Stars02 className="h-4 w-4 text-accent-light" />}
            >
              Summarize
            </LandingButton>
          </div>
        )}
      </div>

      {isExpanded && (
        <div className="my-4">
          {isGenerating && <ResponseLoading className="mt-4" />}
          {error && <p className="text-error mt-4">{error}</p>}
          {summary && <MarkdownViewer content={summary} />}
        </div>
      )}

      {summary && (
        <div className="mt-4 border-t pt-4">
          <Blog10xInsightsCard variant="nested" />
        </div>
      )}
    </div>
  )
}
