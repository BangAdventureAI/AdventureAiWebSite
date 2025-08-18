import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'AdventureAI株式会社',
    description: 'AIで未来を探求し、新たな価値を創造する',
    keywords: 'AI, 人工知能, ソフトウェア開発, コンサルティング, 輸出支援',
    authors: [{ name: 'AdventureAI株式会社' }],
    creator: 'AdventureAI株式会社',
    publisher: 'AdventureAI株式会社',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://www.adventureai.jp'),
    alternates: {
        canonical: '/',
        languages: {
            'ja': '/',
            'en': '/en',
        },
    },
    openGraph: {
        title: 'AdventureAI株式会社',
        description: 'AIで未来を探求し、新たな価値を創造する',
        url: 'https://www.adventureai.jp',
        siteName: 'AdventureAI株式会社',
        locale: 'ja_JP',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AdventureAI株式会社',
        description: 'AIで未来を探求し、新たな価値を創造する',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ja">
            <head>
                <link rel="icon" type="image/png" href="/images/logo.png" />
                <link rel="shortcut icon" type="image/png" href="/images/logo.png" />
                <link rel="apple-touch-icon" href="/images/logo.png" />

                {/* Google tag (gtag.js) */}
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-PSYBVJ3787"
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PSYBVJ3787');
            `,
                    }}
                />
            </head>
            <body>
                {children}
            </body>
        </html>
    )
} 