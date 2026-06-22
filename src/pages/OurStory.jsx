import { useEffect } from 'react'
import { useInView } from '../hooks/useInView'
import StoryFlipBook from '../components/StoryFlipBook'
import fonioWinnowingImage from '../assets/story/fonio-winnowing.webp'
import wholeGrainBowlsImage from '../assets/story/whole-grain-bowls.webp'
import marketGrainsImage from '../assets/story/market-grains.webp'
import milletFieldImage from '../assets/story/millet-field-ghana.webp'
import healthyGrainBowlImage from '../assets/story/healthy-grain-bowl.webp'


/* ─── Scroll to top on mount ──────────────────────────────── */
function ScrollTop() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return null
}

/* ─── Reveal wrappers ─────────────────────────────────────── */
function Reveal({ children, className = '', delay = '0s' }) {
  const ref = useInView()
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: delay }}>
      {children}
    </div>
  )
}
function RevealRight({ children, className = '', delay = '0s' }) {
  const ref = useInView()
  return (
    <div ref={ref} className={`reveal-right ${className}`} style={{ transitionDelay: delay }}>
      {children}
    </div>
  )
}
function RevealScale({ children, className = '', delay = '0s' }) {
  const ref = useInView()
  return (
    <div ref={ref} className={`reveal-scale ${className}`} style={{ transitionDelay: delay }}>
      {children}
    </div>
  )
}

/* ─── Story imagery ───────────────────────────────────────── */
function StoryImageBlock({ src, alt, className = '', label, objectPosition = 'center' }) {
  return (
    <figure className={`relative overflow-hidden bg-[#F3E6CF] ${className}`}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        style={{ objectPosition }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(61,36,24,0.42), rgba(61,36,24,0.04) 52%, rgba(255,255,255,0.08))',
        }}
      />
      {label && (
        <figcaption className="absolute bottom-5 left-5 right-5">
          <div className="h-px w-8 bg-[#F97316] mb-2" />
          <p className="text-white/85 text-[10px] font-semibold tracking-widest uppercase drop-shadow">
            {label}
          </p>
        </figcaption>
      )}
    </figure>
  )
}

