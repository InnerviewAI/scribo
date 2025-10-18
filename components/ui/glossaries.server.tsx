import { getGlossaries } from '@/lib/api/glossaries/get-glossaries'
import { GlossariesClient } from './glossaries.client'

export async function GlossariesServer() {
  const result = await getGlossaries({ limit: 50 })

  if (result.error) {
    return <div>Error loading glossaries: {result.error}</div>
  }

  const glossaries = result.data?.glossaries ?? []

  return <GlossariesClient glossaries={glossaries} />
}
