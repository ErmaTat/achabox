import { useState } from 'react'
import heroImg from '../assets/hero.png?format=webp&quality=80&width=1400'
import { CheckCircleIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'

const TRUST_POINTS = ['Gluten Free', 'High in Fiber', 'Quick to Cook']

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  return (
    <section className="relative mt-[104px] bg-white h-[560px] lg:h-[680px] overflow-hidden">

      <img
        src={heroImg}
        alt="Acha fonio — premium West African ancient grain"
        className={`absolute inset-x-0 w-full object-cover ${loaded ? 'anim-slide-in-right' : 'opacity-0'}`}
        style={{ top: '-120px', height: 'calc(100% + 120px)' }}
        onLoad={() => setLoaded(true)}
      />

      {/* Text overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-xl flex flex-col gap-6 lg:gap-7">

            {/* Badge */}
            <span className="anim-fade-up d-0 anim-float inline-flex items-center gap-2 bg-[#F3E6CF] text-[#4A2A1A] text-xs font-semibold tracking-[0.12em] uppercase px-4 py-2 rounded-lg w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8AA66A] shrink-0" />
              100% Natural African Fonio
            </span>

            {/* Headline */}
            <h1 className="anim-fade-up d-100 text-[#4A2A1A] font-bold text-4xl sm:text-5xl lg:text-[3.6rem] leading-[1.08] tracking-tight">
              Fuel Your Day<br />the{' '}
              <span className="text-[#F97316]">Natural</span> Way
            </h1>

            {/* Subtext */}
            <p className="anim-fade-up d-200 text-[#7A736C] text-[1.05rem] leading-relaxed max-w-md">
              Acha is a wholesome, naturally gluten-free ancient grain from West
              Africa — packed with nutrients, delicately nutty in flavour, and
              ready in minutes for any everyday meal.
            </p>

            {/* CTAs */}
            <div className="anim-fade-up d-300 flex flex-col sm:flex-row gap-3">
              <a
                href="#shop"
                className="inline-flex items-center justify-center gap-2.5 bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-200 text-base hover:-translate-y-0.5 active:translate-y-0"
              >
                <ShoppingBagIcon className="w-5 h-5" />
                Shop Acha
              </a>
              <a
                href="#benefits"
                className="inline-flex items-center justify-center border-2 border-[#4A2A1A]/25 hover:border-[#4A2A1A] text-[#4A2A1A] hover:bg-[#4A2A1A] hover:text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-200 text-base hover:-translate-y-0.5 active:translate-y-0"
              >
                Explore Benefits
              </a>
            </div>

            {/* Trust points */}
            <div className="anim-fade-up d-400 flex flex-wrap gap-x-6 gap-y-2 pt-1">
              {TRUST_POINTS.map(label => (
                <div key={label} className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-[#8AA66A]" />
                  <span className="text-sm font-medium text-[#4A2A1A]">{label}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}
