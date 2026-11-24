import { useEffect, useState } from 'react'
import BrandLogo from './BrandLogo'

const LINKS = {
  'Quick Links': [
    { label: 'Home',       href: '/'            },
    { label: 'Our Story',  href: '/our-story'   },
    { label: 'Benefits',   href: '/#benefits'   },
    { label: 'Shop',       href: '/#shop'       },
    { label: 'Recipes',    href: '/#recipes'    },
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
    href: 'https://www.instagram.com/The_achabox/',
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
    href: 'https://www.facebook.com/The_achabox',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@The_achabox',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
      </svg>
    ),
  },
]

const FOOTER_INFO = {
  FAQ: {
    title: 'Frequently asked questions',
    items: [
      {
        question: 'What is Acha?',
        answer: 'Acha, also known as fonio, is a naturally gluten-free ancient grain from West Africa.',
      },
      {
        question: 'How do I prepare it?',
        answer: 'Acha cooks in about five minutes. Follow the preparation instructions on your product packaging.',
      },
      {
        question: 'Can I place an order here?',
        answer: 'The current site is a product showcase and does not process orders or payments. Contact us with product or availability questions.',
      },
    ],
  },
  'Shipping Policy': {
    title: 'Shipping policy',
    items: [
      {
        question: 'Delivery information',
        answer: 'Delivery areas, fees, and estimated timeframes have not yet been confirmed for this storefront. We will publish shipping terms before online ordering is enabled.',
      },
      {
        question: 'Questions',
        answer: 'For current availability or delivery enquiries, please use the Contact Us page.',
      },
    ],
  },
  Returns: {
    title: 'Returns',
    items: [
      {
        question: 'Current returns information',
        answer: 'Online orders are not currently processed through this site, so a return or refund flow is not available here.',
      },
      {
        question: 'Need help?',
        answer: 'Contact us about an existing purchase. Return eligibility and timeframes will be published before online ordering is enabled.',
      },
    ],
  },
  'Privacy Policy': {
    title: 'Privacy policy',
    items: [
      {
        question: 'Information submitted on this site',
        answer: 'The contact form opens an email draft to hello@acahabox.com; it is sent only if you choose to send it. This site does not store the form values. The newsletter form is not connected yet.',
      },
      {
        question: 'Future updates',
        answer: 'If the site begins collecting personal information, this notice will be updated to explain what is collected and how it is used.',
      },
    ],
  },
  'Terms of Service': {
    title: 'Terms of service',
    items: [
      {
        question: 'Using this site',
        answer: 'This site currently provides brand and product information. It does not process purchases or payments, and product details may change.',
      },
      {
        question: 'Online orders',
        answer: 'Terms for orders, payment, and fulfilment will be provided before online purchasing is enabled.',
      },
    ],
  },
  'Cookie Policy': {
    title: 'Cookie policy',
    items: [
      {
        question: 'Cookies on this site',
        answer: 'The current app does not use advertising or analytics cookies. Hosting services may process technical data needed to deliver and secure the site.',
      },
      {
        question: 'Third-party services',
        answer: 'External websites linked from AchaBox may use their own cookies and privacy practices.',
      },
    ],
  },
}

export default function Footer() {
  const [activeInfo, setActiveInfo] = useState(null)
  const withBase = (href) => href.startsWith('/')
    ? `${import.meta.env.BASE_URL}${href.slice(1)}`
    : href

  useEffect(() => {
    if (!activeInfo) return undefined

    function handleKeyDown(event) {
      if (event.key === 'Escape') setActiveInfo(null)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeInfo])

  return (
    <>
      <footer id="contact" className="bg-[#2A1610] text-white">

      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <a href={import.meta.env.BASE_URL} className="w-fit text-white">
              <BrandLogo variant="white" className="h-16" />
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
                  aria-label={`${label}: The_achabox`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/8 hover:bg-[#F97316] flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
              <span className="text-sm text-white/60">The_achabox</span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, items]) => (
            <div key={heading} className="flex flex-col gap-4">
              <p className="text-white text-xs font-bold tracking-[0.14em] uppercase">{heading}</p>
              <ul className="flex flex-col gap-2.5">
                {items.map(({ label, href }) => (
                  <li key={label}>
                    {FOOTER_INFO[label] ? (
                      <button
                        type="button"
                        onClick={() => setActiveInfo(label)}
                        className="text-left text-white/55 hover:text-white text-sm transition-colors duration-200"
                      >
                        {label}
                      </button>
                    ) : (
                      <a
                        href={withBase(href)}
                        className="text-white/55 hover:text-white text-sm transition-colors duration-200"
                      >
                        {label}
                      </a>
                    )}
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

      {activeInfo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1A0E09]/65 p-4"
          onClick={(event) => {
            if (event.target === event.currentTarget) setActiveInfo(null)
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="footer-info-title"
            className="w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white p-6 text-[#3D2418] shadow-2xl sm:p-8"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-[#F97316] text-xs font-bold tracking-[0.18em] uppercase mb-2">
                  AchaBox information
                </p>
                <h2 id="footer-info-title" className="text-2xl font-bold">
                  {FOOTER_INFO[activeInfo].title}
                </h2>
              </div>
              <button
                type="button"
                autoFocus
                onClick={() => setActiveInfo(null)}
                aria-label="Close information"
                className="shrink-0 rounded-lg p-2 text-[#7A736C] transition hover:bg-[#F3E6CF] hover:text-[#3D2418]"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-6 space-y-5">
              {FOOTER_INFO[activeInfo].items.map(({ question, answer }) => (
                <div key={question}>
                  <h3 className="font-semibold">{question}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#6B625B]">{answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
    </>
  )
}
