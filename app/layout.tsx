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
  title: 'Danil Scenic Tours | Kenya Safari & Adventure Tours',
  description: 'Guided safaris, cultural expeditions, adventure tours & beach escapes in Kenya. 5.0/5 rated. Licensed tour operator. Custom itineraries from $128/day.',
  openGraph: {
    title: 'Danil Scenic Tours | Kenya Safari & Adventure Tours',
    description: 'Guided safaris, cultural expeditions, adventure tours & beach escapes in Kenya.',
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
