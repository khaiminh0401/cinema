'use client'
import '../../globals.css';
import { SessionProvider } from "next-auth/react"

export default function LoginLayout({
  children
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <head>
        <title>Zuhot Cinema</title>
      </head>
      <body>
        <div className="min-h-screen flex items-center max-lg:bg-gray-900 bg-white">
          <SessionProvider>
            {children}
          </SessionProvider>
        </div>
      </body>
    </html>
  )
}
