type DefaultBlogAuthorInfoProps = {
  lastUpdatedAt: string
}

export function DefaultBlogAuthorInfo({
  lastUpdatedAt,
}: DefaultBlogAuthorInfoProps) {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex flex-col gap-y-4 py-2 lg:mt-[130px] lg:py-5">
        <p className="text-sm opacity-50">
          Last updated: {new Date(lastUpdatedAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  )
}
