const reviews = [
  {
    name: 'Danielle',
    text: 'Absolutely love the flavours and how quick they are to prepare. Perfect for busy weeks!',
  },
  {
    name: 'Marcus',
    text: 'Great macros, great value. Helps me stay on track without thinking about it.',
  },
  {
    name: 'Priya',
    text: 'Fresh, tasty and genuinely convenient. Delivery was spot on too.',
  },
]

export default function Reviews() {
  return (
    <section id="reviews" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">What people say</h2>
          <p className="mt-2 text-white/70">Real feedback from customers enjoying convenient, nutritious meals.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-white/90">“{r.text}”</p>
              <div className="mt-4 text-sm text-white/60">— {r.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
