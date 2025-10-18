'use client'

import { useCallback, useState } from 'react'
import {
  GetPostSummaryProps,
  GetPostSummaryResult,
  getPostSummary,
} from './get-post-summary'

export function useGetPostSummary() {
  const [summary, setSummary] = useState<string | undefined>(undefined)
  const [isGenerating, setIsGenerating] = useState(false)
  const [error, setError] = useState<string | undefined>(undefined)

  const fetchPostSummary = useCallback(async ({ id }: GetPostSummaryProps) => {
    setIsGenerating(true)
    setError(undefined)

    const startTime = Date.now()

    try {
      const result: GetPostSummaryResult = await getPostSummary({ id })

      // Add an artificial delay to simulate thinking in case it was pre-generated
      const elapsedTime = Date.now() - startTime
      const minDelay = 1000 // Minimum delay of 1 second
      const maxDelay = 3000 // Maximum delay of 3 seconds

      if (elapsedTime < minDelay) {
        // If the response was fast, add a delay
        await new Promise((resolve) =>
          setTimeout(
            resolve,
            Math.min(maxDelay - elapsedTime, maxDelay - minDelay),
          ),
        )
      }

      if (result.error) {
        setError(result.error)
      } else {
        setSummary(result.summary)
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'An unexpected error occurred',
      )
    } finally {
      setIsGenerating(false)
    }
  }, [])

  return {
    summary,
    isGenerating,
    error,
    fetchPostSummary,
  }
}
