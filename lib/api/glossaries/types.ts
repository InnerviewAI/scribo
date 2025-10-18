export type Glossary = {
  id: string
  keyTerm: string
  slug: string
  definitionTitle: string
  definition: string
  createdAt: string
  updatedAt: string
}

export type GlossaryTerm = {
  id: string
  alphabetGroup: string
  term: string
  slug: string
  definitionTitle: string
  definition: string
  content: string
  synonyms: string[]
  createdAt: string
  updatedAt: string
}

export type GlossaryWithTerms = Glossary & {
  terms: GlossaryTerm[]
}

export type GlossaryTermWithGlossaryId = GlossaryTerm & {
  glossaryId: string
}

export type GlossariesResponse = {
  glossaries: Glossary[]
}
