'use client'

import { useMemo, useState } from 'react'
import { GlossaryWithTerms } from '@/lib/api/glossaries/types'
import { cn } from '@/lib/utils/cn'
import { TermCard } from './term-card'

type GlossaryTermsClientProps = {
  glossary: GlossaryWithTerms
}

export function GlossaryTermsClient({ glossary }: GlossaryTermsClientProps) {
  const [selectedLetter, setSelectedLetter] = useState<string>('ALL')
  const { groupedTerms, availableLetters } = useMemo(() => {
    const grouped = glossary.terms.reduce(
      (acc, term) => {
        const letter = term.alphabetGroup.toUpperCase()
        if (!acc[letter]) {
          acc[letter] = []
        }
        acc[letter].push(term)
        return acc
      },
      {} as Record<string, typeof glossary.terms>,
    )
    const letters = Object.keys(grouped).sort()
    return { groupedTerms: grouped, availableLetters: letters }
  }, [glossary])

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h1 className="flex items-end gap-2 text-3xl font-bold">
          {glossary.keyTerm}
          {glossary.terms.length > 0 && (
            <span className="text-muted-foreground pb-0.5 text-lg font-normal">
              ({glossary.terms.length})
            </span>
          )}
        </h1>
        <p className="text-muted-foreground">{glossary.definition}</p>
      </div>

      {glossary.terms.length > 0 && (
        <div className="flex flex-col gap-2">
          <span className="text-sm font-bold text-gray-500">Filter:</span>
          <div className="flex flex-wrap gap-2 text-lg font-bold">
            <button
              className={cn(
                'cursor-pointer rounded-lg border px-2 py-0.5',
                selectedLetter === 'ALL'
                  ? 'text-primary-foreground border-primary bg-primary/75'
                  : 'bg-background text-foreground',
              )}
              onClick={() => setSelectedLetter('ALL')}
            >
              ALL
            </button>
            {availableLetters.map((letter) => (
              <button
                key={letter}
                className={cn(
                  'cursor-pointer rounded-lg border px-2 py-0.5',
                  selectedLetter === letter
                    ? 'text-primary-foreground border-primary bg-primary/75'
                    : 'bg-background text-foreground',
                )}
                onClick={() =>
                  setSelectedLetter(selectedLetter === letter ? 'ALL' : letter)
                }
              >
                {letter}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Terms grouped by letter */}
      <div className="space-y-8">
        {(selectedLetter === 'ALL' ? availableLetters : [selectedLetter]).map(
          (letter) => (
            <div key={letter} className="space-y-4">
              <div className="flex items-center border-b pb-2">
                <span className="text-foreground/75 flex h-12 w-12 shrink-0 items-center justify-center text-5xl font-black">
                  {letter}
                </span>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {(groupedTerms[letter] || []).map((term) => (
                  <TermCard
                    key={term.id}
                    term={term}
                    glossarySlug={glossary.slug}
                  />
                ))}
              </div>
            </div>
          ),
        )}
        {glossary.terms.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">
              No terms found in this glossary.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
