import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/context/context_provider'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Color Picker',
  description: 'Pick a color from an image',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
      <body className='app'>{children}</body>
      </ThemeProvider>
    </html>
  )
}
