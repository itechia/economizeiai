export function StoresSection() {
  return (
    <section className="py-12 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4">
        <p className="text-center text-muted-foreground mb-8 font-medium">Ofertas das maiores lojas do Brasil</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center">
              <span className="text-yellow-900 font-bold text-2xl">ML</span>
            </div>
            <span className="text-sm font-medium text-muted-foreground">Mercado Livre</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">A</span>
            </div>
            <span className="text-sm font-medium text-muted-foreground">Amazon</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">S</span>
            </div>
            <span className="text-sm font-medium text-muted-foreground">Shopee</span>
          </div>
        </div>
      </div>
    </section>
  )
}
