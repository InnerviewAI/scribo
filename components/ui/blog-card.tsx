import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BlogAuthor, blogAuthors } from '@/components/innerview/blog-types'
import { cn } from '@/lib/utils/cn'

type BlogCardProps = {
  title: string
  metaDescription: string
  href: string
  date: string
  size?: 'normal' | 'small'
}

export const BlogCard: React.FC<BlogCardProps> = ({
  title,
  metaDescription,
  href,
  date,
  size = 'normal',
}) => {
  const titleClass = size === 'small' ? 'text-lg' : 'text-xl'
  const teaserClass = size === 'small' ? 'text-xs' : 'text-sm'
  const dateClass = size === 'small' ? 'text-xs' : 'text-sm'

  return (
    <Link
      href={href}
      className="flex flex-col overflow-hidden rounded-lg border transition-all hover:shadow-lg"
    >
      <div className="flex flex-1 flex-col justify-between rounded-b-lg bg-white p-6">
        <div>
          <h2
            className={cn(
              'font-display line-clamp-2 font-bold opacity-75',
              titleClass,
            )}
          >
            {title}
          </h2>
          <p className={cn('mt-2 line-clamp-2 opacity-50', teaserClass)}>
            {metaDescription}
          </p>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <div className="flex items-center -space-x-2">
            {[BlogAuthor.EditorialTeam].map((author) => (
              <Image
                key={author}
                src={blogAuthors[author].avatarUrl}
                alt={blogAuthors[author].name}
                width={36}
                height={36}
                className="rounded-full transition-all group-hover:brightness-90"
              />
            ))}
          </div>
          <time dateTime={date} className={cn('opacity-50', dateClass)}>
            {new Date(date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </time>
        </div>
      </div>
    </Link>
  )
}
