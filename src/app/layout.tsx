import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import ThemeProviderClient from '@/components/ThemeProviderClient'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

export const metadata: Metadata = {
  title: 'WellSpring Health Center',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`antialiased p-0 m-0`}>
        <ThemeProviderClient>{children}</ThemeProviderClient>
      </body>
    </html>
  )
}
