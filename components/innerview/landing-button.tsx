import Link from 'next/link'
import { Button, ButtonProps } from '@/components/ui/button'
import { cn } from '@/lib/utils/cn'

type LandingButtonProps = Omit<ButtonProps, 'variant' | 'size'> & {
  variant?: 'filled' | 'outline'
  size?: 'small' | 'medium' | 'large'
  icon?: React.ReactNode
  href?: string
  text?: string
  prefetch?: boolean
}

export const LandingButton = ({
  className,
  variant = 'filled',
  size = 'medium',
  icon,
  href,
  text,
  prefetch,
  children,
  ...props
}: LandingButtonProps) => {
  const buttonVariant = variant === 'filled' ? 'default' : 'outline'
  const hoverStyle =
    variant === 'outline'
      ? 'hover:border-dark'
      : variant === 'filled'
        ? 'hover:bg-dark'
        : ''

  // Map size to appropriate classes
  const sizeClasses = {
    small: 'h-8 px-3 py-2 text-sm',
    medium: 'h-10 px-4 py-2',
    large: 'h-12 px-6 py-3 text-lg',
  }

  const baseClassName = cn(
    'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-300 hover:shadow-hard-drop-accent',
    {
      'bg-dark text-on-dark hover:bg-dark/90': buttonVariant === 'default',
      'border border-dark bg-transparent hover:bg-light':
        buttonVariant === 'outline',
    },
    sizeClasses[size],
    hoverStyle,
    className,
  )

  if (href) {
    return (
      <Link href={href} prefetch={prefetch} className={baseClassName}>
        {icon}
        {text || children}
      </Link>
    )
  }

  return (
    <Button
      {...props}
      variant={buttonVariant}
      icon={icon}
      className={cn(
        'transition-all duration-300 hover:shadow-hard-drop-accent',
        sizeClasses[size],
        hoverStyle,
        className,
      )}
    >
      {text || children}
    </Button>
  )
}
