import { cn } from '@/lib/utils/cn'

type BlogPostLoadingProps = {
  className?: string
}

export const BlogPostLoading = ({ className }: BlogPostLoadingProps) => (
  <div
    className={cn(
      'mx-auto flex max-w-5xl flex-col gap-4 lg:border-b',
      className,
    )}
  >
    <div className="flex items-center gap-2">
      <div className="h-4 w-12 animate-pulse rounded bg-light"></div>
      <div className="h-4 w-4 animate-pulse rounded bg-light"></div>
      <div className="h-6 w-24 animate-pulse rounded-full border bg-light"></div>
    </div>
    <div className="space-y-2">
      <div className="h-16 w-full animate-pulse rounded-lg bg-light"></div>
      <div className="h-6 w-3/4 animate-pulse rounded bg-light"></div>
    </div>
    <div className="relative flex w-full max-w-6xl flex-col gap-6 lg:flex-row">
      <div className="mt-4 flex w-full max-w-3xl flex-col gap-2 overflow-hidden rounded-t-lg border border-b lg:border-b-0">
        <div className="px-4 pt-4 pb-12">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="mb-4 h-4 w-full animate-pulse rounded bg-light"
            ></div>
          ))}
        </div>
      </div>
      <div className="flex h-fit w-56 flex-col items-center">
        <div className="flex w-full flex-col items-center">
          <div className="flex flex-col gap-y-4 py-2 lg:mt-12 lg:py-5">
            <div className="h-4 w-20 animate-pulse rounded bg-light"></div>
            <div className="flex items-start space-x-3">
              <div className="h-10 w-10 animate-pulse rounded-full bg-light"></div>
              <div className="flex flex-col gap-1">
                <div className="h-4 w-24 animate-pulse rounded bg-light"></div>
                <div className="h-3 w-20 animate-pulse rounded bg-light"></div>
                <div className="h-3 w-16 animate-pulse rounded bg-light"></div>
              </div>
            </div>
            <div className="h-4 w-32 animate-pulse rounded bg-light"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
