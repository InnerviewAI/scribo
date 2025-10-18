import Link from 'next/link'
import { Glossary } from '@/lib/api/glossaries/types'
import { env } from '@/lib/env'
import { cn } from '@/lib/utils/cn'

type GlossaryCardProps = {
  glossary: Glossary
  size?: 'normal' | 'small'
}

export function GlossaryCard({ glossary, size = 'normal' }: GlossaryCardProps) {
  const titleClass = size === 'small' ? 'text-lg' : 'text-xl'
  const descriptionClass = size === 'small' ? 'text-xs' : 'text-sm'

  return (
    <Link href={env.getGlossaryUrl({ slug: glossary.slug })}>
      <div className="flex flex-col overflow-hidden rounded-lg border transition-all hover:shadow-lg">
        <div className="flex flex-1 flex-col justify-between rounded-b-lg bg-white p-6">
          <div>
            <h2
              className={cn('font-display line-clamp-2 font-bold', titleClass)}
            >
              {glossary.keyTerm}
            </h2>
            <p className={cn('mt-2 line-clamp-3 opacity-75', descriptionClass)}>
              {glossary.definition}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}
