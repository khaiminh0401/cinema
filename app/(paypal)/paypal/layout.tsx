'use client'
import { SessionProvider } from "next-auth/react"

export default function PaypalLayout({
  children,
  session
}: {
  children: React.ReactNode,
  session: any
}) {
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
