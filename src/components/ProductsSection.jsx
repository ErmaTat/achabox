import { useState } from 'react'
import { ShoppingBagIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import { useInView } from '../hooks/useInView'
import GallerySection from './GallerySection'
import RecipeSection from './RecipeSection'
import UpcomingProductsSection from './UpcomingProductsSection'
import pouch250gImage from '../assets/products/fonio-pouch-250g.png?format=webp&quality=85'
import pouch500gImage from '../assets/products/fonio-pouch-500g.png?format=webp&quality=85'
import pouch1kgImage from '../assets/products/fonio-pouch-1kg.png?format=webp&quality=85'

const PERKS = [
  'Naturally Gluten Free',
  'Cooks in 5 Minutes',
  'Non-GMO Verified',
]

const SIZES = [
  { label: '250 g', price: '₦1,200', image: pouch250gImage },
  { label: '500 g', price: '₦2,500', image: pouch500gImage },
  { label: '1 kg',  price: '₦5,000', image: pouch1kgImage },
]

function Reveal({ children, className = '', delay = '0s', direction = 'up' }) {
  const ref = useInView()
  const cls = direction === 'left' ? 'reveal-left' : 'reveal'
  return (
    <div ref={ref} className={`${cls} ${className}`} style={{ transitionDelay: delay }}>
      {children}
    </div>
  )
}

export default function ProductsSection() {
  const [selectedSize, setSelectedSize] = useState(0)
  const [added, setAdded] = useState(false)

  function handleAdd() {
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <>
      <section id="shop" className="bg-white border-t border-[#F0EBE3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">

        {/* Section label */}
        <Reveal className="text-center mb-14">
          <p className="text-[#F97316] text-xs font-bold tracking-[0.18em] uppercase mb-3">Shop</p>
          <h2 className="text-[#3D2418] font-bold text-3xl sm:text-4xl lg:text-[2.7rem] leading-[1.1] tracking-tight">
            One grain. Endless meals.
          </h2>
        </Reveal>

        {/* Product card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">

          {/* Image */}
          <Reveal direction="left" delay="0.05s">
            <div
              className="relative w-full aspect-square rounded-2xl overflow-hidden"
              style={{ background: 'linear-gradient(145deg, #FFF8F1 0%, #F3E6CF 60%, #EDD9B0 100%)' }}
            >
              <img
                src={SIZES[selectedSize].image}
                alt={`AchaBox premium African fonio pouch, ${SIZES[selectedSize].label}`}
                className="h-full w-full object-contain"
              />
            </div>
          </Reveal>

          {/* Details */}
          <div className="flex flex-col gap-7">

            <Reveal delay="0.05s">
              <div>
                <h3 className="text-[#3D2418] font-bold text-2xl sm:text-3xl leading-tight tracking-tight">
                  Acha Fonio
                </h3>
                <p className="text-[#7A736C] text-sm mt-1">100% Natural · West African Origin · Stone-Milled</p>
              </div>
            </Reveal>

            <Reveal delay="0.12s">
              <p className="text-[#6B625B] text-base leading-relaxed">
                Pure whole-grain fonio — washed, sun-dried, and stone-milled to preserve
                every nutrient. Delicately nutty, incredibly versatile, and on your table
                in under five minutes.
              </p>
            </Reveal>

            {/* Size picker */}
            <Reveal delay="0.18s">
              <div>
                <p className="text-[#3D2418] text-xs font-semibold tracking-[0.12em] uppercase mb-3">Select size</p>
                <div className="flex gap-3">
                  {SIZES.map(({ label, price }, i) => (
                    <button
                      key={label}
                      onClick={() => setSelectedSize(i)}
                      className={`flex-1 flex flex-col items-center gap-0.5 py-3 rounded-lg border-2 text-sm font-semibold transition-all duration-200 ${
                        selectedSize === i
                          ? 'border-[#F97316] bg-[#FFF8F1] text-[#F97316]'
                          : 'border-[#E8E0D5] text-[#4A2A1A] hover:border-[#F97316]/50'
                      }`}
                    >
                      <span>{label}</span>
                      <span className={`text-xs font-medium ${selectedSize === i ? 'text-[#F97316]' : 'text-[#7A736C]'}`}>{price}</span>
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Price */}
            <Reveal delay="0.22s">
              <div className="flex items-end gap-3">
                <span className="text-[#3D2418] font-bold text-3xl tracking-tight">
                  {SIZES[selectedSize].price}
                </span>
                <span className="text-[#7A736C] text-sm mb-1">All prices in Nigerian naira</span>
              </div>
            </Reveal>

            {/* Perks */}
            <Reveal delay="0.27s">
              <div className="flex flex-col gap-2">
                {PERKS.map(p => (
                  <div key={p} className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#8AA66A] shrink-0" />
                    <span className="text-[#6B625B] text-sm">{p}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* CTA */}
            <Reveal delay="0.32s">
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <button
                  onClick={handleAdd}
                  className={`flex-1 inline-flex items-center justify-center gap-2.5 font-semibold px-8 py-3.5 rounded-lg transition-all duration-200 text-base hover:-translate-y-0.5 active:translate-y-0 ${
                    added
                      ? 'bg-[#8AA66A] text-white'
                      : 'bg-[#F97316] hover:bg-[#EA580C] text-white'
                  }`}
                >
                  <ShoppingBagIcon className="w-5 h-5" />
                  {added ? 'Added to bag!' : 'Add to Bag'}
                </button>
                <a
                  href="#shop"
                  className="flex-1 inline-flex items-center justify-center border-2 border-[#4A2A1A]/20 hover:border-[#4A2A1A] text-[#4A2A1A] hover:bg-[#4A2A1A] hover:text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-200 text-base hover:-translate-y-0.5 active:translate-y-0"
                >
                  Buy Now
                </a>
              </div>
            </Reveal>

          </div>
        </div>

        </div>
      </section>

      <UpcomingProductsSection />
      <GallerySection />
      <RecipeSection />

      {/* ── Provenance quote ───────────────────────────────── */}
      <section className="bg-[#FFF8F1] border-t border-[#EDD9B0]/60 py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-[#C9965A] text-xs font-bold tracking-[0.20em] uppercase mb-7">
              A note on provenance
            </p>
          </Reveal>
          <Reveal delay="0.1s">
            <blockquote className="text-[#3D2418] font-bold text-2xl sm:text-3xl lg:text-[2.6rem] leading-[1.18] tracking-tight">
              "Grown quietly for 5,000 years.<br className="hidden sm:block" />
              <span className="text-[#F97316]"> Ready for what's next.</span>"
            </blockquote>
          </Reveal>
          <Reveal delay="0.2s">
            <p className="text-[#6B625B] text-base mt-8 max-w-xl mx-auto leading-relaxed">
              Fonio is the fastest-growing ancient grain in modern nutrition — honoured by
              chefs, dietitians, and sustainability advocates worldwide, while still
              rooted in the tradition that made it legendary.
            </p>
          </Reveal>
          <Reveal delay="0.28s">
            <div className="flex items-center justify-center gap-3 mt-10">
              <div className="h-px w-16 bg-[#F97316]/40 rounded-full" />
              <span className="text-[#C9965A] text-xs font-semibold tracking-widest uppercase">Est. 3000 BC · West Africa</span>
              <div className="h-px w-16 bg-[#F97316]/40 rounded-full" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
