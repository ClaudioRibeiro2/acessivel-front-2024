export default function manifest() {
  return {
    name: '+Acessível',
    short_name: 'Acessível',
    description: 'Não sei',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/public/next.svg',
        sizes: '192x192',
        type: 'image/svg',
      }
    ],
  }
}
