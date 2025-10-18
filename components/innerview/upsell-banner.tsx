import Image from 'next/image'
import Link from 'next/link'
import { env } from '@/lib/env'
import { LandingButton } from './landing-button'

export const InnerviewUpsellBanner = () => {
  return (
    <div className="relative w-full p-4">
      <Link href={env.getSignUpUrl()} className="block md:hidden">
        <div className="relative aspect-[1120/382] overflow-hidden rounded-lg border">
          <Image
            src="https://innerview-public-assets.s3.amazonaws.com/blog/blog-upsell-card.png"
            alt="Try Innerview"
            fill
            className="object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 896px"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:justify-end md:pb-8">
            <p className="font-display max-w-2xl text-center text-lg font-bold drop-shadow-[0_2px_6px_rgba(255,255,255,0.8)] md:text-2xl">
              Try the user interview platform used by modern product teams
              everywhere
            </p>
          </div>
        </div>
      </Link>

      <Link
        href={env.getSignUpUrl()}
        className="relative hidden aspect-[1120/382] overflow-hidden rounded-lg border md:block"
      >
        <Image
          src="https://innerview-public-assets.s3.amazonaws.com/blog/blog-upsell-card.png"
          alt="Try Innerview"
          fill
          className="object-cover"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 896px"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-end p-4 pb-8">
          <p className="font-display max-w-2xl text-center text-lg font-bold drop-shadow-[0_2px_4px_rgba(255,255,255,1.0)] md:text-2xl">
            Try the user interview platform used by modern product teams
            everywhere
          </p>
          <div className="mt-4 flex gap-4">
            <LandingButton
              variant="filled"
              text="Start for free"
              className="hidden md:inline-flex"
            />
          </div>
        </div>
      </Link>
    </div>
  )
}
