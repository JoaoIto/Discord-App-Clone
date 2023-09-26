import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Discord Clone',
    description: 'A clone UI/UX for Discord',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head>
            <link rel="shortcut icon" href="./assets/discord.png" type="image/x-icon"/>
        </head>
        <body className={inter.className}>{children}</body>
        </html>
    )
}
