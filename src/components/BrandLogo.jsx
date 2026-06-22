function LunchBoxO({ className = '' }) {
  return (
    <span
      aria-hidden="true"
      className={`mx-[0.02em] inline-flex h-[0.96em] w-[0.96em] translate-y-[0.055em] items-center justify-center text-[#F97316] ${className}`}
    >
      <svg viewBox="0 4 24 20" className="h-full w-full overflow-visible" fill="none">
        <path
          d="M8.4 8V6.9C8.4 5.9 9.2 5.2 10.2 5.2h3.6c1 0 1.8 0.7 1.8 1.7V8"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <rect x="2.3" y="7.6" width="19.4" height="14.2" rx="4.1" fill="currentColor" />
        <path
          d="M2.3 13.6h19.4M8.8 10.9v7.6M15.2 10.9v7.6"
          stroke="white"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeOpacity="0.86"
        />
      </svg>
    </span>
  )
}

export default function BrandLogo({ className = '', markClassName = '' }) {
  return (
    <span
      aria-label="AchaBox"
      className={`inline-flex items-center font-bold leading-none tracking-tight ${className}`}
    >
      <span>AchaB</span>
      <LunchBoxO className={markClassName} />
      <span>x</span>
    </span>
  )
}
