'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { env } from '@/lib/env'
import { cn } from '@/lib/utils/cn'
import { LandingButton } from './landing-button'

type Blog10xInsightsCardProps = {
  variant?: 'nested' | 'default'
}

export const Blog10xInsightsCard: React.FC<Blog10xInsightsCardProps> = ({
  variant = 'nested',
}) => {
  const router = useRouter()

  const isNested = variant === 'nested'

  return (
    <div
      className={cn(
        'mx-2 my-4 mt-2 flex cursor-pointer flex-col items-stretch gap-4 overflow-hidden rounded-xl border bg-primary p-6 sm:flex-row md:mx-6',
        isNested
          ? 'shadow-none md:gap-6'
          : 'border-accent-light shadow-lg md:mb-10 md:gap-10',
      )}
      onClick={() => {
        window.location.href = env.getSignUpUrl()
      }}
    >
      <div className="grow">
        <h2
          className={cn(
            'font-display font-bold',
            isNested ? 'text-lg' : 'text-xl',
          )}
        >
          10x your insights without 10x&apos;ing your workload
        </h2>
        <p
          className={cn(
            'text-opacity-75 mt-2',
            isNested ? 'text-sm' : 'text-base',
          )}
        >
          Innerview helps you quickly understand your customers and build
          products people love.
        </p>
      </div>
      <div className="mt-4 flex shrink-0 items-center sm:mt-0 sm:self-stretch">
        <LandingButton
          href={env.getSignUpUrl()}
          className="h-12 whitespace-nowrap"
          variant="filled"
          size={isNested ? 'small' : 'medium'}
        >
          {isNested ? 'Get started' : 'Get insights'}
        </LandingButton>
      </div>
    </div>
  )
}
