import Link from 'next/link'

export function DefaultHeader() {
  return (
    <nav className="flex w-full items-center justify-between px-6 py-6">
      <Link href="/blog" className="text-2xl font-bold hover:text-accent">
        Blog
      </Link>
      <div className="flex gap-6">
        <Link
          href="/blog"
          className="text-lg font-medium transition-colors hover:text-accent"
        >
          Blog
        </Link>
        <Link
          href="/topics"
          className="text-lg font-medium transition-colors hover:text-accent"
        >
          Topics
        </Link>
        <Link
          href="/glossaries"
          className="text-lg font-medium transition-colors hover:text-accent"
        >
          Glossaries
        </Link>
      </div>
    </nav>
  )
}
