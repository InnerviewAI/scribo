import { cn } from '@/lib/utils/cn'

type TopicPostsLoadingProps = {
  className?: string
}

export const TopicPostsLoading = ({ className }: TopicPostsLoadingProps) => (
  <div className={cn('flex flex-col gap-8', className)}>
    <div className="flex max-w-4xl flex-col gap-2">
      <div className="h-10 w-3/4 animate-pulse rounded bg-light"></div>
      <div className="h-6 w-1/2 animate-pulse rounded bg-light"></div>
    </div>
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="flex flex-col overflow-hidden rounded-lg border"
        >
          <div className="flex flex-1 flex-col justify-between rounded-b-lg bg-white p-6">
            <div>
              <div className="h-6 w-3/4 animate-pulse rounded bg-light"></div>
              <div className="mt-2 h-16 w-full animate-pulse rounded bg-light"></div>
            </div>
            <div className="mt-4 flex items-center space-x-2">
              <div className="h-9 w-9 animate-pulse rounded-full bg-light"></div>
              <div className="h-4 w-1/3 animate-pulse rounded bg-light"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)
