import Link from 'next/link'
import { env } from '@/lib/env'
import { cn } from '@/lib/utils/cn'
import { FeaturesButton } from './features-button'
import { InnerviewLogo } from './innerview-logo/InnerviewLogo'
import { LandingButton } from './landing-button'

type NavigationStaticProps = {
  showFeaturesAnchorLink?: boolean
  className?: string
}

export const InnerviewHeader = ({
  showFeaturesAnchorLink,
  className,
}: NavigationStaticProps) => {
  return (
    <div
      className={cn(
        'flex w-full items-center justify-between gap-4 px-2 md:gap-6 xl:gap-10 xl:px-32',
        className,
      )}
    >
      <InnerviewLogo className="mb-2 ml-2" href={env.getBaseUrl()} />
      <div className="flex items-center gap-4 md:gap-6 lg:gap-10">
        {showFeaturesAnchorLink && <FeaturesButton />}
        {!showFeaturesAnchorLink && (
          <Link
            href={`${env.getBaseUrl()}/#powerful-features`}
            className="hidden text-lg font-bold transition-all duration-300 hover:text-accent md:block"
            prefetch={false}
          >
            Features
          </Link>
        )}
        <Link
          href={env.getBlogUrl()}
          className="hidden text-lg font-bold transition-all duration-300 hover:text-accent md:block"
          prefetch={false}
        >
          Blog
        </Link>
      </div>
      <div className="flex items-center gap-4 md:gap-6">
        <LandingButton
          href={env.getSignInUrl()}
          variant="outline"
          text="Login"
          prefetch={false}
        />
        <LandingButton
          href={env.getSignUpUrl()}
          variant="filled"
          text="Try for free"
          prefetch={false}
        />
      </div>
    </div>
  )
}
