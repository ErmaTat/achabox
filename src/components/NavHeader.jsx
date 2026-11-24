import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import BrandLogo from './BrandLogo'

const NAV_LINKS = [
  { label: 'Home',      href: '/',           isRoute: true  },
  { label: 'Our Story', href: '/our-story',  isRoute: true  },
  { label: 'Gallery',   href: `${import.meta.env.BASE_URL}#gallery`, isRoute: false },
  { label: 'Recipes',   href: `${import.meta.env.BASE_URL}#recipes`, isRoute: false },
  { label: 'Contact',   href: '/contact',    isRoute: true  },
]

function CloseIcon() {
  return (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}
function HamburgerIcon() {
  return (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  )
}

function NavLink({ label, href, isRoute, active, onClick }) {
  const cls = `text-sm font-medium transition-colors duration-200 pb-0.5 ${
    active ? 'text-[#4A2A1A]' : 'text-[#7A736C] hover:text-[#4A2A1A]'
  }`
  if (isRoute) {
    return (
      <Link to={href} className={cls} onClick={onClick}>
        {label}
      </Link>
    )
  }
  return (
    <a href={href} className={cls} onClick={onClick}>
      {label}
    </a>
  )
}

export default function NavHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()
  const homeUrl = import.meta.env.BASE_URL

  return (
    <nav className="anim-slide-down fixed top-10 inset-x-0 z-50 bg-white border-b border-[#F0EBE3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-6">

          {/* Logo */}
          <Link to="/" className="shrink-0 select-none text-[#4A2A1A]">
            <BrandLogo className="h-12" />
          </Link>

          {/* Center links — desktop */}
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0 flex-1 justify-center">
            {NAV_LINKS.map(({ label, href, isRoute }) => {
              const active = isRoute && pathname === href
              return (
                <li key={label} className="relative group">
                  <NavLink label={label} href={href} isRoute={isRoute} active={active} />
                  <span className={`absolute -bottom-0.5 left-0 h-[2px] bg-[#F97316] rounded-full transition-all duration-300 ${
                    active ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </li>
              )
            })}
          </ul>

          {/* Right — desktop */}
          <div className="hidden md:flex items-center gap-1 shrink-0">
            <a
              href={`${homeUrl}#shop`}
              className="bg-[#F97316] hover:bg-[#EA580C] text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              Buy Now
            </a>
          </div>

          {/* Hamburger — mobile */}
          <button
            className="md:hidden p-1 text-[#4A2A1A]"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[#F0EBE3] px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href, isRoute }) => (
            <NavLink
              key={label}
              label={label}
              href={href}
              isRoute={isRoute}
              onClick={() => setMobileOpen(false)}
            />
          ))}
          <div className="flex justify-end pt-3 mt-1">
            <a
              href={`${homeUrl}#shop`}
              className="bg-[#F97316] hover:bg-[#EA580C] text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors duration-200"
              onClick={() => setMobileOpen(false)}
            >
              Buy Now
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
