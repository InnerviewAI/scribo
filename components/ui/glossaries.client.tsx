'use client'

import { Glossary } from '@/lib/api/glossaries/types'
import { GlossaryCard } from './glossary-card'

type GlossariesClientProps = {
  glossaries: Glossary[]
}

export function GlossariesClient({ glossaries }: GlossariesClientProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Glossaries</h1>
        <p className="text-muted-foreground">
          Explore key terms and concepts to help you understand the world of
          user research and product development.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {glossaries.map((glossary) => (
          <GlossaryCard key={glossary.id} glossary={glossary} />
        ))}
      </div>

      {glossaries.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-muted-foreground">No glossaries found.</p>
        </div>
      )}
    </div>
  )
}
