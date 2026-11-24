import {
  TruckIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ClockIcon,
} from '@heroicons/react/24/outline'
import { useInView } from '../hooks/useInView'

const FEATURES = [
  { Icon: TruckIcon,      title: 'Free Delivery',    desc: 'Available on qualifying orders'        },
  { Icon: ShieldCheckIcon, title: '100% Certified',  desc: 'Gluten-free & non-GMO verified'        },
  { Icon: SparklesIcon,   title: 'Ancient Heritage',  desc: 'Grown for 5,000 years in West Africa'  },
  { Icon: ClockIcon,      title: 'Ready in 5 Min',   desc: 'Fastest-cooking grain on the planet'   },
]

function FeatureCard({ Icon, title, desc, delay }) {
  const ref = useInView()
  return (
    <div
      ref={ref}
      className="reveal flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 px-6 py-8 lg:py-10 text-center sm:text-left group cursor-default"
      style={{ transitionDelay: delay }}
    >
      <span className="shrink-0 w-12 h-12 rounded-lg bg-[#F3E6CF] flex items-center justify-center text-[#F97316] transition-all duration-300 group-hover:bg-[#F97316] group-hover:text-white group-hover:scale-110">
        <Icon className="w-6 h-6" />
      </span>
      <div>
        <p className="text-[#4A2A1A] font-semibold text-sm sm:text-base leading-snug">{title}</p>
        <p className="text-[#7A736C] text-xs sm:text-sm mt-0.5 leading-snug">{desc}</p>
      </div>
    </div>
  )
}

export default function FeaturesStrip() {
  return (
    <section className="bg-white border-y border-[#F0EBE3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#F0EBE3]">
          {FEATURES.map(({ Icon, title, desc }, i) => (
            <FeatureCard
              key={title}
              Icon={Icon}
              title={title}
              desc={desc}
              delay={`${i * 0.1}s`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
