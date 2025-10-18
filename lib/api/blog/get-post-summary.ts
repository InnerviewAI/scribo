export type GetPostSummaryResult = {
  summary?: string
  error?: string
}

export type GetPostSummaryProps = {
  id: string
}

export async function getPostSummary({
  id,
}: GetPostSummaryProps): Promise<GetPostSummaryResult> {
  const domain = process.env.NEXT_PUBLIC_GROWPILOT_DOMAIN
  if (!domain) {
    throw new Error(
      'NEXT_PUBLIC_GROWPILOT_DOMAIN is not set in environment variables',
    )
  }

  const response = await fetch(`${domain}/api/v1/posts/summarize?id=${id}`, {
    method: 'GET',
    next: { revalidate: 0 }, // always fetch fresh data
  })

  if (!response.ok) {
    const errorData = await response.json()
    console.error(errorData)
    const errorMessage = errorData.message || response.statusText
    return { error: errorMessage }
  }

  const data = (await response.json()) as { summary: string }
  return { summary: data.summary }
}
