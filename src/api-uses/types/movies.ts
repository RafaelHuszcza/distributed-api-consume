export type Movie = {
  imdbID: string
  Title: string
  Year: string
  Poster: string
}

type MoviesResponseSuccess = {
  Search: Movie[]
  totalResults: string
  Response: 'True'
}

// Tipagem do retorno da API quando não encontra filmes
type MoviesResponseNoResults = {
  Response: 'False'
  Error: string
}

export type MoviesResponse = MoviesResponseSuccess | MoviesResponseNoResults
