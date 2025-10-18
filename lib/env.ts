// Simple environment and URL helpers
export const env = {
  // Main app URL (for signup, features, etc.)
  getMainAppUrl(): string {
    return (
      process.env.NEXT_PUBLIC_MAIN_APP_URL ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      'http://localhost:3001'
    )
  },

  // Blog app URL (for blog, topics, glossaries)
  getBlogAppUrl(): string {
    return (
      process.env.NEXT_PUBLIC_BLOG_APP_URL ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      'http://localhost:3033'
    )
  },

  // Legacy method for backward compatibility
  getBaseUrl(): string {
    return this.getMainAppUrl()
  },

  getBlogUrl({ slug }: { slug?: string } = {}): string {
    // In production, blog routes are rewritten to the blog app
    // In local dev, we need to use the blog app URL directly
    const isProduction = process.env.NODE_ENV === 'production'
    const baseUrl = isProduction ? this.getMainAppUrl() : this.getBlogAppUrl()
    return `${baseUrl}/blog${slug ? `/${slug}` : ''}`
  },

  getTopicUrl({ slug }: { slug?: string } = {}): string {
    const isProduction = process.env.NODE_ENV === 'production'
    const baseUrl = isProduction ? this.getMainAppUrl() : this.getBlogAppUrl()
    return `${baseUrl}/topics${slug ? `/${slug}` : ''}`
  },

  getGlossaryUrl({ slug }: { slug?: string } = {}): string {
    const isProduction = process.env.NODE_ENV === 'production'
    const baseUrl = isProduction ? this.getMainAppUrl() : this.getBlogAppUrl()
    return `${baseUrl}/glossaries${slug ? `/${slug}` : ''}`
  },

  getTermUrl({
    glossarySlug,
    termSlug,
  }: {
    glossarySlug: string
    termSlug: string
  }): string {
    const isProduction = process.env.NODE_ENV === 'production'
    const baseUrl = isProduction ? this.getMainAppUrl() : this.getBlogAppUrl()
    return `${baseUrl}/glossaries/${glossarySlug}/${termSlug}`
  },

  getSignUpUrl(): string {
    return `${this.getMainAppUrl()}/sign-up`
  },

  getSignInUrl(): string {
    return `${this.getMainAppUrl()}/sign-in`
  },

  getOgImageUrl({ title }: { title?: string } = {}): string {
    // Default OpenGraph image URL - can be overridden in generatePageMetadata
    return `${this.getBlogAppUrl()}/images/og-image.svg`
  },

  isProduction(): boolean {
    return process.env.NODE_ENV === 'production'
  },

  isShadowDeployment(): boolean {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3033'
    const mainAppUrl = this.getMainAppUrl()
    return siteUrl !== mainAppUrl
  },
}
