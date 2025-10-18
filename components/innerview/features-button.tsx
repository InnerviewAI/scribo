'use client'

import { useCallback } from 'react'
import { cn } from '@/lib/utils/cn'

type FeaturesButtonProps = {
  className?: string
}

export const FeaturesButton = ({ className }: FeaturesButtonProps) => {
  const scrollToFeatures = useCallback(() => {
    const featuresSection = document.getElementById('powerful-features')
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <button
      onClick={scrollToFeatures}
      className={cn(
        'hidden text-lg font-bold transition-all duration-300 hover:text-accent md:block',
        className,
      )}
    >
      Features
    </button>
  )
}
