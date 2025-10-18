import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Silence lockfile warning - scribo is a standalone app
  outputFileTracingRoot: process.cwd(),

  // Image configuration - add your own hostnames via NEXT_PUBLIC_IMAGE_DOMAINS env var
  images: {
    remotePatterns: [
      // Default: Allow common image hosting services
      ...(process.env.NEXT_PUBLIC_IMAGE_DOMAINS
        ? process.env.NEXT_PUBLIC_IMAGE_DOMAINS.split(',').map((domain) => ({
            protocol: 'https' as const,
            hostname: domain.trim(),
          }))
        : []),
    ],
  },
}

export default nextConfig
