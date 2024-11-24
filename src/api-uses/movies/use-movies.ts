'use client'
import { keepPreviousData, useQuery } from '@tanstack/react-query'

import useDebounce from '@/hooks/use-debounce'

import { apiClient } from '../api-client'
import { MoviesResponse } from '../types/movies'
import { moviesQueryKeys } from './movies-query-keys'

export function useMovies(title: string, page?: number) {
  const debouncedTitle = useDebounce(title, 500)

  const getMoviesFn = async (): Promise<MoviesResponse> => {
    const response = await apiClient.get('/', {
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        apikey: process.env.NEXT_PUBLIC_API_KEY,
        s: debouncedTitle,
        page,
      },
    })

    return response.data
  }
  return useQuery({
    queryKey: moviesQueryKeys.query(debouncedTitle),
    queryFn: () => getMoviesFn(),
    placeholderData: keepPreviousData,
    enabled: !!debouncedTitle,
  })
}
