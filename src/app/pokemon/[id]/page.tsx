'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface PokemonDetails {
  name: string
  id: number
  sprites: {
    front_default: string
    back_default: string
  }
  types: {
    type: {
      name: string
    }
  }[]
  height: number
  weight: number
  abilities: {
    ability: {
      name: string
    }
  }[]
  stats: {
    base_stat: number
    stat: {
      name: string
    }
  }[]
}

export default function PokemonDetails() {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState<PokemonDetails | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        if (!response.ok) throw new Error('Pokémon não encontrado')
        const data = await response.json()
        setPokemon(data)
      } catch (err) {
        setError('Erro ao carregar detalhes do Pokémon.')
      } finally {
        setLoading(false)
      }
    }

    fetchPokemonDetails()
  }, [id])

  if (loading) return <p>Carregando...</p>
  if (error) return <p className="text-red-500">{error}</p>
  if (!pokemon) return null

  return (
    <div className="container mx-auto p-4">
      <Link href="/">
        <Button className="mb-4">Voltar para a pesquisa</Button>
      </Link>
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="flex-shrink-0">
              <img
                src={pokemon.sprites.front_default}
                alt={`${pokemon.name} frente`}
                className="h-48 w-48"
              />
              <img
                src={pokemon.sprites.back_default}
                alt={`${pokemon.name} costas`}
                className="h-48 w-48"
              />
            </div>
            <div className="flex-grow">
              <p>
                <strong>Número:</strong> {pokemon.id}
              </p>
              <p>
                <strong>Tipo(s):</strong>{' '}
                {pokemon.types.map((t) => t.type.name).join(', ')}
              </p>
              <p>
                <strong>Altura:</strong> {pokemon.height / 10} m
              </p>
              <p>
                <strong>Peso:</strong> {pokemon.weight / 10} kg
              </p>
              <p>
                <strong>Habilidades:</strong>{' '}
                {pokemon.abilities.map((a) => a.ability.name).join(', ')}
              </p>
              <h3 className="mb-2 mt-4 text-xl font-semibold">
                Estatísticas base:
              </h3>
              <ul>
                {pokemon.stats.map((stat) => (
                  <li key={stat.stat.name}>
                    <strong>{stat.stat.name}:</strong> {stat.base_stat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
