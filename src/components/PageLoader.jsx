import BrandLogo from './BrandLogo'

export default function PageLoader({ visible }) {
  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-white transition-opacity duration-500 pointer-events-none ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <BrandLogo className="mb-8 select-none text-3xl text-[#4A2A1A]" />

      {/* Animated grain dots */}
      <div className="flex items-center gap-2">
        {[0, 1, 2, 3].map(i => (
          <span
            key={i}
            className="block w-2 h-2 rounded-full bg-[#F97316]"
            style={{
              animation: 'loader-bounce 1s ease-in-out infinite',
              animationDelay: `${i * 0.15}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes loader-bounce {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.3; }
          40%            { transform: scale(1);   opacity: 1;   }
        }
      `}</style>
    </div>
  )
}
