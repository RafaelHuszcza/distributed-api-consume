'use client'

import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

interface CryptoRate {
  [key: string]: { usd: number }
}

export const defaultCryptos = ['bitcoin', 'ethereum', 'dogecoin']

export function useCryptoRates() {
  const [cryptos, setCryptos] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('customCryptos')
      return stored
        ? [...defaultCryptos, ...JSON.parse(stored)]
        : defaultCryptos
    }
    return defaultCryptos
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const customCryptos = cryptos.filter(
        (crypto) => !defaultCryptos.includes(crypto),
      )
      localStorage.setItem('customCryptos', JSON.stringify(customCryptos))
    }
  }, [cryptos])

  const fetchCryptoRates = async (): Promise<CryptoRate> => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${cryptos.join(',')}&vs_currencies=usd`,
    )
    if (!response.ok) throw new Error('Failed to fetch crypto rates')
    return response.json()
  }

  const {
    data: rates,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['cryptoRates', cryptos],
    queryFn: fetchCryptoRates,
    refetchInterval: 60000, // Refetch every minute
  })

  const addCrypto = (newCrypto: string) => {
    if (!cryptos.includes(newCrypto)) {
      setCryptos((prev) => [...prev, newCrypto])
    }
  }

  const removeCrypto = (cryptoToRemove: string) => {
    if (!defaultCryptos.includes(cryptoToRemove)) {
      setCryptos((prev) => prev.filter((crypto) => crypto !== cryptoToRemove))
    }
  }

  return { rates, isLoading, error, addCrypto, removeCrypto, cryptos }
}
