import { GlossaryWithTerms } from './types'

export type GetGlossaryResult = {
  data?: GlossaryWithTerms
  error?: string
}

export type GetGlossaryProps = {
  slug: string
}

export async function getGlossary({
  slug,
}: GetGlossaryProps): Promise<GetGlossaryResult> {
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

  const response = await fetch(`${domain}/api/v1/glossaries/${slug}`, {
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

  const data = (await response.json()) as GlossaryWithTerms
  return { data }
}
