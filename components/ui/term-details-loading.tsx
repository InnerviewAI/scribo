export function TermDetailsLoading() {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-10 pb-10">
      {/* Back link skeleton */}
      <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />

      {/* Main title skeleton */}
      <div className="pl-4">
        <div className="h-16 w-full max-w-3xl animate-pulse rounded bg-gray-200" />
      </div>

      {/* Definition card skeleton */}
      <div className="bg-secondary w-full space-y-6 rounded-2xl p-6">
        <div className="flex items-start space-x-4">
          <div className="w-3/4 space-y-4">
            {/* Definition title skeleton */}
            <div className="h-6 w-full max-w-md animate-pulse rounded bg-gray-200" />
            {/* Definition text skeleton */}
            <div className="space-y-2">
              <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-4/5 animate-pulse rounded bg-gray-200" />
            </div>
            {/* Synonyms skeleton */}
            <div className="space-y-2">
              <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200" />
            </div>
          </div>
          <div className="flex w-1/4 justify-end">
            {/* Image skeleton */}
            <div className="h-[150px] w-[100px] animate-pulse rounded bg-gray-200" />
          </div>
        </div>
      </div>

      {/* Content section skeleton */}
      <div className="space-y-6 px-6">
        <div className="h-8 w-full max-w-sm animate-pulse rounded bg-gray-200" />
        <div className="space-y-3">
          <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200" />
        </div>
        <div className="space-y-3">
          <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-4/5 animate-pulse rounded bg-gray-200" />
        </div>
        <div className="space-y-3">
          <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200" />
        </div>
      </div>
    </div>
  )
}
