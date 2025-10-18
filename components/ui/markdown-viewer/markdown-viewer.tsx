import { MemoizedReactMarkdown } from './memoized-react-markdown'
import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils/cn'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import { twMerge } from 'tailwind-merge'

type MarkdownViewerProps = {
  content: string
  className?: string
  proseSize?: 'sm' | 'base' | 'lg'
}

export const MarkdownViewer = ({
  content,
  className,
  proseSize = 'sm',
}: MarkdownViewerProps) => {
  let proseSizeClass = ''
  if (proseSize === 'sm') {
    proseSizeClass = 'prose-sm'
  } else if (proseSize === 'base') {
    proseSizeClass = 'prose-base'
  } else if (proseSize === 'lg') {
    proseSizeClass = 'prose-lg'
  }
  return (
    <>
      <div className={twMerge('flex flex-row', className)}>
        <MemoizedReactMarkdown
          className={cn(
            'prose w-full max-w-full flex-1 text-on-primary',
            proseSizeClass,
          )}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            img({ src, alt }) {
              if (!src || typeof src !== 'string') return null
              return (
                <span className="flex justify-center">
                  <Image
                    src={src as string}
                    alt={alt ?? ''}
                    width={800}
                    height={800}
                    className="rounded-lg"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </span>
              )
            },
            code(props) {
              const { children } = props
              return (
                <span
                  className="rounded bg-dark p-1 font-mono text-on-dark"
                  {...props}
                >
                  {children}
                </span>
              )
            },
            table({ children }) {
              return (
                <table className="border-collapse border px-3 py-1">
                  {children}
                </table>
              )
            },
            th({ children }) {
              return (
                <th className="border bg-dark px-3 py-1 break-words text-on-dark">
                  {children}
                </th>
              )
            },
            td({ children }) {
              return (
                <td className="border px-3 py-1 break-words">{children}</td>
              )
            },
          }}
        >
          {content}
        </MemoizedReactMarkdown>
      </div>
    </>
  )
}
