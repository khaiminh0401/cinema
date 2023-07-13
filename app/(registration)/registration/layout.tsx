import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/_next/image?url=%2Fassert%2Fimg%2Flogo.png&w=256&q=75" type="image/x-icon" sizes="any"></link>
      </head>
      <body className={inter.className}>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"/>
       {children}
      </body>
    </html>
  )
}
