/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost', 'www.adventureai.jp', 'adventureai.jp'],
        formats: ['image/webp', 'image/avif'],
    },
    trailingSlash: true,
    async redirects() {
        return [
            // Redirect apex domain to www
            {
                source: '/:path*',
                has: [
                    {
                        type: 'host',
                        value: 'adventureai.jp',
                    },
                ],
                destination: 'https://www.adventureai.jp/:path*',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig 