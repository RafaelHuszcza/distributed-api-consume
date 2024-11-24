'use client'

import { Bitcoin, Loader2, Plus, X } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { defaultCryptos, useCryptoRates } from '@/hooks/use-crypto-rates'

interface CryptoConverterProps {
  boxOffice: string
}

export function CryptoConverter({ boxOffice }: CryptoConverterProps) {
  const { rates, isLoading, error, addCrypto, removeCrypto, cryptos } =
    useCryptoRates()
  const [open, setOpen] = useState(false)
  const [newCrypto, setNewCrypto] = useState('')

  const convertToNumber = (boxOffice: string): number => {
    return Number(boxOffice.replace(/[^0-9.-]+/g, ''))
  }

  const formatCrypto = (value: number): string => {
    return value.toFixed(6)
  }

  const handleAddCrypto = () => {
    if (newCrypto) {
      addCrypto(newCrypto.toLowerCase())
      setNewCrypto('')
    }
  }

  if (!boxOffice || boxOffice === 'N/A') return null
  if (error) return null

  const boxOfficeValue = convertToNumber(boxOffice)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Bitcoin className="h-4 w-4" />
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <span>View in Crypto</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0" align="start">
        <Command>
          <CommandInput
            placeholder="Search cryptocurrency..."
            value={newCrypto}
            onValueChange={setNewCrypto}
          />
          <CommandList>
            <CommandEmpty>No cryptocurrency found.</CommandEmpty>
            <CommandGroup heading="Conversions">
              {rates &&
                cryptos.map((crypto) => (
                  <CommandItem key={crypto} className="flex justify-between">
                    <span>{crypto.toUpperCase()}</span>
                    <span>
                      {formatCrypto(boxOfficeValue / rates[crypto]?.usd)}
                    </span>
                    {defaultCryptos?.includes(crypto) ? null : (
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeCrypto(crypto)}
                        className="h-4 w-4 p-0"
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    )}
                  </CommandItem>
                ))}
            </CommandGroup>
          </CommandList>
          <div className="flex items-center border-t p-2">
            <Button onClick={handleAddCrypto} size="sm" className="ml-auto">
              <Plus className="mr-2 h-4 w-4" />
              Add Crypto
            </Button>
          </div>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
