'use client'
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

import { useIsClient } from '@/hooks/use-is-client'

interface Movie {
  imdbID: string
  Title: string
  Year: string
  Poster: string
  Plot?: string
}

interface FavoritesContextType {
  favoriteMovies: Movie[]
  addFavoriteMovie: (movie: Movie) => void
  removeFavoriteMovie: (id: string) => void
  toggleFavorite: (movie: Movie) => void
  isFavoriteMovie: (imdbID: string) => boolean
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined,
)

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const isClient = useIsClient()
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([])

  useEffect(() => {
    if (isClient) {
      const storedMovies = localStorage.getItem('favoriteMovies')
      if (storedMovies) {
        setFavoriteMovies(JSON.parse(storedMovies))
      }
    }
  }, [isClient])

  useEffect(() => {
    if (isClient) {
      localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies))
    }
  }, [favoriteMovies, isClient])

  const addFavoriteMovie = (movie: Movie) => {
    setFavoriteMovies((prevFavorites) => {
      if (!prevFavorites.some((favMovie) => favMovie.imdbID === movie.imdbID)) {
        return [...prevFavorites, movie]
      }
      return prevFavorites
    })
  }

  const removeFavoriteMovie = (imdbID: string) => {
    setFavoriteMovies((prevFavorites) =>
      prevFavorites.filter((movie) => movie.imdbID !== imdbID),
    )
  }

  const toggleFavorite = (movie: Movie) => {
    if (favoriteMovies.some((favMovie) => favMovie.imdbID === movie.imdbID)) {
      removeFavoriteMovie(movie.imdbID)
    } else {
      addFavoriteMovie(movie)
    }
  }

  const isFavoriteMovie = (imdbID: string) => {
    return favoriteMovies.some((movie) => movie.imdbID === imdbID)
  }

  if (!isClient) {
    return null // or return a loading state
  }

  return (
    <FavoritesContext.Provider
      value={{
        favoriteMovies,
        addFavoriteMovie,
        removeFavoriteMovie,
        toggleFavorite,
        isFavoriteMovie,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}

export const useFavoritesContext = () => {
  const context = useContext(FavoritesContext)
  if (!context) {
    throw new Error(
      'useFavoritesContext must be used within a FavoritesProvider',
    )
  }
  return context
}
