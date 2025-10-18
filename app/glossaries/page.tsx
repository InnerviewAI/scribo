import { Suspense } from 'react'
import { GlossariesLoading } from '@/components/ui/glossaries-loading'
import { GlossariesServer } from '@/components/ui/glossaries.server'
import { generatePageMetadata } from '@/lib/seo'

export function generateMetadata() {
  return generatePageMetadata({
    title: 'Glossaries',
    description:
      'Explore key terms and concepts to help you understand the world of user research and product development.',
    shouldIndex: true,
    canonical: 'https://innerview.co/glossaries',
  })
}

export default function GlossariesPage() {
  return (
    <div className="flex flex-col gap-4">
      <Suspense fallback={<GlossariesLoading />}>
        <GlossariesServer />
      </Suspense>
    </div>
  )
}
