import { useInView } from '../hooks/useInView'
import whyImg from '../assets/story/why.png?format=webp&quality=80&width=900'

/* ── Small helpers ─────────────────────────────────────────── */

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.10em] uppercase text-[#4A2A1A] bg-[#F3E6CF] px-3 py-1.5 rounded-full">
      <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] shrink-0" />
      {children}
    </span>
  )
}

function Reveal({ children, className = '', delay = '0s', direction = 'up' }) {
  const ref = useInView()
  const cls = direction === 'left' ? 'reveal-left' : 'reveal'
  return (
    <div ref={ref} className={`${cls} ${className}`} style={{ transitionDelay: delay }}>
      {children}
    </div>
  )
}

/* ── Main section ─────────────────────────────────────────── */

export default function StorySection() {
  return (
    <section id="benefits" className="bg-[#FAFAF7]">

      {/* ── Block 1 — Image left / Story right ────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-14 pb-12 lg:pt-16 lg:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 lg:gap-20 items-center">

          {/* Left: large image */}
          <Reveal direction="left" delay="0s">
            <div className="relative w-full aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-2xl">
              <img
                src={whyImg}
                alt="Acha fonio grain — West African origin"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </Reveal>

          {/* Right: editorial text */}
          <div className="flex flex-col gap-7">
            <Reveal delay="0.05s">
              <p className="text-[#F97316] text-xs font-bold tracking-[0.18em] uppercase">
                Why Acha?
              </p>
            </Reveal>

            <Reveal delay="0.12s">
              <h2 className="text-[#3D2418] font-bold text-3xl sm:text-4xl lg:text-[2.8rem] leading-[1.1] tracking-tight">
                The grain that fed<br />
                <span className="text-[#F97316]">generations.</span><br />
                Rediscovered.
              </h2>
            </Reveal>

            <Reveal delay="0.2s">
              <p className="text-[#6B625B] text-base lg:text-[1.05rem] leading-relaxed">
                Fonio — known as <em>Acha</em> across West Africa — has nourished communities
                for over 5,000 years. Tiny in size yet enormous in nutrition, it requires
                no fertiliser, thrives in poor soils, and cooks in under five minutes.
                It is not a food trend. It is a food truth.
              </p>
            </Reveal>

            <Reveal delay="0.28s">
              <p className="text-[#6B625B] text-base lg:text-[1.05rem] leading-relaxed">
                We source directly from smallholder farmers in the Sahel region, ensuring
                every bag carries fair wages, clean growing practices, and the authentic
                flavour that no modern grain can replicate.
              </p>
            </Reveal>

            {/* Pills */}
            <Reveal delay="0.36s">
              <div className="flex flex-wrap gap-2 pt-1">
                <Pill>Naturally Gluten Free</Pill>
                <Pill>Ancient African Grain</Pill>
                <Pill>Rich in Fibre</Pill>
                <Pill>Climate Resilient</Pill>
              </div>
            </Reveal>
          </div>

        </div>
      </div>


    </section>
  )
}
