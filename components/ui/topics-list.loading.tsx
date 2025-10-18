import { cn } from '@/lib/utils/cn'

type TopicsListLoadingProps = {
  className?: string
}

export const TopicsListLoading = ({ className }: TopicsListLoadingProps) => (
  <div className={cn('container mx-auto px-4 py-8', className)}>
    <div className="mb-8 h-10 w-48 animate-pulse rounded bg-light"></div>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="flex h-40 flex-col overflow-hidden rounded-lg border"
        >
          <div className="flex flex-1 flex-col justify-between rounded-b-lg bg-primary p-6">
            <div>
              <div className="h-6 w-3/4 animate-pulse rounded bg-light"></div>
              <div className="mt-2 h-16 w-full animate-pulse rounded bg-light"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)
