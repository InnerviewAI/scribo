import { cn } from '@/lib/utils/cn'

type ResponseLoadingProps = {
  showHeading?: boolean
  className?: string
}

export const ResponseLoading = ({
  showHeading,
  className,
}: ResponseLoadingProps) => {
  return (
    <div className={cn('animate-pulse', className)}>
      <div className="flex flex-col justify-start gap-2">
        {showHeading && (
          <div className="h-8 origin-left transform animate-grow-width rounded bg-light transition-all"></div>
        )}
        <div className="h-4 origin-left transform animate-grow-width rounded bg-light transition-all"></div>
        <div className="h-4 w-5/6 origin-left transform animate-grow-width rounded bg-light transition-all"></div>
        <div className="h-4 w-3/4 origin-left transform animate-grow-width rounded bg-light transition-all"></div>
      </div>
    </div>
  )
}
