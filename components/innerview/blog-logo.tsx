import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils/cn'

type LogoProps = {
  className?: string
  href?: string
  width?: number
  height?: number
}

export const InnerDialogueLogo = ({
  className,
  href,
  width,
  height,
}: LogoProps) => {
  const logoImage = (
    <Image
      src="/images/inner-dialogue.svg"
      alt="Inner Dialogue: The latest guides, tips, and insights for building the best products"
      width={330}
      height={56}
      className={cn(
        'h-auto max-h-[41px] w-auto max-w-[247px] md:max-h-[56px] md:max-w-[330px]',
        className,
      )}
    />
  )

  return href ? <Link href={href}>{logoImage}</Link> : logoImage
}
