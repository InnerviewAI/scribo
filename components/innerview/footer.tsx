import Image from 'next/image'
import Link from 'next/link'
import { env } from '@/lib/env'
import { InnerviewLogo } from './innerview-logo/InnerviewLogo'

const FOOTER_SECTIONS = {
  product: {
    title: 'Product',
    links: [
      {
        label: 'Analyze your first interview',
        href: env.getSignUpUrl(),
        rel: undefined,
      },
    ],
  },
  tools: {
    title: 'Tools',
    links: [
      {
        label: 'Insights Analysis',
        href: env.getSignUpUrl(),
        rel: undefined,
      },
      {
        label: 'Content Automation',
        href: 'https://growpilot.bot',
        rel: 'noopener noreferrer',
      },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'Blog', href: env.getBlogUrl(), rel: undefined },
      { label: 'Glossaries', href: env.getGlossaryUrl(), rel: undefined },
      { label: 'Contact', href: 'mailto:hello@innerview.co', rel: undefined },
      {
        label: 'X / Twitter',
        href: 'https://twitter.com/InnerviewCo',
        rel: 'noopener noreferrer',
      },
    ],
  },
} as const

type FooterProps = {
  showArrow?: boolean
}

export const InnerviewFooter = ({ showArrow = false }: FooterProps) => {
  return (
    <footer className="relative mb-12 w-full md:mb-24 md:max-w-4xl">
      <div className="flex w-full flex-col gap-8 px-4">
        {/* Logo and Description */}
        <div className="flex flex-col items-center gap-3 md:items-start">
          <InnerviewLogo />
          <div className="text-center text-sm font-medium md:text-left md:text-base">
            Easy insights, easy decisions, easy progress.
          </div>
        </div>

        {/* Footer Sections */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {Object.entries(FOOTER_SECTIONS).map(([key, section]) => (
            <div key={key}>
              <h3 className="mb-3 font-semibold">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      rel={link.rel}
                      className="text-muted-foreground text-sm transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-xs font-normal opacity-50 md:text-left">
          © {new Date().getFullYear()} Innerview.
        </div>
      </div>

      {showArrow && (
        <Image
          src="/images/marketing/line-arrow-footer.svg"
          alt="Dimmed arrow line"
          width={150}
          height={140}
          className="absolute bottom-20 -left-[150px]"
        />
      )}
    </footer>
  )
}
