import type { Metadata } from 'next'
import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"



export const metadata: Metadata = {
  title: 'Francis Jones fullstack developer',
  description: 'Online portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
        </body>
    </html>
  )
}
