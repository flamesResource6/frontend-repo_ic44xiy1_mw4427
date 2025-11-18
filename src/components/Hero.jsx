import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent" />
        <div className="absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Real food, real simple.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-6 text-lg leading-8 text-white/80">
              Healthy, ready-to-eat meals made with natural ingredients. No fuss, just great taste you can trust.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-8 flex items-center gap-3">
              <a href="#shop" className="inline-flex items-center rounded-xl bg-gradient-to-r from-emerald-500 to-lime-400 px-6 py-3 text-base font-semibold text-emerald-950 shadow-lg shadow-emerald-500/20 hover:opacity-90 transition">
                Shop meals
              </a>
              <a href="#benefits" className="inline-flex items-center rounded-xl border border-white/10 px-6 py-3 text-base font-semibold text-white/90 hover:bg-white/5 transition">
                Why Hunger Foods?
              </a>
            </motion.div>

            <div className="mt-8 flex items-center gap-6 text-white/70">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">•</span>
                <span>Fresh ingredients</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">•</span>
                <span>Balanced macros</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">•</span>
                <span>Nationwide delivery</span>
              </div>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
            <div className="relative z-10 rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur">
              <img src="/hero-meal.jpg" alt="Hunger Foods meals" className="h-auto w-full rounded-2xl object-cover" />
            </div>
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-3xl bg-gradient-to-tr from-emerald-500/30 to-lime-400/30 blur-2xl" />
            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-emerald-500/20 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
