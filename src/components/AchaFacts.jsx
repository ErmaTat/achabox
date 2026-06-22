import { useState, useEffect, useCallback } from 'react'
import {
  XMarkIcon,
  SparklesIcon,
  BoltIcon,
  HeartIcon,
  GlobeAltIcon,
  ClockIcon,
  ShieldCheckIcon,
  MapPinIcon,
  TrophyIcon,
  SunIcon,
  FireIcon,
} from '@heroicons/react/24/outline'

const FACTS = [
  { Icon: SunIcon,         text: 'Fonio is the oldest cultivated grain in West Africa — farmed for over 5,000 years.' },
  { Icon: ClockIcon,       text: 'Acha cooks in under 5 minutes — faster than any other whole grain on the planet.' },
  { Icon: BoltIcon,        text: 'Fonio contains all 8 essential amino acids, making it a complete plant protein.' },
  { Icon: GlobeAltIcon,    text: 'Acha grows without fertiliser or irrigation, thriving in the poorest, driest soils.' },
  { Icon: HeartIcon,       text: 'Called "the grain of life" by the Dogon people of Mali for its restorative properties.' },
  { Icon: ShieldCheckIcon, text: 'Fonio is naturally 100% gluten-free — safe for coeliac and gluten-sensitive diets.' },
  { Icon: MapPinIcon,      text: 'Grown across 18 West African countries from Senegal to Nigeria and beyond.' },
  { Icon: FireIcon,        text: 'Acha has a low glycaemic index — keeps you full and energised for longer.' },
  { Icon: TrophyIcon,      text: 'Named a "crop of the future" by the Food and Agriculture Organisation (FAO).' },
  { Icon: SparklesIcon,    text: 'Fonio has a naturally nutty, delicate flavour that pairs with both savoury and sweet dishes.' },
]

const MIN_DELAY  = 22000  // earliest next popup
const MAX_DELAY  = 38000  // latest next popup
const VISIBLE_MS = 10000  // stays visible for 10 s

function randomBetween(a, b) {
  return Math.floor(Math.random() * (b - a)) + a
}

export default function AchaFacts() {
  const [fact, setFact]        = useState(null)
  const [exiting, setExiting]  = useState(false)
  const [, setUsed]            = useState([])

  const dismiss = useCallback(() => {
    setExiting(true)
    setTimeout(() => { setFact(null); setExiting(false) }, 380)
  }, [])

  useEffect(() => {
    let showTimer, hideTimer

    function scheduleNext(delay) {
      showTimer = setTimeout(() => {
        setUsed(prev => {
          let pool = FACTS.map((_, i) => i).filter(i => !prev.includes(i))
          if (pool.length === 0) pool = FACTS.map((_, i) => i)
          const idx = pool[Math.floor(Math.random() * pool.length)]
          const next = prev.length >= FACTS.length - 1 ? [idx] : [...prev, idx]
          setFact(FACTS[idx])
          setExiting(false)
          hideTimer = setTimeout(() => dismiss(), VISIBLE_MS)
          scheduleNext(randomBetween(MIN_DELAY, MAX_DELAY))
          return next
        })
      }, delay)
    }

    scheduleNext(randomBetween(MIN_DELAY, MAX_DELAY))
    return () => { clearTimeout(showTimer); clearTimeout(hideTimer) }
  }, [dismiss])

  if (!fact) return null

  const { Icon } = fact

  return (
    <div
      className={`fixed bottom-6 right-6 z-[150] w-[360px] max-w-[calc(100vw-2rem)] ${
        exiting ? 'fact-exit' : 'fact-enter'
      }`}
    >
      <div className="bg-white border border-[#F0EBE3] shadow-2xl rounded-2xl overflow-hidden">

        {/* Orange top bar */}
        <div className="h-1 bg-[#F97316]" />

        <div className="p-5 flex items-start gap-4">
          {/* Icon bubble */}
          <span className="shrink-0 w-12 h-12 rounded-xl bg-[#FFF0E8] flex items-center justify-center text-[#F97316]">
            <Icon className="w-6 h-6" />
          </span>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 mb-2">
              <SparklesIcon className="w-3.5 h-3.5 text-[#F97316] shrink-0" />
              <p className="text-[#F97316] text-[10px] font-bold tracking-[0.16em] uppercase">Acha Fact</p>
            </div>
            <p className="text-[#3D2418] text-[0.95rem] leading-relaxed">{fact.text}</p>
          </div>

          {/* Dismiss */}
          <button
            onClick={dismiss}
            className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-[#7A736C] hover:text-[#3D2418] hover:bg-[#F5F0EB] transition-colors duration-150"
            aria-label="Dismiss"
          >
            <XMarkIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Drain progress bar */}
        <div className="h-0.5 bg-[#F0EBE3]">
          <div
            className="h-full bg-[#F97316]/50 rounded-full"
            style={{ animation: `drain ${VISIBLE_MS}ms linear forwards` }}
          />
        </div>
      </div>

      <style>{`
        @keyframes drain {
          from { width: 100%; }
          to   { width: 0%; }
        }
      `}</style>
    </div>
  )
}
