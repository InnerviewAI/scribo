import { Suspense } from 'react'
import { TopicsListLoading } from '@/components/ui/topics-list.loading'
import { TopicsPageServer } from '@/components/ui/topics-list.server'
import { generatePageMetadata } from '@/lib/seo'

export function generateMetadata() {
  return generatePageMetadata({
    title: 'Topics',
    description:
      'Explore topics and categories to find the content that matters most to you.',
    shouldIndex: true,
    canonical: 'https://innerview.co/topics',
  })
}

export default function TopicsPage() {
  return (
    <Suspense fallback={<TopicsListLoading />}>
      <TopicsPageServer />
    </Suspense>
  )
}
