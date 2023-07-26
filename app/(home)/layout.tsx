import './../globals.css';
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/Navbar';
// const inter = Inter({ subsets: ['latin'] })
import Footer from '@/components/Footer';
export const metadata = {
  title: 'Zuhot',
  description: 'Generated by create next app',
}

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
      <body>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />
        <div className="container-fluid bg-dark">
          <Navbar.Default />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
