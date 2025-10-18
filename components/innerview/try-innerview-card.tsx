import Image from 'next/image'
import Link from 'next/link'
import { env } from '@/lib/env'

export const TryInnerviewCard = () => {
  return (
    <Link
      href={env.getBaseUrl()}
      className="group relative mt-4 hidden w-full rounded-xl border bg-primary p-2 text-center md:block"
    >
      <div className="absolute top-2 right-2 z-10 rounded-full border bg-extra-light p-2.5 opacity-0 group-hover:opacity-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-right size-4 -rotate-45"
        >
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </div>
      <Image
        src="https://innerview-public-assets.s3.amazonaws.com/blog/blog-mini-card.png"
        alt="Innerview"
        width={1200}
        height={628}
        className="rounded-lg border"
        loading="lazy"
        sizes="(max-width: 768px) 100vw, 224px"
      />
      <p className="font-display mt-1 text-lg font-bold">Try Innerview</p>
      <p className="text-xs opacity-50">(psst... for free!)</p>
      <p className="mt-3 px-1 pb-2 text-xs opacity-75">
        Transform user interviews into actionable takeaways & faster decisions
      </p>
    </Link>
  )
}
