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
}

export default nextConfig
