'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'

interface Pokemon {
  name: string
  id: number
  sprites: {
    front_default: string
  }
  types: {
    type: {
      name: string
    }
  }[]
}

export default function PokemonSearch() {
  const [search, setSearch] = useState('')
  const [pokemon, setPokemon] = useState<Pokemon[]>([])
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (search.length > 1) {
      fetchSuggestions(search)
    } else {
      setSuggestions([])
    }
  }, [search])

  const fetchSuggestions = async (query: string) => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=1000`,
      )
      const data = await response.json()
      const filteredPokemon = data.results
        .filter((p: { name: string }) => p.name.includes(query.toLowerCase()))
        .map((p: { name: string }) => p.name)
      setSuggestions(filteredPokemon.slice(0, 5))
    } catch (err) {
      console.error('Error fetching suggestions:', err)
    }
  }

  const searchPokemon = async (pokemonName: string) => {
    setLoading(true)
    setError('')
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`,
      )
      if (!response.ok) throw new Error('Pokémon não encontrado')
      const data = await response.json()
      setPokemon([data])
    } catch (err) {
      setError('Pokémon não encontrado. Tente outro nome ou número.')
      setPokemon([])
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (search) {
      searchPokemon(search)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-3xl font-bold">Pesquisa de Pokémon</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex gap-2">
          <Input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Digite o nome do Pokémon"
            className="flex-grow"
            list="pokemon-suggestions"
          />
          <Button type="submit" disabled={loading}>
            {loading ? 'Buscando...' : 'Buscar'}
          </Button>
        </div>
        <datalist id="pokemon-suggestions">
          {suggestions.map((suggestion) => (
            <option key={suggestion} value={suggestion} />
          ))}
        </datalist>
      </form>
      {error && (
        <p className="mb-4 text-red-500" role="alert">
          {error}
        </p>
      )}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {pokemon.map((poke) => (
          <Card key={poke.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>
                {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <img
                src={poke.sprites.front_default}
                alt={poke.name}
                className="mx-auto h-32 w-32"
              />
              <p className="text-center">
                <strong>Tipo(s):</strong>{' '}
                {poke.types.map((t) => t.type.name).join(', ')}
              </p>
            </CardContent>
            <CardFooter className="justify-center">
              <Link href={`/pokemon/${poke.id}`}>
                <Button>Mais detalhes</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
