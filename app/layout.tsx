import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'shreepad Avhad',
  description: 'Created by shreepad Avhad',
  generator: 'shreepad Avhad',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className="min-h-screen bg-background"
        data-new-gr-c-s-check-loaded="14.1229.0"
        data-gr-ext-installed=""
      >
        {children}
      </body>
    </html>
  )
}
