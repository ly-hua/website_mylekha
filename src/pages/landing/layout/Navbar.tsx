import { useState } from 'react'

type NavbarProps = {
  logoSrc?: string
}

export default function Navbar({ logoSrc = '/image_571920.png' }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed z-50 w-full glass-nav transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-3 text-2xl font-bold tracking-tighter">
          <img
            src={logoSrc}
            alt="MyLekha Logo"
            className="h-10 w-10 rounded-lg bg-white object-contain shadow-lg shadow-teal-500/20"
            onError={(e) => {
              ;(e.currentTarget as HTMLImageElement).src = '/vite.svg'
            }}
          />
          MyLekha
        </a>

        <div className="hidden items-center space-x-8 text-sm font-semibold uppercase tracking-wide md:flex">
          <a href="#home" className="transition-colors hover:text-teal-400">
            Home
          </a>
          <a href="#features" className="transition-colors hover:text-teal-400">
            Feature
          </a>
          <a href="#how-it-works" className="transition-colors hover:text-teal-400">
            How it work
          </a>
          <a href="#blog" className="transition-colors hover:text-teal-400">
            Blog
          </a>
          <a href="#resources" className="transition-colors hover:text-teal-400">
            Resources
          </a>
          <a href="#products-services" className="transition-colors hover:text-teal-400">
            Products & Services
          </a>
          <a href="#about" className="transition-colors hover:text-teal-400">
            About Us
          </a>
          <a
            href="#download"
            className="rounded-full bg-teal-600 px-5 py-2 text-white transition-colors hover:bg-teal-700"
          >
            Download
          </a>
        </div>

        <button
          className="text-white focus:outline-none md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileOpen}
        >
          <i className="fas fa-bars text-2xl" />
        </button>
      </div>

      <div
        className={`absolute w-full border-t border-slate-800 bg-slate-900 p-4 md:hidden ${
          mobileOpen ? '' : 'hidden'
        }`}
      >
        <a href="#home" className="block py-2 hover:text-teal-400" onClick={() => setMobileOpen(false)}>
          Home
        </a>
        <a
          href="#features"
          className="block py-2 hover:text-teal-400"
          onClick={() => setMobileOpen(false)}
        >
          Feature
        </a>
        <a
          href="#how-it-works"
          className="block py-2 hover:text-teal-400"
          onClick={() => setMobileOpen(false)}
        >
          How it work
        </a>
        <a href="#blog" className="block py-2 hover:text-teal-400" onClick={() => setMobileOpen(false)}>
          Blog
        </a>
        <a
          href="#resources"
          className="block py-2 hover:text-teal-400"
          onClick={() => setMobileOpen(false)}
        >
          Resources
        </a>
        <a
          href="#products-services"
          className="block py-2 hover:text-teal-400"
          onClick={() => setMobileOpen(false)}
        >
          Products & Services
        </a>
        <a href="#about" className="block py-2 hover:text-teal-400" onClick={() => setMobileOpen(false)}>
          About Us
        </a>
        <a
          href="#download"
          className="mt-2 block rounded-lg bg-teal-600 px-4 py-3 text-center font-bold text-white hover:bg-teal-700"
          onClick={() => setMobileOpen(false)}
        >
          Download
        </a>
      </div>
    </nav>
  )
}
