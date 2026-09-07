import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Kazuio — Perguntas que guiam. Reflexões que conectam.',
  description:
    'Kazuio é um espaço de reflexão com inteligência artificial que conversa com você para compreender o que está vivendo e enxergar novas perspectivas.',
  generator: 'Kazuio',
}

export const viewport: Viewport = {
  themeColor: '#f7f1e8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://kazuio.com/#organization',
        name: 'Kazuio',
        url: 'https://kazuio.com',
        logo: 'https://kazuio.com/brand/kazuio-logo-official.png',
        description:
          'Kazuio é um espaço de reflexão com inteligência artificial baseado em Psicologia, Filosofia e Fé, com biblioteca curada e verificada de citações reais.',
        sameAs: [
          'https://www.instagram.com/kazuio.app',
          'https://www.tiktok.com/@kazuio_app',
          'https://www.facebook.com/kazuio.ia',
          'https://www.linkedin.com/company/kazuio',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://kazuio.com/#website',
        name: 'Kazuio',
        alternateName: 'Kazuio App',
        url: 'https://kazuio.com',
        publisher: { '@id': 'https://kazuio.com/#organization' },
        inLanguage: 'pt-BR',
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Kazuio',
        applicationCategory: 'LifestyleApplication',
        operatingSystem: 'Web',
        url: 'https://kazuio.com',
        description:
          'Aplicativo de reflexão com inteligência artificial baseado em Psicologia, Filosofia e Fé.',
        offers: {
          '@type': 'Offer',
          priceCurrency: 'BRL',
          category: 'Subscription',
        },
      },
    ],
  }

  return (
    <html lang="pt-BR" className={`bg-cream ${inter.variable} ${fraunces.variable}`}>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
