import Image from 'next/image'
import { BlogAuthor, blogAuthors } from './blog-types'
import { format } from 'date-fns'

type InnerviewBlogAuthorInfoProps = {
  lastUpdatedAt: string
}

export function InnerviewBlogAuthorInfo({
  lastUpdatedAt,
}: InnerviewBlogAuthorInfoProps) {
  const authors = [BlogAuthor.EditorialTeam]

  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex flex-col gap-y-4 py-2 lg:mt-[130px] lg:py-5">
        <p className="text-sm opacity-50">Written by</p>
        {authors.map((author, index) => {
          const authorDetails = blogAuthors[author as keyof typeof blogAuthors]
          return (
            <a
              key={index}
              className="group flex items-start space-x-3"
              target="_blank"
              rel="noopener noreferrer"
              href={`https://x.com/${authorDetails.twitterHandle.slice(1)}`}
            >
              <Image
                alt={authorDetails.name}
                loading="lazy"
                width={40}
                height={40}
                className="rounded-full transition-all group-hover:brightness-90"
                src={authorDetails.avatarUrl}
                sizes="40px"
              />
              <div className="flex flex-col">
                <p className="font-semibold whitespace-nowrap opacity-75">
                  {authorDetails.name}
                </p>
                <p className="text-sm opacity-50">{authorDetails.role}</p>
                <p className="text-xs opacity-50">
                  {authorDetails.twitterHandle}
                </p>
              </div>
            </a>
          )
        })}
        <span className="text-sm opacity-50">
          {format(new Date(lastUpdatedAt), 'MMMM dd, yyyy')}
        </span>
      </div>
    </div>
  )
}
