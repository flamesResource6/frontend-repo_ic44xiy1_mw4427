import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import ProductGrid from './components/ProductGrid'
import Reviews from './components/Reviews'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* background accents */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-lime-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(16,185,129,0.08),transparent_30%),radial-gradient(circle_at_90%_20%,rgba(163,230,53,0.06),transparent_30%)]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <ProductGrid />
        <Reviews />
      </main>
      <Footer />
    </div>
  )
}

export default App
