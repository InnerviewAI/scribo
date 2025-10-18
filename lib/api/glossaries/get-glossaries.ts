import { GlossariesResponse } from './types'

export type GetGlossariesResult = {
  data?: GlossariesResponse
  error?: string
}

export type GetGlossariesProps = {
  limit?: number
}

export async function getGlossaries({
  limit = 10,
}: GetGlossariesProps = {}): Promise<GetGlossariesResult> {
  const apiKey = process.env.GROWPILOT_API_KEY
  if (!apiKey) {
    throw new Error('GROWPILOT_API_KEY is not set in environment variables')
  }

  const domain = process.env.NEXT_PUBLIC_GROWPILOT_DOMAIN
  if (!domain) {
    throw new Error(
      'NEXT_PUBLIC_GROWPILOT_DOMAIN is not set in environment variables',
    )
  }

  const url = new URL(`${domain}/api/v1/glossaries`)
  url.searchParams.append('limit', limit.toString())

  const response = await fetch(url.toString(), {
    method: 'GET',
    headers: {
      'X-API-Key': apiKey,
    },
    next: { revalidate: 0 }, // always fetch fresh data
  })

  if (!response.ok) {
    const errorData = await response.json()
    const errorMessage = errorData.message || response.statusText
    return { error: errorMessage }
  }

  const data = (await response.json()) as GlossariesResponse
  return { data }
}
