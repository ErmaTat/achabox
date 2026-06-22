import BrandLogo from './BrandLogo'

const LINKS = {
  'Quick Links': [
    { label: 'Home',       href: '/'            },
    { label: 'Our Story',  href: '/our-story'   },
    { label: 'Benefits',   href: '/#benefits'   },
    { label: 'Shop',       href: '/#shop'       },
  ],
  'Help': [
    { label: 'FAQ',              href: '#faq'           },
    { label: 'Shipping Policy',  href: '#shipping'      },
    { label: 'Returns',          href: '#returns'       },
    { label: 'Contact Us',       href: '/contact'       },
  ],
  'Legal': [
    { label: 'Privacy Policy',   href: '#privacy'  },
    { label: 'Terms of Service', href: '#terms'    },
    { label: 'Cookie Policy',    href: '#cookies'  },
  ],
}

const SOCIALS = [
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" strokeWidth="0" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
      </svg>
    ),
  },
]

export default function Footer() {
  const withBase = (href) => href.startsWith('/')
    ? `${import.meta.env.BASE_URL}${href.slice(1)}`
    : href

  return (
    <footer id="contact" className="bg-[#2A1610] text-white">

      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <a href={import.meta.env.BASE_URL} className="w-fit text-white">
              <BrandLogo className="text-2xl" />
            </a>
            <p className="text-white/55 text-sm leading-relaxed max-w-xs">
              Premium West African fonio — sustainably sourced, stone-milled, and
              delivered to your door. Ancient grain. Modern table.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3 mt-1">
              {SOCIALS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/8 hover:bg-[#F97316] flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, items]) => (
            <div key={heading} className="flex flex-col gap-4">
              <p className="text-white text-xs font-bold tracking-[0.14em] uppercase">{heading}</p>
              <ul className="flex flex-col gap-2.5">
                {items.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={withBase(href)}
                      className="text-white/55 hover:text-white text-sm transition-colors duration-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Newsletter strip */}
        <div className="mt-14 pt-10 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-10 justify-between">
            <div>
              <p className="text-white font-semibold text-base">Stay in the loop</p>
              <p className="text-white/50 text-sm mt-0.5">Recipes, restocks, and stories from the Sahel.</p>
            </div>
            <form
              onSubmit={e => e.preventDefault()}
              className="flex w-full sm:w-auto gap-2"
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 sm:w-64 bg-white/8 border border-white/12 text-white placeholder:text-white/35 text-sm px-4 py-2.5 rounded-lg outline-none focus:border-[#F97316] transition-colors duration-200"
              />
              <button
                type="submit"
                className="bg-[#F97316] hover:bg-[#EA580C] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/35 text-xs">
            © {new Date().getFullYear()} AchaBox. All rights reserved.
          </p>
          <p className="text-white/25 text-xs">
            Crafted with care · Sourced with purpose
          </p>
        </div>
      </div>

    </footer>
  )
}
