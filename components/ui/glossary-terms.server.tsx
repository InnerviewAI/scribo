import { redirect } from 'next/navigation'
import {
  GetGlossaryProps,
  GetGlossaryResult,
} from '@/lib/api/glossaries/get-glossary'
import { env } from '@/lib/env'
import { GlossaryTermsClient } from './glossary-terms.client'

type GlossaryTermsServerProps = {
  slug: string
  getCachedGlossary: (props: GetGlossaryProps) => Promise<GetGlossaryResult>
}

export async function GlossaryTermsServer({
  slug,
  getCachedGlossary,
}: GlossaryTermsServerProps) {
  const result = await getCachedGlossary({ slug })

  if (result.error) {
    console.error('Error fetching glossary:', result.error)
    redirect(env.getGlossaryUrl())
  }

  const glossary = result.data

  if (!glossary) {
    redirect(env.getGlossaryUrl())
  }

  return <GlossaryTermsClient glossary={glossary} />
}
