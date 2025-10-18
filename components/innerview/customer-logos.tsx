'use client'

import Marquee from 'react-fast-marquee'
import Image from 'next/image'

type Logo = {
  alt: string
  height: number
  src: string
  width: number
}

type CustomerLogosProps = {
  variant?: 'default' | 'small'
}

const TIER_ONE_LOGOS: Logo[] = [
  {
    alt: 'Apple',
    height: 56,
    src: '/images/marketing/logos/company=tier_1-apple.svg',
    width: 47,
  },
  {
    alt: 'BDC',
    height: 72,
    src: '/images/marketing/logos/company=tier_1-bdc.svg',
    width: 138,
  },
  {
    alt: 'Clearco',
    height: 56,
    src: '/images/marketing/logos/company=tier_1-clearco.svg',
    width: 308,
  },
  {
    alt: 'Crunchbase',
    height: 56,
    src: '/images/marketing/logos/company=tier_1-crunchbase.svg',
    width: 395,
  },
  {
    alt: 'Elsevier',
    height: 48,
    src: '/images/marketing/logos/company=tier_1-elsevier.svg',
    width: 373,
  },
  {
    alt: 'Fanatics',
    height: 56,
    src: '/images/marketing/logos/company=tier_1-fanatics.svg',
    width: 266,
  },
  {
    alt: 'Globant',
    height: 57,
    src: '/images/marketing/logos/company=tier_1-globant.svg',
    width: 332,
  },
  {
    alt: 'Google',
    height: 55,
    src: '/images/marketing/logos/company=tier_1-google.svg',
    width: 165,
  },
  {
    alt: 'LuciQ',
    height: 73,
    src: '/images/marketing/logos/company=tier_1-luciq.svg',
    width: 150,
  },
  {
    alt: 'Microsoft',
    height: 56,
    src: '/images/marketing/logos/company=tier_1-microsoft.svg',
    width: 263,
  },
  {
    alt: 'Planday',
    height: 72,
    src: '/images/marketing/logos/company=tier_1-planday.svg',
    width: 231,
  },
  {
    alt: 'Stellantis',
    height: 70,
    src: '/images/marketing/logos/company=tier_1-stellantis.svg',
    width: 328,
  },
]

const OTHER_LOGOS: Logo[] = [
  {
    alt: 'Avanade',
    height: 73,
    src: '/images/marketing/logos/company=tier_2-avanade.svg',
    width: 283,
  },
  {
    alt: 'Breezy',
    height: 56,
    src: '/images/marketing/logos/company=tier_2-breezy.svg',
    width: 218,
  },
  {
    alt: 'Complex',
    height: 56,
    src: '/images/marketing/logos/company=tier_2-complex.svg',
    width: 218,
  },
  {
    alt: 'Coople',
    height: 72,
    src: '/images/marketing/logos/company=tier_2-coople.svg',
    width: 222,
  },
  {
    alt: 'Credera',
    height: 57,
    src: '/images/marketing/logos/company=tier_2-credera.svg',
    width: 336,
  },
  {
    alt: 'Hyperskill',
    height: 72,
    src: '/images/marketing/logos/company=tier_2-hyperskill.svg',
    width: 308,
  },
  {
    alt: 'Omni',
    height: 56,
    src: '/images/marketing/logos/company=tier_2-omni.svg',
    width: 572,
  },
  {
    alt: 'Qonto',
    height: 56,
    src: '/images/marketing/logos/company=tier_2-qonto.svg',
    width: 199,
  },
  {
    alt: 'Routific',
    height: 56,
    src: '/images/marketing/logos/company=tier_2-routific.svg',
    width: 298,
  },
  {
    alt: 'Screencastify',
    height: 71,
    src: '/images/marketing/logos/company=tier_2-screencastify.svg',
    width: 423,
  },
  {
    alt: 'Swiggy',
    height: 73,
    src: '/images/marketing/logos/company=tier_2-swiggy.svg',
    width: 235,
  },
  {
    alt: 'Tixel',
    height: 72,
    src: '/images/marketing/logos/company=tier_2-tixel.svg',
    width: 249,
  },
  {
    alt: 'Tovala',
    height: 48,
    src: '/images/marketing/logos/company=tier_2-tovola.svg',
    width: 361,
  },
  {
    alt: 'XP Health',
    height: 57,
    src: '/images/marketing/logos/company=tier_2-xphealth.svg',
    width: 320,
  },
  {
    alt: 'Zen',
    height: 56,
    src: '/images/marketing/logos/company=tier_2-zen.svg',
    width: 250,
  },
  {
    alt: 'Brooklyn Foundry',
    height: 73,
    src: '/images/marketing/logos/company=tier_3-brooklynfoundry.svg',
    width: 282,
  },
]

const LOGO_ROWS: Array<{
  direction: 'left' | 'right'
  logos: Logo[]
}> = [
  { logos: TIER_ONE_LOGOS, direction: 'left' },
  { logos: OTHER_LOGOS, direction: 'right' },
]

export const InnerviewCustomerLogos = ({
  variant = 'default',
}: CustomerLogosProps) => {
  const isSmall = variant === 'small'

  return (
    <section
      aria-labelledby="customer-logos-heading"
      className={`flex w-full flex-col items-center text-center ${
        isSmall ? 'gap-6 px-4' : 'gap-12 px-4 sm:px-6 lg:px-8'
      }`}
    >
      <div className="flex flex-col items-center gap-2">
        <p
          id="customer-logos-heading"
          className={`font-semibold uppercase opacity-50 ${
            isSmall ? 'text-xs' : 'text-xs sm:text-sm'
          }`}
        >
          Trusted by world-class organizations
        </p>
      </div>
      <div
        className={`flex flex-col ${isSmall ? 'max-w-5xl gap-6' : 'max-w-6xl gap-10'}`}
      >
        {LOGO_ROWS.map(({ logos, direction }) => (
          <div key={direction} className="relative w-full overflow-hidden py-2">
            <div
              aria-hidden="true"
              className={`pointer-events-none absolute inset-y-0 left-0 z-10 bg-gradient-to-r from-landing-light via-landing-light/80 to-transparent ${
                isSmall ? 'w-12' : 'w-16 sm:w-24'
              }`}
            />
            <div
              aria-hidden="true"
              className={`pointer-events-none absolute inset-y-0 right-0 z-10 bg-gradient-to-l from-landing-light via-landing-light/80 to-transparent ${
                isSmall ? 'w-12' : 'w-16 sm:w-24'
              }`}
            />
            <Marquee
              autoFill
              direction={direction}
              gradient={false}
              pauseOnHover={false}
              speed={isSmall ? 30 : 40}
            >
              <div
                className={`flex items-center px-8 ${isSmall ? 'gap-12' : 'gap-16 sm:gap-20'}`}
              >
                {logos.map((logo) => (
                  <Image
                    key={logo.src}
                    alt={logo.alt}
                    src={logo.src}
                    width={logo.width}
                    height={logo.height}
                    className={`w-auto opacity-70 ${
                      isSmall ? 'h-6' : 'h-8 sm:h-10'
                    }`}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 220px"
                  />
                ))}
              </div>
            </Marquee>
          </div>
        ))}
      </div>
    </section>
  )
}
