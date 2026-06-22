import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Home',      href: '/'          },
  { label: 'Our Story', href: '#our-story'  },
  { label: 'Benefits',  href: '#benefits'   },
  { label: 'Contact',   href: '#contact'    },
]

function HamburgerIcon() {
  return (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  )
}
function CloseIcon() {
  return (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

export default function NavMenu() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="fixed top-[122px] inset-x-0 z-40 bg-white border-b border-[#F0EBE3] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Desktop */}
        <div className="hidden md:flex items-center h-12 gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="px-4 h-12 flex items-center text-sm font-medium text-[#7A736C] hover:text-[#4A2A1A] border-b-2 border-transparent hover:border-[#F97316] transition-all duration-150"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center justify-between h-12">
          <span className="text-sm font-semibold text-[#4A2A1A]">Menu</span>
          <button
            className="p-1 text-[#4A2A1A]"
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
        <div className="md:hidden bg-white border-t border-[#F0EBE3] px-6 py-4 flex flex-col">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="py-2.5 text-[#4A2A1A] font-medium border-b border-[#F0EBE3] last:border-0 text-sm"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
