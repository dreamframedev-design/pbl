import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.pblassaysci.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const routes = [
    '/',
    '/products',
    '/products/assay-kits',
    '/products/proteins',
    '/products/antibodies',
    '/services',
    '/services/assay-development',
    '/services/biomarker-sample-analysis',
    '/services/cell-based-services',
    '/services/custom-production',
    '/services/antibody-characterization',
    '/resources',
    '/blog',
    '/contact-us',
    '/distributors',
    '/privacy',
    '/terms',
  ]

  return routes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
  }))
}

