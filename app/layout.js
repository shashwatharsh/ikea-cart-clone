import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/redux/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IKEA Cart clone',
  description: 'Ikea cart clone in nextjs and tailwind',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  )
}
