import { Bungee } from 'next/font/google'
import './globals.css'

const bung = Bungee({ subsets: ['latin'], weight: '400'})

export const metadata = {
  title: 'Order',
  description: 'Select your favorite combo!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bung.className}>{children}</body>
    </html>
  )
}
