import Link from 'next/link'
import { GlossaryTerm } from '@/lib/api/glossaries/types'
import { env } from '@/lib/env'
import { cn } from '@/lib/utils/cn'

type TermCardProps = {
  term: GlossaryTerm
  glossarySlug: string
  size?: 'normal' | 'small'
}

export function TermCard({
  term,
  glossarySlug,
  size = 'normal',
}: TermCardProps) {
  const titleClass = size === 'small' ? 'text-lg' : 'text-xl'
  const descriptionClass = size === 'small' ? 'text-xs' : 'text-sm'

  return (
    <Link href={env.getTermUrl({ glossarySlug, termSlug: term.slug })}>
      <div className="flex flex-col overflow-hidden rounded-lg border transition-all hover:shadow-lg">
        <div className="flex flex-1 flex-col justify-between rounded-b-lg bg-white p-6">
          <div>
            <h3
              className={cn('font-display line-clamp-2 font-bold', titleClass)}
            >
              {term.term}
            </h3>
            <p className={cn('mt-2 line-clamp-3 opacity-75', descriptionClass)}>
              {term.definition}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}
