"use client"

import * as React from "react"
import { Check, ChevronsUpDown, MapPin, Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useCity } from "@/components/city-context"

export function CitySelector() {
    const { cities, currentCity, setCurrentCity } = useCity()
    const [open, setOpen] = React.useState(false)

    return (
        <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-full md:w-[200px] justify-between h-9 text-sm"
                    >
                        {currentCity
                            ? cities.find((city) => city.id === currentCity.id)?.name
                            : "Selecione sua cidade..."}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[300px] md:w-[200px] p-0">
                    <Command>
                        <CommandInput placeholder="Buscar cidade..." />
                        <CommandList>
                            <CommandEmpty>Cidade não encontrada.</CommandEmpty>
                            <CommandGroup>
                                {cities.map((city) => (
                                    <CommandItem
                                        key={city.id}
                                        value={city.name}
                                        onSelect={(currentValue) => {
                                            const selected = cities.find((c) => c.name === currentValue)
                                            setCurrentCity(selected || null)
                                            setOpen(false)
                                        }}
                                    >
                                        <Check
                                            className={cn(
                                                "mr-2 h-4 w-4",
                                                currentCity?.id === city.id ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                        {city.name}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    )
}
