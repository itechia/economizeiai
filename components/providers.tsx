"use client"

import { CityProvider } from "@/components/city-context"

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CityProvider>
            {children}
        </CityProvider>
    )
}
