import { Suspense, cache } from 'react'
import { TermDetailsLoading } from '@/components/ui/term-details-loading'
import { TermDetailsServer } from '@/components/ui/term-details.server'
import { getGlossaryTerm } from '@/lib/api/glossaries/get-glossary-term'
import { generatePageMetadata } from '@/lib/seo'

const getCachedGlossaryTerm = cache(getGlossaryTerm)

type TermDetailsPageProps = {
  params: Promise<{ slug: string; termSlug: string }>
}

export async function generateMetadata({ params }: TermDetailsPageProps) {
  const { slug, termSlug } = await params
  const { data } = await getCachedGlossaryTerm({
    glossarySlug: slug,
    termSlug,
  })

  return generatePageMetadata({
    title: data?.term ?? `${termSlug} - ${slug}`,
    description:
      data?.definition ?? 'Learn about this term and its definition.',
    shouldIndex: true,
    canonical: `https://innerview.co/glossaries/${slug}/${termSlug}`,
  })
}

export default async function TermDetailsPage({
  params,
}: TermDetailsPageProps) {
  const { slug, termSlug } = await params

  return (
    <div className="flex flex-col gap-4">
      <Suspense fallback={<TermDetailsLoading />}>
        <TermDetailsServer
          glossarySlug={slug}
          termSlug={termSlug}
          getCachedGlossaryTerm={getCachedGlossaryTerm}
        />
      </Suspense>
    </div>
  )
}
