import { ComponentType } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { DefaultTryProductCard } from '@/components/default/try-product-card'
import { MarkdownViewer } from '@/components/ui/markdown-viewer'
import { GlossaryTermWithGlossaryId } from '@/lib/api/glossaries/types'
import { env } from '@/lib/env'

type TermDetailsClientProps = {
  term: GlossaryTermWithGlossaryId
  glossarySlug: string
  TryProductCard?: ComponentType
}

export function TermDetailsClient({
  term,
  glossarySlug,
  TryProductCard = DefaultTryProductCard,
}: TermDetailsClientProps) {
  return (
    <div className="relative flex max-w-6xl flex-col gap-6 lg:flex-row">
      <div className="flex flex-col gap-2">
        <div className="mx-auto max-w-3xl space-y-10 pb-10">
          <Link
            href={env.getGlossaryUrl({ slug: glossarySlug })}
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors"
          >
            Glossaries
          </Link>

          <h1 className="pl-4 text-5xl font-black">{term.term}</h1>
          <div className="bg-secondary max-w-2xl space-y-6 rounded-2xl p-6 text-sm">
            <div className="flex items-start space-x-4">
              <div className="w-3/4">
                <h2 className="mb-2 text-xl font-black">
                  {term.definitionTitle}
                </h2>
                <p>{term.definition}</p>
                {term.synonyms && term.synonyms.length > 0 && (
                  <p className="mt-4">
                    <span className="font-bold">Synonyms:</span>{' '}
                    <span>{term.synonyms.join(', ')}</span>
                  </p>
                )}
              </div>
              <div className="flex w-1/4 justify-end">
                <Image
                  src={'/images/question-mark-3d.png'}
                  alt="question mark"
                  width={241}
                  height={345}
                  className="h-[150px] w-auto object-contain"
                />
              </div>
            </div>
          </div>
          {term.content && (
            <MarkdownViewer content={term.content} className="px-6" />
          )}
        </div>
      </div>
      <div className="sticky top-0 flex h-fit w-56 flex-col items-center px-4 pb-4 lg:px-0">
        <TryProductCard />
      </div>
    </div>
  )
}
