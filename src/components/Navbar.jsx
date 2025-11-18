import { useState } from 'react'
import { Menu, X, ShoppingBag } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Products', href: '#products' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#top" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-lime-400 to-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <ShoppingBag className="text-white" size={20} />
              </div>
              <span className="text-white font-semibold tracking-tight text-lg">Hunger Foods</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#shop" className="inline-flex items-center rounded-xl bg-gradient-to-r from-emerald-500 to-lime-400 px-4 py-2 text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-500/20 hover:opacity-90 transition">
                Shop now
              </a>
            </nav>

            <button onClick={() => setOpen(true)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white">
              <Menu size={20} />
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4">
              <div className="flex items-center justify-between pb-4">
                <span className="text-white font-medium">Menu</span>
                <button onClick={() => setOpen(false)} className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/80">
                  <X size={18} />
                </button>
              </div>
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-white/90 hover:bg-white/5">
                    {item.label}
                  </a>
                ))}
                <a href="#shop" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-lime-400 px-4 py-2 text-sm font-semibold text-emerald-950">
                  Shop now
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
