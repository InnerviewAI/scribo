import Link from 'next/link'

export function DefaultFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full px-6 py-12">
      <div className="flex w-full flex-col gap-8">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Blog</h3>
            <p className="text-sm text-gray-600">
              Articles, guides, and insights
            </p>
          </div>
          <div className="flex gap-6">
            <Link
              href="/blog"
              className="text-sm text-gray-600 transition-colors hover:text-accent"
            >
              Blog
            </Link>
            <Link
              href="/topics"
              className="text-sm text-gray-600 transition-colors hover:text-accent"
            >
              Topics
            </Link>
            <Link
              href="/glossaries"
              className="text-sm text-gray-600 transition-colors hover:text-accent"
            >
              Glossaries
            </Link>
          </div>
        </div>
        <div className="text-xs text-gray-500">© {currentYear}</div>
      </div>
    </footer>
  )
}
