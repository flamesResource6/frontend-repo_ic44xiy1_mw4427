import { Leaf, Clock, ShieldCheck, Truck } from 'lucide-react'

const items = [
  {
    icon: Leaf,
    title: 'Wholesome ingredients',
    desc: 'We keep it clean. No artificial nonsense—just real food that fuels your day.'
  },
  {
    icon: Clock,
    title: 'Ready in minutes',
    desc: 'Heat, eat, done. Save time without sacrificing nutrition or flavor.'
  },
  {
    icon: ShieldCheck,
    title: 'Balanced nutrition',
    desc: 'Designed with macros in mind so you can stay on track effortlessly.'
  },
  {
    icon: Truck,
    title: 'Nationwide delivery',
    desc: 'Freshly prepared and delivered chilled to your door, anywhere in the UK.'
  }
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Why Hunger Foods</h2>
          <p className="mt-4 text-white/70">Convenient, nutritious meals prepared by chefs and guided by nutritionists.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-500 to-lime-400 text-emerald-950">
                <Icon size={20} />
              </div>
              <h3 className="text-white font-semibold">{title}</h3>
              <p className="mt-2 text-white/70 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
