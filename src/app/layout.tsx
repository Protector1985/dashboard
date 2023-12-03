import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { ReactNode } from 'react';
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

interface RootLayoutProps {
  children: ReactNode
}


export const metadata: Metadata = {
  title: 'Phonepal-Dashboard',
  description: 'Phonepal-Dashboard',
}


const RootLayout:React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
    <UserProvider>
      <body>{children}</body>
    </UserProvider>
    </html>
  );
}

export default RootLayout
