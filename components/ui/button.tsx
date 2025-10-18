import * as React from 'react'
import { cn } from '@/lib/utils/cn'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg'
  icon?: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'default',
      size = 'default',
      icon,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        className={cn(
          'inline-flex cursor-pointer items-center justify-center gap-2 rounded-md font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-dark text-on-dark hover:bg-dark/90': variant === 'default',
            'border border-dark bg-transparent hover:bg-light':
              variant === 'outline',
            'hover:bg-light': variant === 'ghost',
            'h-10 px-4 py-2': size === 'default',
            'h-9 px-3': size === 'sm',
            'h-11 px-8': size === 'lg',
          },
          className,
        )}
        ref={ref}
        {...props}
      >
        {icon}
        {children}
      </button>
    )
  },
)
Button.displayName = 'Button'
