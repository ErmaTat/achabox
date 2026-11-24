import { useInView } from '../hooks/useInView'

const UPCOMING_PRODUCTS = [
  {
    name: 'Instant Kunu Mix',
    description: 'A convenient mix for making kunu at home.',
  },
  {
    name: 'Acha Flour',
    description: 'A versatile new way to bring Acha into your cooking.',
  },
  {
    name: 'Pancake Mix',
    description: 'AchaBox breakfast inspiration is on the way.',
  },
]

function ProductCard({ name, description, index }) {
  const ref = useInView()

  return (
    <article
      ref={ref}
      className="reveal rounded-2xl border border-[#F0EBE3] bg-white p-7 shadow-sm"
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className="mb-7 flex items-center justify-between gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF1E3] text-sm font-bold text-[#F97316]">
          0{index + 1}
        </span>
        <span className="rounded-full bg-[#FFF8F1] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#C66B20]">
          Coming soon
        </span>
      </div>
      <h3 className="text-xl font-bold tracking-tight text-[#3D2418]">{name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#6B625B]">{description}</p>
    </article>
  )
}

export default function UpcomingProductsSection() {
  return (
    <section id="upcoming-products" className="border-t border-[#F0EBE3] bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#F97316]">
            Coming soon
          </p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#3D2418] sm:text-4xl">
            More from AchaBox
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#6B625B]">
            We&apos;re working on new ways to enjoy AchaBox. Here&apos;s what&apos;s coming up.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {UPCOMING_PRODUCTS.map((product, index) => (
            <ProductCard key={product.name} {...product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
