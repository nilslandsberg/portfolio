import './globals.css'
import { Roboto } from 'next/font/google'

const roboto= Roboto({ 
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'] 
})

export const metadata = {
  title: 'Nils Landsberg * Full Stack Software Engineer',
  description: 'Innovative, User-Friendly, and Impactful Solutions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="emerald">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
