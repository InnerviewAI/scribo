# Scribo

**Scribo** is a standalone blog rendering application powered by the GrowPilot API. It's designed to be a turnkey solution for creating beautiful, SEO-optimized blogs that grow on autopilot.

## Features

- 🚀 **Next.js 15** with App Router
- 🎨 **Tailwind CSS v4** for styling
- 📝 **Markdown rendering** with inline images
- 🔌 **Component injection system** for customization
- 🔍 **SEO-optimized** with metadata and sitemaps
- 📱 **Responsive design** (desktop-first)
- ⚡ **Server Components** for optimal performance
- 🔗 **Smart URL routing** for local dev vs production
- 🎯 **Alphabet filtering** for glossaries
- 📊 **Loading states** with skeleton components
- 🖼️ **Image optimization** with Next.js Image
- 🎨 **Custom theming** support

## Quick Start

### 1. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 2. Configure Environment Variables

Create a `.env.local` file with your GrowPilot API credentials:

```bash
# Required - GrowPilot API Configuration
GROWPILOT_API_KEY=your_api_key_here
NEXT_PUBLIC_GROWPILOT_DOMAIN=https://your-growpilot-instance.com

# URL Configuration (for local dev vs production)
# Main App URL (for signup, features, etc.)
# In production: https://yourdomain.com
# In local dev: http://localhost:3001 (your main app)
NEXT_PUBLIC_MAIN_APP_URL=https://yourdomain.com

# Blog App URL (for blog, topics, glossaries)
# In production: same as MAIN_APP_URL (routes are rewritten)
# In local dev: http://localhost:3033 (this Scribo app)
NEXT_PUBLIC_BLOG_APP_URL=https://yourdomain.com

# Legacy: Site URL (fallback for backward compatibility)
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Optional
NEXT_PUBLIC_IMAGE_DOMAINS=your-cdn.com,another-cdn.com
```

### 3. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3033](http://localhost:3033) to see your blog.

## Customization

Scribo uses a component injection system that allows you to customize every aspect of your blog without modifying the core code.

### Basic Configuration

Create a `config.ts` file to configure your blog:

```typescript
import { setScriboConfig } from './lib/config'

setScriboConfig({
  siteName: 'My Blog',
  siteDescription: 'My awesome blog',
  siteUrl: 'https://myblog.com',

  api: {
    growPilotApiKey: process.env.GROWPILOT_API_KEY || '',
    growPilotDomain: process.env.NEXT_PUBLIC_GROWPILOT_DOMAIN || '',
  },
})
```

### Custom Components

You can inject custom components to replace the defaults:

```typescript
import { setScriboConfig } from './lib/config'
import { MyFooter } from './components/my-footer'
import { MyHeader } from './components/my-header'

setScriboConfig({
  // ... other config
  components: {
    Header: MyHeader,
    Footer: MyFooter,
    CustomerLogos: MyCustomerLogos,
    UpsellBanner: MyUpsellBanner,
    BlogPageHero: MyBlogPageHero,
    MidArticleUpsell: MyMidArticleCard,
    BlogSummarizeCard: MySummarizeCard,
    TryProductCard: MyProductCard,
    BlogAuthorInfo: MyAuthorInfo,
  },
})
```

### Available Component Injection Points

| Component           | Props                                | Description                                     |
| ------------------- | ------------------------------------ | ----------------------------------------------- |
| `Header`            | none                                 | Site header/navigation                          |
| `Footer`            | none                                 | Site footer                                     |
| `CustomerLogos`     | `{ variant?: 'default' \| 'small' }` | Customer logo showcase (supports small variant) |
| `UpsellBanner`      | none                                 | Bottom-of-page CTA banner                       |
| `BlogPageHero`      | none                                 | Hero section on blog listing page               |
| `MidArticleUpsell`  | none                                 | Upsell card in the middle of blog posts         |
| `BlogSummarizeCard` | `{ blogPostId: string }`             | Post summarization card                         |
| `TryProductCard`    | none                                 | Product trial/signup card                       |
| `BlogAuthorInfo`    | `{ lastUpdatedAt: string }`          | Author information sidebar                      |

