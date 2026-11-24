export default function BrandLogo({ className = '', variant = 'orange' }) {
  const logo = variant === 'white' ? 'achabox-logo-white.png' : 'achabox-logo-orange.png'

  return (
    <img
      src={`${import.meta.env.BASE_URL}${logo}`}
      alt="AchaBox"
      draggable="false"
      className={`block w-auto object-contain ${className}`}
    />
  )
}
