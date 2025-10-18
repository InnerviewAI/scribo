import { Suspense, cache } from 'react'
import { GlossaryTermsLoading } from '@/components/ui/glossary-terms-loading'
import { GlossaryTermsServer } from '@/components/ui/glossary-terms.server'
import { getGlossary } from '@/lib/api/glossaries/get-glossary'
import { generatePageMetadata } from '@/lib/seo'

const getCachedGlossary = cache(getGlossary)

type GlossaryTermsPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: GlossaryTermsPageProps) {
  const { slug } = await params
  const { data } = await getCachedGlossary({ slug })

  return generatePageMetadata({
    title: data?.keyTerm ?? `Glossary: ${slug}`,
    description:
      data?.definition ?? 'Explore terms and definitions in this glossary.',
    shouldIndex: true,
    canonical: `https://innerview.co/glossaries/${slug}`,
  })
}

export default async function GlossaryTermsPage({
  params,
}: GlossaryTermsPageProps) {
  const { slug } = await params

  return (
    <div className="flex flex-col gap-4">
      <Suspense fallback={<GlossaryTermsLoading />}>
        <GlossaryTermsServer
          slug={slug}
          getCachedGlossary={getCachedGlossary}
        />
      </Suspense>
    </div>
  )
}
