const products = [
  {
    id: 1,
    name: 'Chicken Teriyaki Bowl',
    desc: 'Chargrilled chicken, sticky teriyaki glaze, steamed rice, greens.',
    price: 6.95,
    img: '/meal-1.jpg',
    tags: ['High Protein', 'Under 500kcal']
  },
  {
    id: 2,
    name: 'Hearty Beef Ragu',
    desc: 'Slow-cooked beef, rich tomato sauce, al dente pasta.',
    price: 7.25,
    img: '/meal-2.jpg',
    tags: ['Comfort', 'Chef Special']
  },
  {
    id: 3,
    name: 'Vibrant Buddha Bowl',
    desc: 'Roasted veg, quinoa, tahini drizzle—plant-based goodness.',
    price: 6.50,
    img: '/meal-3.jpg',
    tags: ['Vegan', 'Gluten Free']
  },
  {
    id: 4,
    name: 'Peri-Peri Chicken',
    desc: 'Spiced chicken with seasonal greens and herbed potatoes.',
    price: 7.10,
    img: '/meal-4.jpg',
    tags: ['Spicy', 'Popular']
  }
]

export default function ProductGrid() {
  return (
    <section id="products" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Best sellers</h2>
            <p className="mt-2 text-white/70">A taste of our most-loved meals.</p>
          </div>
          <a href="#shop" className="hidden sm:inline-flex rounded-xl bg-gradient-to-r from-emerald-500 to-lime-400 px-4 py-2 text-sm font-semibold text-emerald-950">
            View full menu
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <div key={p.id} className="group rounded-2xl border border-white/10 bg-white/5 p-3">
              <div className="overflow-hidden rounded-xl">
                <img src={p.img} alt={p.name} className="h-44 w-full object-cover transition duration-300 group-hover:scale-105" />
              </div>
              <div className="p-3">
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="inline-flex rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-inset ring-emerald-500/20">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="mt-3 text-white font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-white/70">{p.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-emerald-300 font-semibold">£{p.price.toFixed(2)}</span>
                  <button className="rounded-lg border border-white/10 px-3 py-1.5 text-sm text-white/90 hover:bg-white/5">Add</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
