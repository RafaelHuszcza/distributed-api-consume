'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { Toaster } from '@/components/ui/sonner'

import { FavoritesProvider } from './favorites-provider'
import { ThemeProvider } from './theme-provider'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient({})

  return (
    <FavoritesProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <QueryClientProvider client={queryClient}>
          {children}
          <Toaster richColors position="top-right" closeButton />
        </QueryClientProvider>
      </ThemeProvider>
    </FavoritesProvider>
  )
}
