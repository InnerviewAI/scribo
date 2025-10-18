import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils/cn'

type InnerviewLogoProps = {
  className?: string
  href?: string
  width?: number
  height?: number
}

export const InnerviewLogo = ({
  className,
  href,
  width,
  height,
}: InnerviewLogoProps) => {
  const logoImage = (
    <div className={cn('flex items-center justify-center gap-2', className)}>
      <Image
        src="/images/mark.svg"
        alt="Users will love you for it"
        width={40}
        height={39}
        className="h-auto max-h-[19px] w-auto max-w-[20px] md:max-h-[39px] md:max-w-[40px]"
      />
      <Image
        src="/images/word-mark.svg"
        alt="Innerview: Help the world make progress"
        width={127}
        height={32}
        className="h-auto max-h-[24px] w-auto max-w-[95px] md:max-h-[32px] md:max-w-[127px]"
      />
    </div>
  )

  return href ? <Link href={href}>{logoImage}</Link> : logoImage
}
