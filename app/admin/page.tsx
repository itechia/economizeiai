"use client"

import { useState, useEffect } from "react"
import { useCity } from "@/components/city-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Trash2 } from "lucide-react"
import Link from "next/link"
import { supabase } from "@/lib/supabase"

export default function AdminPage() {
    const { cities, addCity, updateCity, removeCity } = useCity()
    const [name, setName] = useState("")
    const [slug, setSlug] = useState("")
    const [link, setLink] = useState("")

    // Auth State
    const [session, setSession] = useState<any>(null)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [authError, setAuthError] = useState<string | null>(null)

    // Edit State
    const [editingId, setEditingId] = useState<string | null>(null)

    useEffect(() => {
        // Check active session on mount
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })

        return () => subscription.unsubscribe()
    }, [])

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setAuthError(null)

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (error) {
            setAuthError(error.message)
        }
        setLoading(false)
    }

    const handleLogout = async () => {
        await supabase.auth.signOut()
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!name || !slug || !link) return

        if (editingId) {
            updateCity(editingId, { name, slug, whatsappLink: link })
            setEditingId(null)
        } else {
            addCity({ name, slug, whatsappLink: link })
        }

        setName("")
        setSlug("")
        setLink("")
    }

    const handleEdit = (city: { id: string, name: string, slug: string, whatsappLink: string }) => {
        setEditingId(city.id)
        setName(city.name)
        setSlug(city.slug)
        setLink(city.whatsappLink)
    }

    const handleCancelEdit = () => {
        setEditingId(null)
        setName("")
        setSlug("")
        setLink("")
    }

    // Auto-generate slug from name
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value
        setName(val)
        if (!editingId) {
            setSlug(val.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, ''))
        }
    }

    if (!session) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background px-4">
                <div className="w-full max-w-md space-y-6">
                    <div className="text-center space-y-2">
                        <h1 className="text-3xl font-bold">Admin Login</h1>
                        <p className="text-muted-foreground">Área restrita para gerenciamento.</p>
                    </div>

                    <div className="bg-card border rounded-xl p-6 shadow-sm">
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="admin@exemplo.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Senha</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="******"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                {authError && <p className="text-sm text-red-500">{authError}</p>}
                            </div>
                            <Button type="submit" className="w-full" disabled={loading}>
                                {loading ? "Entrando..." : "Entrar"}
                            </Button>
                        </form>
                    </div>
                    <Button asChild variant="link" className="w-full">
                        <Link href="/">Voltar para o site</Link>
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto py-10 max-w-2xl">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Gerenciar Cidades</h1>
                <div className="flex gap-2">
                    <Button variant="ghost" onClick={handleLogout}>Sair</Button>
                    <Button asChild variant="outline">
                        <Link href="/">Voltar para Home</Link>
                    </Button>
                </div>
            </div>

            <div className="bg-card border rounded-xl p-6 shadow-sm mb-8">
                <h2 className="text-xl font-semibold mb-4">{editingId ? "Editar Cidade" : "Adicionar Nova Cidade"}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Nome da Cidade</Label>
                            <Input
                                id="name"
                                placeholder="Ex: Rio Maria - PA"
                                value={name}
                                onChange={handleNameChange}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="slug">Slug (URL)</Label>
                            <Input
                                id="slug"
                                placeholder="ex: rio-maria-pa"
                                value={slug}
                                onChange={(e) => setSlug(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="link">Link do Grupo WhatsApp</Label>
                        <Input
                            id="link"
                            placeholder="https://chat.whatsapp.com/..."
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                        />
                    </div>

                    <div className="flex gap-2">
                        {editingId && (
                            <Button type="button" variant="outline" className="w-full" onClick={handleCancelEdit}>Cancelar</Button>
                        )}
                        <Button type="submit" className="w-full">
                            {editingId ? "Atualizar Cidade" : "Cadastrar Cidade"}
                        </Button>
                    </div>
                </form>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl font-semibold">Cidades Cadastradas ({cities.length})</h2>
                {cities.length === 0 && (
                    <p className="text-muted-foreground">Nenhuma cidade encontrada no banco de dados.</p>
                )}
                <div className="grid gap-4">
                    {cities.map((city) => (
                        <div key={city.id} className="flex items-center justify-between bg-card border rounded-lg p-4">
                            <div>
                                <h3 className="font-medium">{city.name}</h3>
                                <p className="text-sm text-muted-foreground">/{city.slug}</p>
                                <p className="text-xs text-muted-foreground truncate max-w-[300px]">{city.whatsappLink}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => handleEdit(city)}
                                >
                                    Editar
                                </Button>
                                <Button
                                    variant="destructive"
                                    size="icon"
                                    onClick={() => removeCity(city.id)}
                                >
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
