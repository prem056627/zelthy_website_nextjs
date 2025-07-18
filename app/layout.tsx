import type { Metadata } from 'next'
import { Instrument_Sans } from 'next/font/google'
import './globals.css'

const instrumentSans = Instrument_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Add the weights you need
  variable: '--font-instrument-sans', // Optional: for CSS variables
  display: 'swap', // For better loading performance
})

export const metadata: Metadata = {
  title: 'SaaS Platform - Clean and Modern Template',
  description: 'Clean and Modern Template for Elevating SaaS Products',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={instrumentSans.className}>{children}</body>
    </html>
  )
}