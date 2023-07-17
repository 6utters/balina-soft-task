import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { MainLayout } from '@/shared/layouts/mainLayout/MainLayout'
import './styles/index.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Korona Ticket',
  description: 'The place where you can buy any tickets.'
}

export default function RootLayout({
                                     children
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
    <body className={inter.className}><MainLayout>{children}</MainLayout></body>
    </html>
  )
}
