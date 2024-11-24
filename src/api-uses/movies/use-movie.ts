'use client'
import { useQuery } from '@tanstack/react-query'

import { apiClient } from '../api-client'
import { moviesQueryKeys } from './movies-query-keys'
export function useMovie(id: string) {
  const getMovieFn = async () => {
    const response = await apiClient.get('/', {
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        apikey: process.env.NEXT_PUBLIC_API_KEY,
        i: id,
      },
    })
    return response.data
  }

  return useQuery({
    queryKey: moviesQueryKeys.detail(id.toString()),
    queryFn: getMovieFn,
    retry: 1,
  })
}
