import { useInView } from '../hooks/useInView'
import fonioWinnowingImage from '../assets/story/fonio-winnowing.webp'
import healthyGrainBowlImage from '../assets/story/healthy-grain-bowl.webp'
import milletFieldImage from '../assets/story/millet-field-ghana.webp'

const ARTICLES = [
  {
    id: 1,
    tag: 'Heritage',
    date: 'May 12, 2026',
    title: 'Fonio: The Ancient Grain the World is Finally Waking Up To',
    excerpt:
      'For millennia, fonio fed West African civilisations. Today, nutritionists and chefs from London to Lagos are rediscovering what farmers in the Sahel never forgot.',
    readTime: '5 min read',
    image: fonioWinnowingImage,
    imageAlt: 'A woman winnowing fonio grain in West Africa',
    imagePosition: '52% 50%',
  },
  {
    id: 2,
    tag: 'Nutrition',
    date: 'April 28, 2026',
    title: "Why Gluten-Free Doesn't Have to Mean Flavour-Free",
    excerpt:
      'Acha fonio proves that removing gluten adds something — a delicate nuttiness and a texture no substitute grain can match.',
    readTime: '3 min read',
    image: healthyGrainBowlImage,
    imageAlt: 'A balanced grain bowl with vegetables and beans',
    imagePosition: '42% 50%',
  },
  {
    id: 3,
    tag: 'Sustainability',
    date: 'April 10, 2026',
    title: 'The Climate-Smart Crop: How Fonio Thrives Where Others Fail',
    excerpt:
      'No fertiliser, minimal water, exhausted soils — fonio asks for almost nothing and gives back everything.',
    readTime: '4 min read',
    image: milletFieldImage,
    imageAlt: 'Millet seed heads growing in a field',
    imagePosition: '45% 50%',
  },
]

function Reveal({ children, className = '', delay = '0s' }) {
  const ref = useInView()
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: delay }}>
      {children}
    </div>
  )
}

function ArticleCard({ article, delay }) {
  const ref = useInView()
  return (
    <article
      ref={ref}
      className="reveal group flex flex-col gap-4 cursor-pointer"
      style={{ transitionDelay: delay }}
    >
      {/* Image */}
      <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#F3E6CF]">
        <img
          src={article.image}
          alt={article.imageAlt}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          style={{ objectPosition: article.imagePosition }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3D2418]/28 via-transparent to-white/8" />
      </div>

      {/* Meta */}
      <div className="flex items-center gap-2">
        <span className="text-[#F97316] text-[10px] font-bold tracking-[0.16em] uppercase">{article.tag}</span>
        <span className="w-1 h-1 rounded-full bg-[#D4C4B0]" />
        <span className="text-[#7A736C] text-xs">{article.date}</span>
      </div>

      {/* Title */}
      <h3 className="text-[#3D2418] font-bold text-lg leading-snug tracking-tight group-hover:text-[#F97316] transition-colors duration-200">
        {article.title}
      </h3>

      {/* Excerpt */}
      <p className="text-[#6B625B] text-sm leading-relaxed">{article.excerpt}</p>

      {/* Read more */}
      <span className="inline-flex items-center gap-1.5 text-[#F97316] text-xs font-semibold group-hover:gap-3 transition-all duration-200 mt-auto">
        Read more
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
    </article>
  )
}

export default function NewsSection() {
  return (
    <section id="news" className="bg-[#FAFAF7] border-t border-[#F0EBE3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-14">
          <div>
            <Reveal>
              <p className="text-[#F97316] text-xs font-bold tracking-[0.18em] uppercase mb-3">
                From the grain room
              </p>
            </Reveal>
            <Reveal delay="0.08s">
              <h2 className="text-[#3D2418] font-bold text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.1] tracking-tight">
                Stories worth reading
              </h2>
            </Reveal>
          </div>
          <Reveal delay="0.14s" className="shrink-0">
            <a
              href="#news"
              className="inline-flex items-center gap-2 text-[#4A2A1A] border border-[#4A2A1A]/20 hover:border-[#F97316] hover:text-[#F97316] text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200"
            >
              View all
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </Reveal>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {ARTICLES.map((article, i) => (
            <ArticleCard key={article.id} article={article} delay={`${i * 0.1}s`} />
          ))}
        </div>

      </div>
    </section>
  )
}
