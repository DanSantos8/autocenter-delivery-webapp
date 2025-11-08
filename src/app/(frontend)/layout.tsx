import React from 'react'
import './styles.css'
import { Montserrat } from 'next/font/google'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-background min-h-screen`}>
        <main>{children}</main>
      </body>
    </html>
  )
}
