'use client'

import MoviesList from '@/components/movie-list'
import { useFavoritesContext } from '@/providers/favorites-provider'

export default function FavoritesPage() {
  const { favoriteMovies } = useFavoritesContext()

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-2xl">Favorites</h1>
      <div>
        <MoviesList movies={favoriteMovies} />
      </div>
    </div>
  )
}
