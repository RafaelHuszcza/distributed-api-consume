'use client'
import { LoaderCircle, Search } from 'lucide-react'
import { useState } from 'react'

import { useMovies } from '@/api-uses'
import MoviesList from '@/components/movie-list'
import { Input } from '@/components/ui/input'
export default function Page() {
  const [title, setTitle] = useState<string>('')
  const { data: moviesData, isLoading, error } = useMovies(title)

  return (
    <div className="flex flex-col items-center p-4">
      <div className="relative w-full max-w-sm justify-center">
        <Input
          type="search"
          placeholder="Search..."
          className="pl-8"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Search className="absolute left-2.5 top-2.5 h-4 w-4" />
      </div>
      {isLoading && (
        <div className="flex min-h-screen items-center justify-center">
          <LoaderCircle className="animate-spin" />
        </div>
      )}

      {error && <p>Erro ao buscar filmes: {(error as Error).message}</p>}

      {moviesData && moviesData.Response === 'False' && (
        <div className="py-10 text-center">
          <p className="text-xl text-muted-foreground">No movies found.</p>
        </div>
      )}
      {moviesData && moviesData.Response === 'True' && (
        <div className="flex flex-col items-center p-4">
          <MoviesList movies={moviesData.Search} />
        </div>
      )}
    </div>
  )
}
