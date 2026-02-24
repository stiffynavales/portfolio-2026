import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
    title: 'Portfolio - Creative Developer',
    description: 'A Scrollytelling Personal Portfolio',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={inter.variable}>
            <body className="bg-background text-foreground antialiased selection:bg-white/30 selection:text-white">
                {children}
            </body>
        </html>
    )
}
