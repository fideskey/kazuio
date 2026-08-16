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
      // Cobre a página em si e todos os assets que ela carrega com caminho
      // relativo (js/, css/, images/, legal/*.html).
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
