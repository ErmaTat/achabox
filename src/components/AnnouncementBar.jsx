import { useState, useEffect, useRef } from 'react'

const SLIDES = [
  {
    text: 'Free delivery on orders over $50 — Shop premium Acha fonio today!',
    cta: 'Shop Now',
    href: '#shop',
  },
  {
    text: 'Save 20% on your first order — Limited time welcome offer.',
    cta: 'Claim Offer',
    href: '#shop',
  },
  {
    text: 'Naturally gluten-free & rich in amino acids — Ancient grain, modern life.',
    cta: 'Learn More',
    href: '#benefits',
  },
  {
    text: 'Order before 12pm for same-day dispatch — Fast, reliable delivery.',
    cta: 'Shop Now',
    href: '#shop',
  },
]

const INTERVAL_MS = 4000

function ChevronLeft() {
  return (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
  )
}
function ChevronRight() {
  return (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  )
}

export default function AnnouncementBar() {
  const [index, setIndex]       = useState(0)
  const [animKey, setAnimKey]   = useState(0)
  const [dir, setDir]           = useState('next') // 'next' | 'prev'
  const timerRef                = useRef(null)

  const go = (direction) => {
    setDir(direction)
    setAnimKey(k => k + 1)
    setIndex(i =>
      direction === 'next'
        ? (i + 1) % SLIDES.length
        : (i - 1 + SLIDES.length) % SLIDES.length
    )
  }

  const resetTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => go('next'), INTERVAL_MS)
  }

  useEffect(() => {
    timerRef.current = setInterval(() => go('next'), INTERVAL_MS)
    return () => clearInterval(timerRef.current)
  }, [])

  const handleManual = (direction) => {
    go(direction)
    resetTimer()
  }

  const { text, cta, href } = SLIDES[index]

  const animClass = dir === 'next' ? 'anim-slide-next' : 'anim-slide-prev'

  return (
    <>
      <style>{`
        @keyframes slideInNext {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0);   }
        }
        @keyframes slideInPrev {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .anim-slide-next { animation: slideInNext 0.35s ease forwards; }
        .anim-slide-prev { animation: slideInPrev 0.35s ease forwards; }
      `}</style>

      <div className="fixed top-0 inset-x-0 z-[60] h-10 bg-[#F97316] flex items-center overflow-hidden select-none">

        {/* Prev arrow */}
        <button
          onClick={() => handleManual('prev')}
          className="absolute left-2 sm:left-4 flex items-center justify-center w-6 h-6 rounded-full text-white/70 hover:text-white hover:bg-white/15 transition-colors duration-150 shrink-0"
          aria-label="Previous announcement"
        >
          <ChevronLeft />
        </button>

        {/* Slide content */}
        <div className="flex-1 flex items-center justify-center px-10 overflow-hidden">
          <p
            key={animKey}
            className={`${animClass} text-white text-xs sm:text-sm font-medium tracking-wide flex items-center gap-2 whitespace-nowrap`}
          >
            <span>{text}</span>
            <a
              href={href}
              className="inline-flex items-center gap-0.5 font-semibold underline underline-offset-2 decoration-white/60 hover:decoration-white transition-colors duration-150 shrink-0"
            >
              {cta}
              <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </p>
        </div>

        {/* Progress dots + next arrow */}
        <div className="absolute right-2 sm:right-4 flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1" aria-hidden="true">
            {SLIDES.map((_, i) => (
              <span
                key={i}
                className="rounded-full transition-all duration-300"
                style={{
                  width:      i === index ? '14px' : '5px',
                  height:     '5px',
                  background: i === index ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.35)',
                }}
              />
            ))}
          </div>
          <button
            onClick={() => handleManual('next')}
            className="flex items-center justify-center w-6 h-6 rounded-full text-white/70 hover:text-white hover:bg-white/15 transition-colors duration-150 shrink-0"
            aria-label="Next announcement"
          >
            <ChevronRight />
          </button>
        </div>

      </div>
    </>
  )
}
