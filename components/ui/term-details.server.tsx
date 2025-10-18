import { redirect } from 'next/navigation'
import {
  GetGlossaryTermProps,
  GetGlossaryTermResult,
} from '@/lib/api/glossaries/get-glossary-term'
import { getScriboConfig } from '@/lib/config'
import { env } from '@/lib/env'
import { TermDetailsClient } from './term-details.client'

type TermDetailsServerProps = {
  glossarySlug: string
  termSlug: string
  getCachedGlossaryTerm: (
    props: GetGlossaryTermProps,
  ) => Promise<GetGlossaryTermResult>
}

export async function TermDetailsServer({
  glossarySlug,
  termSlug,
  getCachedGlossaryTerm,
}: TermDetailsServerProps) {
  const result = await getCachedGlossaryTerm({ glossarySlug, termSlug })

  if (result.error) {
    console.error('Error fetching term:', result.error)
    redirect(env.getGlossaryUrl())
  }

  const term = result.data

  if (!term) {
    redirect(env.getGlossaryUrl())
  }

  const config = getScriboConfig()

  return (
    <TermDetailsClient
      term={term}
      glossarySlug={glossarySlug}
      TryProductCard={config.components?.TryProductCard}
    />
  )
}
