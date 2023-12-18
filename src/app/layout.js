"use client";
import { Inter } from 'next/font/google'
import './globals.css'
import CustomCursor from '@/components/cursor/Cursor'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>{children}</body>
    </html>
  )
}
