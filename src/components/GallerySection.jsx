import { useInView } from '../hooks/useInView'
import whatIsAchaImage from '../assets/gallery/what-is-acha.jpeg'
import eventStallImage from '../assets/gallery/achabox-event-stall.jpeg'
import supergrainImage from '../assets/gallery/meet-the-supergrain.jpeg'
import productPackagingImage from '../assets/gallery/product-packaging.jpeg'
import whoIsAchaForImage from '../assets/gallery/who-is-acha-for.jpeg'
import communityImage from '../assets/gallery/achabox-community.jpeg'

const GALLERY_ITEMS = [
  {
    image: whatIsAchaImage,
    alt: 'AchaBox graphic explaining what acha is and its nutritional qualities',
    caption: 'What is Acha?',
    fit: 'contain',
    background: 'bg-white',
    layout: 'lg:col-start-1 lg:row-start-1 lg:col-span-2 lg:row-span-2',
  },
  {
    image: eventStallImage,
    alt: 'AchaBox fonio products displayed at a branded event stall',
    caption: 'AchaBox out in the community',
    fit: 'cover',
    background: 'bg-[#F3E6CF]',
    layout: 'lg:col-start-3 lg:row-start-1 lg:col-span-2 lg:row-span-2',
  },
  {
    image: supergrainImage,
    alt: 'AchaBox promotional graphic featuring its fonio product',
    caption: 'Meet the ancient supergrain',
    fit: 'contain',
    background: 'bg-[#F97316]',
    layout: 'lg:col-start-1 lg:row-start-3',
  },
  {
    image: productPackagingImage,
    alt: 'Acha fonio packaging with serving suggestions and nutrition information',
    caption: 'Goodness from every side',
    fit: 'contain',
    background: 'bg-[#FFF8F1]',
    layout: 'lg:col-start-2 lg:row-start-3 lg:col-span-2 lg:row-span-2',
  },
  {
    image: whoIsAchaForImage,
    alt: 'AchaBox graphic describing who can enjoy acha',
    caption: 'Acha for every generation',
    fit: 'contain',
    background: 'bg-[#F97316]',
    layout: 'lg:col-start-1 lg:row-start-4',
  },
  {
    image: communityImage,
    alt: 'Two people holding AchaBox promotional signs at an event',
    caption: 'The AchaBox community',
    fit: 'cover',
    background: 'bg-[#F3E6CF]',
    layout: 'lg:col-start-4 lg:row-start-3 lg:row-span-2',
  },
]

function GalleryTile({ image, alt, caption, fit, background, layout, index }) {
  const ref = useInView()

  return (
    <figure
      ref={ref}
      className={`reveal flex min-h-0 flex-col aspect-square lg:aspect-auto ${layout}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className={`min-h-0 flex-1 overflow-hidden rounded-xl border border-[#F0EBE3] ${background}`}>
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className={`h-full w-full ${fit === 'contain' ? 'object-contain' : 'object-cover'}`}
        />
      </div>
      <figcaption className="mt-3 font-semibold text-[#3D2418]">
        {caption}
      </figcaption>
    </figure>
  )
}

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-[#FAFAF7] border-t border-[#F0EBE3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center mb-14">
          <p className="text-[#F97316] text-xs font-bold tracking-[0.18em] uppercase mb-3">
            Gallery
          </p>
          <h2 className="text-[#3D2418] font-bold text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.1] tracking-tight">
            The world of AchaBox
          </h2>
          <p className="text-[#6B625B] text-base leading-relaxed max-w-2xl mx-auto mt-5">
            Explore our products, the people and places behind them, and the events
            and moments that bring the AchaBox community together.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[220px] gap-5">
          {GALLERY_ITEMS.map((item, index) => (
            <GalleryTile key={item.caption} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
