'use client';
import React from 'react'
import ReactQueryProviders from './providers/react-query.provider'
import { TanStackDevtools } from '@tanstack/react-devtools'
import NextAuth from 'next-auth'
import NextAuthProvider from './providers/next-auth.provider'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProviders>
      <NextAuthProvider>
      {/* react-query devtools */}
      <TanStackDevtools config={{defaultOpen: false}}/>

      {children}
      </NextAuthProvider>
    </ReactQueryProviders>
  )
}