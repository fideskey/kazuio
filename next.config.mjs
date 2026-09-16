/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      // Serve o app (chat) como se fosse uma página do próprio kazuio.com,
      // sem redirecionar visivelmente o usuário para app.kazuio.com.
      // A resolução de caminhos relativos (css/, js/, images/, legal/)
      // é garantida pela tag <base href="/chat/"> no próprio HTML do app,
      // não por regras de barra final aqui — evita loop de redirecionamento
      // (Next.js remove barra final por padrão, o que conflitava com uma
      // tentativa anterior de forçar /chat -> /chat/ aqui).
      {
        source: '/chat',
        destination: 'https://app.kazuio.com',
      },
      {
        source: '/chat/:path*',
        destination: 'https://app.kazuio.com/:path*',
      },
    ]
  },
  async redirects() {
    return [
      // Corrige URL indexada incorretamente no Google Search Console
      // (com "políticas" no plural) para a página real do site, que
      // sempre existiu no singular. Sem isso, o Google tenta validar
      // uma URL que nunca existiu e a validação falha permanentemente.
      {
        source: '/politicas-de-cookies',
        destination: '/politica-de-cookies',
        permanent: true,
      },
      {
        source: '/politicas-de-privacidade',
        destination: '/politica-de-privacidade',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
