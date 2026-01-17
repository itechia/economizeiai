"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"


export type City = {
    id: string
    name: string
    slug: string
    whatsappLink: string
}

type CityContextType = {
    cities: City[]
    currentCity: City | null
    setCurrentCity: (city: City | null) => void
    addCity: (city: Omit<City, "id">) => void
    updateCity: (id: string, data: Partial<Omit<City, "id">>) => void
    removeCity: (id: string) => void
    whatsappLink: string
}

const CityContext = createContext<CityContextType | undefined>(undefined)

const DEFAULT_WHATSAPP_LINK = "https://chat.whatsapp.com/invite/placeholder" // Default fallback

export function CityProvider({ children }: { children: React.ReactNode }) {
    const [cities, setCities] = useState<City[]>([])
    const [currentCity, setCurrentCity] = useState<City | null>(null)
    const searchParams = useSearchParams()

    // Fetch cities from Supabase
    useEffect(() => {
        const fetchCities = async () => {
            const { data, error } = await supabase.from('cities').select('*')
            if (error) {
                console.error("Error fetching cities:", error)
                return
            }
            if (data) {
                // Map database columns to app types if necessary, but here they match mostly.
                // Our City type has camelCase 'whatsappLink', DB has snake_case 'whatsapp_link'.
                const formattedCities = data.map((c: any) => ({
                    id: c.id,
                    name: c.name,
                    slug: c.slug,
                    whatsappLink: c.whatsapp_link // Mapping here
                }))
                setCities(formattedCities)
            }
        }

        fetchCities()

        // Realtime subscription to keep UI in sync
        const channel = supabase
            .channel('cities_changes')
            .on(
                'postgres_changes',
                { event: '*', schema: 'public', table: 'cities' },
                () => {
                    fetchCities()
                }
            )
            .subscribe()

        return () => {
            supabase.removeChannel(channel)
        }
    }, [])

    // Handle URL params and LocalStorage for SELECTION only
    useEffect(() => {
        const citySlug = searchParams.get("city")
        if (citySlug && cities.length > 0) {
            const foundCity = cities.find(c => c.slug === citySlug)
            if (foundCity) {
                setCurrentCity(foundCity)
                return
            }
        }
        const savedCityId = localStorage.getItem("economize-current-city-id")
        if (savedCityId && cities.length > 0 && !citySlug) {
            const foundCity = cities.find(c => c.id === savedCityId)
            if (foundCity) setCurrentCity(foundCity)
        }
    }, [searchParams, cities])

    const handleSetCurrentCity = (city: City | null) => {
        setCurrentCity(city)
        if (city) {
            localStorage.setItem("economize-current-city-id", city.id)
        } else {
            localStorage.removeItem("economize-current-city-id")
        }
    }

    const addCity = async (newCity: Omit<City, "id">) => {
        const { error } = await supabase.from('cities').insert([
            {
                name: newCity.name,
                slug: newCity.slug,
                whatsapp_link: newCity.whatsappLink,
            }
        ])
        if (error) {
            console.error("Error adding city:", error.message)
            alert("Erro ao adicionar cidade: " + error.message)
        }
    }

    const updateCity = async (id: string, data: Partial<Omit<City, "id">>) => {
        const updates: any = {}
        if (data.name) updates.name = data.name
        if (data.slug) updates.slug = data.slug
        if (data.whatsappLink) updates.whatsapp_link = data.whatsappLink

        const { error } = await supabase.from('cities').update(updates).eq('id', id)

        if (error) {
            console.error("Error updating city:", error.message)
            alert("Erro ao atualizar cidade: " + error.message)
        } else {
            // Update current city immediately if selected
            if (currentCity?.id === id) {
                setCurrentCity(prev => prev ? ({ ...prev, ...data }) : null)
            }
        }
    }

    const removeCity = async (id: string) => {
        const { error } = await supabase.from('cities').delete().eq('id', id)
        if (error) {
            console.error("Error deleting city:", error.message)
            alert("Erro ao remover cidade: " + error.message)
        } else if (currentCity?.id === id) {
            setCurrentCity(null)
            localStorage.removeItem("economize-current-city-id")
        }
    }

    const whatsappLink = currentCity ? currentCity.whatsappLink : DEFAULT_WHATSAPP_LINK

    return (
        <CityContext.Provider value={{ cities, currentCity, setCurrentCity: handleSetCurrentCity, addCity, updateCity, removeCity, whatsappLink }}>
            {children}
        </CityContext.Provider>
    )
}

export function useCity() {
    const context = useContext(CityContext)
    if (context === undefined) {
        throw new Error("useCity must be used within a CityProvider")
    }
    return context
}
