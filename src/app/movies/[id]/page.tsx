'use client'

import {
  ArrowLeft,
  Award,
  Calendar,
  Clock,
  DollarSign,
  Heart,
  Star,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { useMovie } from '@/api-uses'
import { CryptoConverter } from '@/components/crypto-converter'
import { LoadingMovie } from '@/components/loading-movie'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useFavoritesContext } from '@/providers/favorites-provider'

export default function MovieDetailsPage({
  params,
}: {
  params: { id: string }
}) {
  const router = useRouter()
  const { data: movie, isLoading, isError } = useMovie(params.id)
  const { toggleFavorite, isFavoriteMovie } = useFavoritesContext()
  const isFavorite = isFavoriteMovie(movie?.imdbID)

  if ((!movie && !isLoading) || isError) {
    router.push('/')
  }
  if (isLoading) {
    return <LoadingMovie />
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <Link href="/" passHref>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Movies
          </Button>
        </Link>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => toggleFavorite(movie)}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart
            className={`h-6 w-6 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-500'}`}
          />
        </Button>
      </div>
      <div className="grid gap-8 md:grid-cols-[300px_1fr]">
        <div className="space-y-4">
          {movie.Poster && movie.Poster !== 'N/A' ? (
            <Image
              src={movie.Poster}
              alt={`${movie.Title} poster`}
              width={300}
              height={450}
              className="rounded-lg shadow-lg"
              priority
            />
          ) : (
            <div className="flex h-[450px] w-[300px] items-center justify-center rounded-lg bg-muted">
              No poster available
            </div>
          )}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Ratings</h2>
            {movie.Ratings && movie.Ratings.length > 0 ? (
              <div className="space-y-2">
                {movie.Ratings.map(
                  (
                    rating: { Source: string; Value: string },
                    index: number,
                  ) => (
                    <div key={index} className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span>
                        {rating.Source}: {rating.Value}
                      </span>
                    </div>
                  ),
                )}
              </div>
            ) : (
              <p>No ratings available</p>
            )}
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold">
              {movie.Title || 'Unknown Title'}
            </h1>

            <div className="mt-2 flex flex-wrap items-center gap-2">
              <Badge variant="secondary">{movie.Year || 'Unknown Year'}</Badge>
              <Badge variant="secondary">{movie.Rated || 'Not Rated'}</Badge>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{movie.Runtime || 'Unknown Runtime'}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {movie.Genre ? (
              movie.Genre.split(', ').map((genre: string) => (
                <Badge key={genre} variant="outline">
                  {genre}
                </Badge>
              ))
            ) : (
              <Badge variant="outline">Unknown Genre</Badge>
            )}
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Plot</h2>
            <p>{movie.Plot || 'No plot summary available.'}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold">Director</h2>
              <p>{movie.Director || 'Unknown'}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Writer</h2>
              <p>{movie.Writer || 'Unknown'}</p>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Cast</h2>
            <p>{movie.Actors || 'Unknown'}</p>
          </div>
          <Separator />
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Released: {movie.Released || 'Unknown'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                <span>Awards: {movie.Awards || 'None'}</span>
              </div>
            </div>
            <div className="space-y-2">
              <div>Language: {movie.Language || 'Unknown'}</div>
              <div>Country: {movie.Country || 'Unknown'}</div>
              {movie.BoxOffice && movie.BoxOffice !== 'N/A' && (
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  <span>Box Office: {movie.BoxOffice}</span>
                  <CryptoConverter boxOffice={movie.BoxOffice} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