/* ─── Stat pill ───────────────────────────────────────────── */
function StatPill({ value, label }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[#F97316] font-bold text-3xl lg:text-4xl tracking-tight">{value}</span>
      <span className="text-[#6B625B] text-xs font-medium tracking-wide uppercase">{label}</span>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════ */
export default function OurStory() {
  return (
    <>
      <ScrollTop />
      <main className="bg-[#FAFAF7]">

        {/* ── 1. HERO ────────────────────────────────────────── */}
        <section className="bg-white pt-[104px]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 lg:gap-20 items-center">

              {/* Left */}
              <div className="flex flex-col gap-7 max-w-2xl">
                <div className="anim-fade-up d-0">
                  <p className="text-[#F97316] text-xs font-bold tracking-[0.20em] uppercase mb-4">
                    Our Story
                  </p>
                  <h1 className="text-[#3D2418] font-bold text-[2.8rem] sm:text-[3.6rem] lg:text-[4.2rem] leading-[1.04] tracking-tight">
                    Born from<br />
                    <span className="text-[#F97316]">lived</span> experience.
                  </h1>
                </div>
                <p className="anim-fade-up d-100 text-[#6B625B] text-lg lg:text-xl leading-relaxed max-w-xl">
                  AchaBox was born from lived experience, cultural memory, and a belief that
                  Africa's most nutritious foods deserve a place in modern living.
                </p>
                <div className="anim-fade-up d-200 h-px w-16 bg-[#F97316]/40" />
                <div className="anim-fade-up d-300 flex flex-wrap gap-x-10 gap-y-5">
                  <StatPill value="5,000+" label="Years of history" />
                  <StatPill value="18"     label="Countries of origin" />
                  <StatPill value="< 5min" label="Cooks in" />
                </div>
              </div>

              {/* Right — stacked image composition */}
              <div className="relative hidden lg:block">
                <RevealRight delay="0.1s">
                  <StoryImageBlock
                    src={fonioWinnowingImage}
                    alt="A woman winnowing fonio grain in West Africa"
                    className="w-full aspect-[3/4] rounded-2xl"
                    label="West Africa · Fonio processing"
                    objectPosition="52% center"
                  />
                </RevealRight>
                {/* Floating accent block */}
                <RevealScale delay="0.25s" className="absolute -bottom-8 -left-10 w-40">
                  <StoryImageBlock
                    src={wholeGrainBowlsImage}
                    alt="Bowls of whole grains arranged on a light surface"
                    className="w-full aspect-square rounded-2xl shadow-xl"
                    objectPosition="50% 48%"
                  />
                </RevealScale>
                {/* Dot accent */}
                <div
                  className="absolute -top-4 -right-4 w-20 h-20 opacity-25 pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(circle,#F97316 1px,transparent 1px)',
                    backgroundSize: '7px 7px',
                  }}
                />
              </div>

            </div>
          </div>
        </section>

        {/* ── FLIP BOOK ──────────────────────────────────────── */}
        <StoryFlipBook />

        {/* ── 6. BIG PULL QUOTE ──────────────────────────────── */}
        <section className="bg-[#3D2418] border-t border-[#F0EBE3] overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 py-24 lg:py-36 text-center relative">
            {/* Decorative large grain text */}
            <p
              className="absolute inset-0 flex items-center justify-center text-[20rem] font-black text-white/[0.03] leading-none select-none pointer-events-none overflow-hidden"
              aria-hidden="true"
            >
              Acha
            </p>

            <RevealScale>
              <p className="text-[#F97316] text-[10px] font-bold tracking-[0.22em] uppercase mb-10">
                The question that started everything
              </p>
              <blockquote className="text-white font-bold text-2xl sm:text-3xl lg:text-[2.8rem] leading-[1.18] tracking-tight">
                "Why are the foods that are<br className="hidden lg:block" />
                <span className="text-[#F97316]"> best for us</span> also the least understood<br className="hidden lg:block" />
                in the systems that shape<br className="hidden lg:block" />
                what we eat?"
              </blockquote>
              <div className="flex items-center justify-center gap-4 mt-12">
                <div className="h-px w-12 bg-[#F97316]/40 rounded-full" />
                <p className="text-white/40 text-xs font-medium tracking-widest uppercase">
                  Founder, AchaBox
                </p>
                <div className="h-px w-12 bg-[#F97316]/40 rounded-full" />
              </div>
            </RevealScale>
          </div>
        </section>

        {/* ── 8. MISSION — REBUILDING THE CONNECTION ─────────── */}
        <section className="bg-white border-t border-[#F0EBE3]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">

            <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
              <Reveal>
                <p className="text-[#F97316] text-[10px] font-bold tracking-[0.20em] uppercase mb-5">
                  Our Mission
                </p>
                <h2 className="text-[#3D2418] font-bold text-3xl sm:text-4xl lg:text-[3rem] leading-[1.1] tracking-tight">
                  Rebuilding<br />
                  <span className="text-[#F97316]">the Connection.</span>
                </h2>
              </Reveal>
              <Reveal delay="0.1s">
                <p className="text-[#6B625B] text-base lg:text-[1.1rem] leading-relaxed mt-6">
                  AchaBox exists at the intersection of lived experience, systemic insight,
                  and deep cultural pride. We are reconnecting African indigenous grains
                  with modern nutrition — one bag of Acha at a time.
                </p>
              </Reveal>
            </div>

            {/* Four pillars — editorial row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#F0EBE3]">
              {[
                {
                  title: 'Awareness',
                  body: 'Making the story of Acha known — its history, its nutrition, its cultural roots — to audiences who have never heard of it.',
                  image: wholeGrainBowlsImage,
                  alt: 'Bowls of whole grains on a light surface',
                  objectPosition: '50% 45%',
                },
                {
                  title: 'Accessibility',
                  body: 'Bringing Acha out of niche health stores and into everyday homes across the UK and beyond.',
                  image: marketGrainsImage,
                  alt: 'Open sacks of grains in a market',
                  objectPosition: '50% 48%',
                },
                {
                  title: 'Sustainability',
                  body: 'Sourcing directly from smallholder farmers in the Sahel — fair wages, clean practices, traceable supply chains.',
                  image: milletFieldImage,
                  alt: 'Millet seed heads growing in a field',
                  objectPosition: '45% 48%',
                },
                {
                  title: 'Health',
                  body: 'Positioning indigenous grains as a credible, evidence-based answer to rising diet-related conditions globally.',
                  image: healthyGrainBowlImage,
                  alt: 'A balanced grain bowl with vegetables and beans',
                  objectPosition: '40% 50%',
                },
              ].map(({ title, body, image, alt, objectPosition }, i) => (
                <Reveal key={title} delay={`${i * 0.08}s`} className="bg-white">
                  <div className="flex flex-col gap-5 p-8 lg:p-10 h-full">
                    <StoryImageBlock
                      src={image}
                      alt={alt}
                      className="w-full aspect-[16/9] rounded-md"
                      objectPosition={objectPosition}
                    />
                    <p className="text-[#3D2418] font-bold text-lg">{title}</p>
                    <p className="text-[#6B625B] text-sm leading-relaxed">{body}</p>
                  </div>
                </Reveal>
              ))}
            </div>

          </div>
        </section>


        {/* ── 9. CLOSING CTA ─────────────────────────────────── */}
        <section className="bg-[#FFF1E8] border-t border-[#F5D4B0]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20 lg:py-28 text-center">
            <RevealScale>
              <p className="text-[#F97316] text-[10px] font-bold tracking-[0.20em] uppercase mb-5">
                Today &amp; Beyond
              </p>
              <h2 className="text-[#3D2418] font-bold text-3xl sm:text-4xl lg:text-[2.8rem] leading-[1.12] tracking-tight mb-6">
                Starting with Acha.<br />
                Growing toward a<br />
                <span className="text-[#F97316]">broader indigenous grain ecosystem.</span>
              </h2>
              <p className="text-[#6B625B] text-base lg:text-[1.05rem] leading-relaxed max-w-xl mx-auto mb-10">
                What began as personal familiarity with a grain and lived exposure to
                dietary health conditions has evolved into a mission: rebuild the connection
                between Africa's finest foods and the people who need them most.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`${import.meta.env.BASE_URL}#shop`}
                  className="inline-flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-200 text-base hover:-translate-y-0.5"
                >
                  Shop Acha
                </a>
                <a
                  href={`${import.meta.env.BASE_URL}#benefits`}
                  className="inline-flex items-center justify-center border-2 border-[#4A2A1A]/20 hover:border-[#4A2A1A] text-[#4A2A1A] hover:bg-[#4A2A1A] hover:text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-200 text-base hover:-translate-y-0.5"
                >
                  Explore Benefits
                </a>
              </div>
            </RevealScale>
          </div>
        </section>

      </main>
    </>
  )
}
