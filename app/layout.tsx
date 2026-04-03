import type { Metadata } from 'next'
import { Cormorant_Garamond, Playfair_Display, Inter, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  variable: '--font-cormorant',
  weight: ['400', '500', '600', '700']
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700']
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Best Tour Operator in Nairobi for Kenya Safari Tours & Masai Mara Safari Packages',
  description: 'Explore Kenya with Danil Scenic Tours, the premier tour operator in Nairobi. Discover Masai Mara safari packages, private tours, and professional car hire. Unforgettable wildlife experiences await.',
  openGraph: {
    title: 'Best Tour Operator in Nairobi for Kenya Safari Tours & Masai Mara Safari Packages',
    description: 'Explore Kenya with Danil Scenic Tours, the premier tour operator in Nairobi. Discover Masai Mara safari packages, private tours, and professional car hire.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`font-sans antialiased ${cormorant.variable} ${playfair.variable} ${inter.variable} ${montserrat.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
