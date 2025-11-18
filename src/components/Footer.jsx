export default function Footer() {
  return (
    <footer className="pt-16 pb-10 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Hunger Foods. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-white/70 hover:text-white">Privacy</a>
            <a href="#" className="text-white/70 hover:text-white">Terms</a>
            <a href="#" className="text-white/70 hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
