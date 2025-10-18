export function LatestBlogPostsLoading() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      {[...Array(9)].map((_, index) => (
        <div
          key={index}
          className="h-48 animate-pulse rounded-lg bg-gray-200"
        ></div>
      ))}
    </div>
  )
}