## URL Configuration

Scribo includes a smart URL configuration system that handles different scenarios:

### Local Development

- **Main App**: `http://localhost:3001` (your main application)
- **Blog App**: `http://localhost:3033` (this Scribo instance)

### Production

- **Main App**: `https://yourdomain.com` (your main application)
- **Blog App**: `https://yourdomain.com` (same domain, routes rewritten)

### Environment Variables

- `NEXT_PUBLIC_MAIN_APP_URL` - Points to your main app (signup, features, etc.)
- `NEXT_PUBLIC_BLOG_APP_URL` - Points to blog app (blog, topics, glossaries)
- `NEXT_PUBLIC_SITE_URL` - Legacy fallback for backward compatibility

The system automatically handles:

- **Signup/login links** → Main app
- **Blog navigation** → Blog app (local) or main app (production)
- **Component injection** → Uses appropriate URLs based on environment

### Main App Rewrites (Production)

To route blog traffic from your main app to Scribo in production, add these rewrites to your main app's `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/blog',
        destination: 'https://your-scribo-domain.com/blog',
      },
      {
        source: '/blog/:path*',
        destination: 'https://your-scribo-domain.com/blog/:path*',
      },
      {
        source: '/topics',
        destination: 'https://your-scribo-domain.com/topics',
      },
      {
        source: '/topics/:path*',
        destination: 'https://your-scribo-domain.com/topics/:path*',
      },
      {
        source: '/glossaries',
        destination: 'https://your-scribo-domain.com/glossaries',
      },
      {
        source: '/glossaries/:path*',
        destination: 'https://your-scribo-domain.com/glossaries/:path*',
      },
    ]
  },
}

module.exports = nextConfig
```

**Note**: Replace `https://your-scribo-domain.com` with your actual Scribo deployment URL (e.g., `https://blog.yourdomain.com` or your Vercel deployment URL like `https://your-blog.vercel.app`).

### SEO Protection for Shadow Deployments

Scribo includes automatic SEO protection to prevent duplicate content issues. The `robots.ts` file automatically detects if it's running on the shadow deployment or main domain:

- **Shadow Deployment** (e.g., `scribo.vercel.app`): Blocks all search engines with `Disallow: /`
- **Main Domain** (e.g., `yourdomain.com`): Allows indexing and includes sitemap

The detection works by comparing `NEXT_PUBLIC_SITE_URL` with `NEXT_PUBLIC_MAIN_APP_URL`:

- If they're **different** → Shadow deployment → Block crawlers
- If they're **the same** → Main deployment → Allow crawlers

This ensures only your main domain URLs (accessed via rewrites) get indexed in search engines, preventing duplicate content penalties.

## Project Structure

```
scribo/
├── app/                    # Next.js App Router
│   ├── blog/              # Blog routes
│   ├── topics/            # Topic routes
│   └── glossaries/        # Glossary routes
├── components/
│   ├── default/           # Default components (generic)
│   ├── innerview/         # Example: Innerview-specific components
│   └── ui/                # Core UI components
├── lib/
│   ├── api/               # GrowPilot API integration
│   ├── config/            # Configuration system
│   └── env/               # Environment utilities
└── public/                # Static assets
```

## Example: Innerview Configuration

See `config.innerview.example.ts` for a complete example of how Innerview configures Scribo with custom branding and components.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add your environment variables
4. Deploy!

### Other Platforms

Scribo is a standard Next.js 15 application and can be deployed anywhere Next.js is supported:

- Netlify
- AWS Amplify
- Google Cloud Run
- Self-hosted with Docker

## API Requirements

Scribo requires a GrowPilot API key since it calls the following endpoints:

- `GET /api/v1/posts` - List blog posts
- `GET /api/v1/posts/:slug` - Get single post
- `GET /api/v1/topics` - List topics
- `GET /api/v1/topics/:slug/posts` - Get posts by topic
- `GET /api/v1/glossaries` - List glossaries
- `GET /api/v1/glossaries/:slug` - Get glossary terms
- `GET /api/v1/glossaries/:slug/:termSlug` - Get glossary term details

## License

MIT
