"use client"

import { Suspense } from "react"
import { CityProvider } from "@/components/city-context"

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <Suspense fallback={null}>
            <CityProvider>
                {children}
            </CityProvider>
        </Suspense>
    )
}
