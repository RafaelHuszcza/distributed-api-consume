'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

interface DogData {
  message: string
  status: string
}

export default function Dogs() {
  const [dogImage, setDogImage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchDogImage = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random')
      if (!response.ok) {
        throw new Error('Failed to fetch dog image')
      }
      const data: DogData = await response.json()
      setDogImage(data.message)
    } catch (err) {
      setError('Error fetching dog image. Please try again.')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchDogImage()
  }, [])

  return (
    <div className="flex h-full items-center justify-center">
      <Card className="mx-auto w-full max-w-md overflow-hidden">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Random Dog Image
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="relative h-64 w-full">
            {isLoading ? (
              <div className="flex h-full items-center justify-center bg-gray-100">
                <div className="animate-pulse text-gray-500">Loading...</div>
              </div>
            ) : error ? (
              <div className="flex h-full items-center justify-center bg-gray-100">
                <div className="text-red-500">{error}</div>
              </div>
            ) : dogImage ? (
              <Image
                src={dogImage}
                alt="Random dog"
                fill
                className="object-cover"
              />
            ) : null}
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={fetchDogImage} disabled={isLoading}>
            {isLoading ? 'Fetching...' : 'Fetch New Dog'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
