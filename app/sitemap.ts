import type { MetadataRoute } from 'next'

const BASE_URL = 'https://kazuio.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/quem-somos`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/pilares`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/biblioteca`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/como-funciona`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/precos`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/termos-e-condicoes`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/politica-de-privacidade`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/politica-de-cookies`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
