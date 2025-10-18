import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const title = searchParams.get('title') || 'Blog'
  const bgColor = searchParams.get('bg') || 'FFCF5D'
  const textColor = searchParams.get('color') || '101828'

  // Function to calculate font size based on title length
  const calculateFontSize = (text: string) => {
    const baseSize = 96
    const minSize = 72
    const maxLength = 85
    if (text.length <= maxLength) return baseSize
    return Math.max(minSize, baseSize - (text.length - maxLength) * 1.5)
  }

  const fontSize = calculateFontSize(title)

  return new ImageResponse(
    (
      <div
        style={{
          background: `#${bgColor}`,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <h1
          style={{
            fontSize: `${fontSize}px`,
            fontWeight: 800,
            textAlign: 'center',
            color: `#${textColor}`,
            lineHeight: 1.1,
          }}
        >
          {title}
        </h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Plus Jakarta Sans',
          data: await fetch(
            new URL(
              '../../../public/PlusJakartaSans-ExtraBold.ttf',
              import.meta.url,
            ),
          ).then((res) => res.arrayBuffer()),
          weight: 800,
          style: 'normal',
        },
      ],
    },
  )
}
