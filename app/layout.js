import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Your Name - Portfolio',
    template: '%s | Your Name'
  },
  description: 'Frontend Developer and UI/UX Designer Portfolio',
  keywords: ['Frontend Developer', 'UI/UX Designer', 'Web Developer', 'React', 'Next.js'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'Your Name - Portfolio',
    description: 'Frontend Developer and UI/UX Designer Portfolio',
    siteName: 'Your Name Portfolio'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Name - Portfolio',
    description: 'Frontend Developer and UI/UX Designer Portfolio',
    creator: '@yourtwitter'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}