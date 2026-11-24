import { useState } from 'react'
import BrandLogo from './BrandLogo'

const NAV_LINKS = [
  { label: 'Shop', href: '#shop' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Recipes', href: '/dashboard/recipes' },
  { label: 'About', href: '#about' },
]

function CartIcon() {
  return (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
    </svg>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-9 inset-x-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#F3E6CF] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Wordmark */}
          <a href="/" className="select-none text-[#4A2A1A]">
            <BrandLogo className="h-12" />
          </a>

          {/* Center nav — desktop */}
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-[#7A736C] hover:text-[#4A2A1A] text-sm font-medium transition-colors duration-150"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right actions — desktop */}
          <div className="hidden md:flex items-center gap-3">
            <button
              className="p-2 text-[#7A736C] hover:text-[#4A2A1A] transition-colors duration-150 rounded-full hover:bg-[#F3E6CF]/60"
              aria-label="View cart"
            >
              <CartIcon />
            </button>
            <a
              href="#shop"
              className="bg-[#F97316] hover:bg-[#EA580C] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-150 shadow-sm"
            >
              Buy Now
            </a>
          </div>

          {/* Hamburger — mobile */}
          <button
            className="md:hidden p-2 text-[#4A2A1A] rounded-md"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#F3E6CF] px-6 py-5 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-[#4A2A1A] font-medium py-2.5 text-base border-b border-[#F3E6CF]/60 last:border-0"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-4">
            <button className="p-2 text-[#7A736C]" aria-label="View cart">
              <CartIcon />
            </button>
            <a
              href="#shop"
              className="flex-1 bg-[#F97316] hover:bg-[#EA580C] text-white text-sm font-semibold px-5 py-3 rounded-full text-center transition-colors duration-150"
              onClick={() => setMenuOpen(false)}
            >
              Buy Now
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
