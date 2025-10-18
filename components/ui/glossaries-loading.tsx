export function GlossariesLoading() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        {/* Title skeleton */}
        <div className="h-8 w-48 animate-pulse rounded bg-light" />
        {/* Description skeleton */}
        <div className="h-4 w-96 animate-pulse rounded bg-light" />
      </div>

      {/* Cards grid skeleton */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col overflow-hidden rounded-lg border"
          >
            <div className="flex flex-1 flex-col justify-between rounded-b-lg bg-white p-6">
              <div>
                {/* Card title skeleton */}
                <div className="mb-2 h-6 w-32 animate-pulse rounded bg-light" />
                {/* Card description skeleton */}
                <div className="space-y-2">
                  <div className="h-4 w-full animate-pulse rounded bg-light" />
                  <div className="h-4 w-3/4 animate-pulse rounded bg-light" />
                  <div className="h-4 w-1/2 animate-pulse rounded bg-light" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
