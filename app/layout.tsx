import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Replix — AI-drivna recensionssvar',
  description: 'Svara på Google-recensioner på sekunder med AI.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv">
      <body className="bg-gray-50 min-h-screen">
        {children}
      </body>
    </html>
  )
}
