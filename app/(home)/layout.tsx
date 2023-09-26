'use client'
import { SessionProvider } from "next-auth/react";
import '../globals.css';
// const inter = Inter({ subsets: ['latin'] })
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import {Session} from "next-auth";

export const metadata = {
  title: 'Zuhot',
  description: 'Generated by create next app',
}

export default function HomeLayout({
  children,
  session
}: {
  children: React.ReactNode,
  session: Session
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/_next/image?url=%2Fassert%2Fimg%2Flogo.png&w=256&q=75" type="image/x-icon" sizes="any"></link>
      </head>
      <body>
        <div className="container-fluid select-none">
          <SessionProvider session={session}>
            <Navbar />
            {children}
            <Footer />
          </SessionProvider>
        </div>
      </body>
    </html>
  )
}
