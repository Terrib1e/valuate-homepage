import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/app/components/auth-provider'
import { AnalyticsProvider } from '@/app/components/analytics-provider'
import { Toaster } from '@/app/components/ui/toaster'
import { ToastProvider } from '@/app/components/ui/toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Valuate - AI-Powered Hotel Acquisition Valuation',
  description: 'Make smarter hotel investment decisions with our AI-powered valuation platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ToastProvider>
            {children}
            <Toaster />
          </ToastProvider>
        </AuthProvider>
        <AnalyticsProvider />
      </body>
    </html>
  )
}