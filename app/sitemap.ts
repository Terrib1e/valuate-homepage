import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://valuate.com';

  // Main pages
  const routes = ['', '/about', '/blog', '/docs', '/pricing', '/contact', '/login', '/signup'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Blog posts - in a real app, these would be dynamically generated
  const blogPosts = [
    '/blog/future-of-ai-in-hotel-valuation',
    '/blog/key-metrics-hotel-investors',
    '/blog/post-pandemic-hotel-recovery',
    '/blog/spot-undervalued-hotel-properties',
    '/blog/impact-of-esg-on-hotel-valuations',
    '/blog/ai-vs-traditional-appraisals',
  ].map((post) => ({
    url: `${baseUrl}${post}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...blogPosts];
}
