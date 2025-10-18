export function GlossaryTermsLoading() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        {/* Title skeleton */}
        <div className="h-10 w-64 animate-pulse rounded bg-gray-200" />
        {/* Description skeleton */}
        <div className="h-4 w-96 animate-pulse rounded bg-gray-200" />
      </div>

      {/* Filter buttons skeleton */}
      <div className="flex flex-col gap-2">
        <div className="h-4 w-12 animate-pulse rounded bg-gray-200" />
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="h-8 w-12 animate-pulse rounded-lg bg-gray-200"
            />
          ))}
        </div>
      </div>

      {/* Terms sections skeleton */}
      <div className="space-y-8">
        {Array.from({ length: 3 }).map((_, sectionIndex) => (
          <div key={sectionIndex} className="space-y-4">
            {/* Section letter skeleton */}
            <div className="flex items-center border-b pb-2">
              <div className="h-12 w-12 animate-pulse rounded bg-gray-200" />
            </div>

            {/* Terms grid skeleton */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 4 }).map((_, cardIndex) => (
                <div
                  key={cardIndex}
                  className="flex flex-col overflow-hidden rounded-lg border"
                >
                  <div className="flex flex-1 flex-col justify-between rounded-b-lg bg-white p-6">
                    <div>
                      {/* Term title skeleton */}
                      <div className="mb-2 h-6 w-40 animate-pulse rounded bg-gray-200" />
                      {/* Term description skeleton */}
                      <div className="space-y-2">
                        <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
                        <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200" />
                        <div className="h-4 w-2/3 animate-pulse rounded bg-gray-200" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
