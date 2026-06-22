import { forwardRef, useCallback, useMemo, useRef, useState } from 'react'
import HTMLFlipBook from 'react-pageflip'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline'
import fonioWinnowingImage from '../assets/story/fonio-winnowing.webp'
import fonioGrainsImage from '../assets/story/fonio-grains.webp'
import marketGrainsImage from '../assets/story/market-grains.webp'
import milletFieldImage from '../assets/story/millet-field-ghana.webp'

const PAGE_SIZE = {
  width: 420,
  height: 560,
}

const BOOKMARKS = [
  { label: 'Cover', page: 0 },
  { label: 'Chapter 01', page: 1 },
  { label: 'Chapter 02', page: 3 },
  { label: 'Systems', page: 5 },
  { label: 'Mission', page: 8 },
]

function Texture({ tone = 'dark' }) {
  const dot = tone === 'light' ? 'rgba(255,255,255,0.22)' : 'rgba(61,36,24,0.07)'

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `
          radial-gradient(circle, ${dot} 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.12), transparent 18%, transparent 82%, rgba(61,36,24,0.09))
        `,
        backgroundSize: '18px 18px, 100% 100%',
      }}
    />
  )
}

function PageNumber({ number }) {
  if (!number) return null

  return (
    <span className="absolute bottom-5 right-6 text-[10px] font-semibold tracking-[0.18em] text-[#B39E89]">
      {String(number).padStart(2, '0')}
    </span>
  )
}

function Kicker({ children, tone = 'orange' }) {
  return (
    <p
      className={`text-[9px] font-bold uppercase tracking-[0.22em] ${
        tone === 'light' ? 'text-white/55' : 'text-[#F97316]'
      }`}
    >
      {children}
    </p>
  )
}

function StoryImage({ src, alt, label, objectPosition = 'center' }) {
  return (
    <div className="relative h-full overflow-hidden bg-[#2F271F]">
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-[#3D2418]/5 to-[#3D2418]/58" />
      <div className="absolute bottom-14 left-8 right-8">
        <div className="mb-4 h-px w-10 bg-[#F97316]" />
        <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/78 drop-shadow">
          {label}
        </p>
      </div>
    </div>
  )
}

const StoryPage = forwardRef(function StoryPage(
  { children, density = 'soft', className = '', pageNumber },
  ref,
) {
  return (
    <div
      ref={ref}
      data-density={density}
      className={`story-flip-page ${className}`}
    >
      {children}
      <PageNumber number={pageNumber} />
    </div>
  )
})

const CoverPage = forwardRef(function CoverPage(_, ref) {
  return (
    <StoryPage ref={ref} density="hard" className="story-cover-page">
      <div className="relative flex h-full flex-col justify-between overflow-hidden p-9 lg:p-11">
        <img
          src={fonioWinnowingImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-55"
          style={{ objectPosition: '52% center' }}
        />
        <Texture tone="light" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 76% 22%, rgba(249,115,22,0.28), transparent 28%), linear-gradient(160deg,#2A1610 0%,#3D2418 60%,#1A0D08 100%)',
          }}
        />
        <div className="relative">
          <Kicker tone="light">AchaBox</Kicker>
          <div className="mt-7 h-12 w-12 rounded-[10px] bg-[#F5E6CC] shadow-[0_18px_50px_rgba(0,0,0,0.25)]">
            <div className="flex h-full w-full items-center justify-center border border-[#F97316]/25 text-xl font-black text-[#3D2418]">
              A.
            </div>
          </div>
        </div>
        <div className="relative">
          <h2 className="text-[2.7rem] font-bold leading-[0.95] tracking-normal text-white lg:text-[3.45rem]">
            Our
            <br />
            <span className="text-[#F97316]">Story</span>
          </h2>
          <p className="mt-5 max-w-[230px] text-sm leading-relaxed text-white/52">
            Born from lived experience, cultural memory, and a belief that Africa's most
            nutritious foods deserve a place in modern living.
          </p>
        </div>
        <div className="relative flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
          <span>West Africa</span>
          <span>Est. 3000 BC</span>
        </div>
      </div>
    </StoryPage>
  )
})

const FamiliarGrainPage = forwardRef(function FamiliarGrainPage(_, ref) {
  return (
    <StoryPage ref={ref} pageNumber={1}>
      <div className="flex h-full flex-col justify-center gap-5 bg-white p-8 lg:p-10">
        <Kicker>Chapter 01</Kicker>
        <h3 className="text-2xl font-bold leading-[1.08] tracking-normal text-[#3D2418] lg:text-3xl">
          A grain I have
          <br />
          always known.
        </h3>
        <p className="text-sm leading-relaxed text-[#6B625B]">
          Growing up, Acha was simply part of everyday life. Not a superfood, not a trend,
          just food. It was light, deeply satisfying, and nourishing long before I understood
          its scientific or commercial value.
        </p>
        <blockquote className="border-l-2 border-[#F97316] pl-4">
          <p className="text-sm font-semibold italic leading-snug text-[#3D2418]">
            "It was the grain that was always there, in the kitchen and at the table."
          </p>
        </blockquote>
        <p className="text-sm leading-relaxed text-[#6B625B]">
          Over time I noticed something quietly troubling: the knowledge was eroding. The
          grain was becoming invisible.
        </p>
      </div>
    </StoryPage>
  )
})

const GrainVisualPage = forwardRef(function GrainVisualPage(_, ref) {
  return (
    <StoryPage ref={ref} pageNumber={2}>
      <StoryImage
        src={fonioGrainsImage}
        alt="A bowl of raw fonio grains"
        label="Acha / Digitaria exilis"
        objectPosition="right center"
      />
    </StoryPage>
  )
})

const FamilyHealthPage = forwardRef(function FamilyHealthPage(_, ref) {
  return (
    <StoryPage ref={ref} pageNumber={3}>
      <div className="flex h-full flex-col justify-center gap-5 bg-[#FFFDF9] p-8 lg:p-10">
        <Kicker>Chapter 02</Kicker>
        <h3 className="text-2xl font-bold leading-[1.08] tracking-normal text-[#3D2418] lg:text-3xl">
          When diet becomes
          <br />
          <span className="text-[#F97316]">personal.</span>
        </h3>
        <p className="text-sm leading-relaxed text-[#6B625B]">
          My mother, my father, my grandfather: all living with diabetes. Not as a statistic.
          As daily, tangible reality.
        </p>
        <p className="text-sm leading-relaxed text-[#6B625B]">
          That experience made the connection between food and health impossible to ignore.
          It was not abstract. It was at the dinner table.
        </p>
        <div className="mt-2 grid grid-cols-3 gap-3 border-t border-[#F0EBE3] pt-5">
          {[
            ['Low GI', 'Glycaemic index'],
            ['9g', 'Protein / 100g'],
            ['Zero', 'Gluten'],
          ].map(([value, label]) => (
            <div key={label}>
              <p className="text-xl font-bold text-[#F97316]">{value}</p>
              <p className="mt-1 text-[9px] font-semibold uppercase leading-snug tracking-[0.12em] text-[#8B7A6B]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </StoryPage>
  )
})

const WestAfricaPage = forwardRef(function WestAfricaPage(_, ref) {
  return (
    <StoryPage ref={ref} pageNumber={4}>
      <div className="relative h-full overflow-hidden bg-[#2F271F]">
        <img
          src={fonioWinnowingImage}
          alt="A woman winnowing fonio grain in West Africa"
          className="absolute inset-0 h-full w-full object-cover opacity-90"
          style={{ objectPosition: '52% center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#3D2418]/10 via-[#3D2418]/10 to-[#3D2418]/72" />
        <div className="absolute bottom-8 left-7 right-7 rounded-md bg-white/92 p-5 shadow-2xl backdrop-blur-sm">
          <Kicker>Origin</Kicker>
          <p className="mt-2 text-2xl font-bold leading-tight text-[#3D2418]">West Africa</p>
          <p className="mt-2 text-sm leading-relaxed text-[#6B625B]">
            Acha carries history, resilience, and the quiet intelligence of a grain adapted to
            the Sahel.
          </p>
        </div>
      </div>
    </StoryPage>
  )
})

const SystemsPage = forwardRef(function SystemsPage(_, ref) {
  return (
    <StoryPage ref={ref} pageNumber={5}>
      <div className="flex h-full flex-col justify-center gap-5 bg-white p-8 lg:p-10">
        <Kicker>Chapter 03</Kicker>
        <h3 className="text-2xl font-bold leading-[1.08] tracking-normal text-[#3D2418] lg:text-3xl">
          Individual choices.
          <br />
          Structural forces.
        </h3>
        <p className="text-sm leading-relaxed text-[#6B625B]">
          Convenience gradually influenced what I ate, not because processed foods were better,
          but because they were more accessible, heavily marketed, and normalised.
        </p>
        <div className="grid gap-4 pt-2">
          {[
            ['Convenience', 'Processed foods win by proximity, not by merit.'],
            ['Awareness', 'Indigenous grains are nutritionally remarkable yet absent from education.'],
            ['Systems', 'Personal food choices are shaped by broader structural realities.'],
          ].map(([heading, body], index) => (
            <div key={heading} className="grid grid-cols-[2rem_1fr] gap-3">
              <span className="text-xl font-bold text-[#F97316]/40">0{index + 1}</span>
              <span>
                <p className="text-sm font-bold text-[#3D2418]">{heading}</p>
                <p className="mt-1 text-xs leading-relaxed text-[#6B625B]">{body}</p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </StoryPage>
  )
})

const ContradictionPage = forwardRef(function ContradictionPage(_, ref) {
  return (
    <StoryPage ref={ref} pageNumber={6}>
      <div className="relative flex h-full flex-col justify-center gap-5 overflow-hidden bg-[#3D2418] p-8 text-white lg:p-10">
        <Texture tone="light" />
        <Kicker tone="light">Chapter 04</Kicker>
        <h3 className="relative text-2xl font-bold leading-[1.08] tracking-normal lg:text-3xl">
          Africa produces it.
          <br />
          <span className="text-[#F97316]">The world ignores it.</span>
        </h3>
        <p className="relative text-sm leading-relaxed text-white/62">
          Africa is one of the largest producers of indigenous grains, yet these crops remain
          critically underrepresented in modern food systems and consumer awareness.
        </p>
        <blockquote className="relative border-l-2 border-[#F97316] pl-4">
          <p className="text-sm font-semibold italic leading-snug text-white">
            "The gap is not just agricultural. It is nutritional, economic, and informational."
          </p>
        </blockquote>
        <div className="relative mt-3 h-28 overflow-hidden rounded-sm border border-white/10 bg-white/[0.06]">
          <img
            src={marketGrainsImage}
            alt="Open sacks of grains in a market"
            className="h-full w-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3D2418]/20 to-[#3D2418]/58" />
        </div>
      </div>
    </StoryPage>
  )
})

const ClimatePage = forwardRef(function ClimatePage(_, ref) {
  return (
    <StoryPage ref={ref} pageNumber={7}>
      <div className="grid h-full grid-rows-[42%_1fr] bg-white">
        <StoryImage
          src={milletFieldImage}
          alt="Millet seed heads growing in a field"
          label="Climate resilience / Sustainability"
          objectPosition="45% center"
        />
        <div className="flex flex-col justify-center gap-4 p-8 lg:p-10">
          <Kicker>Chapter 05</Kicker>
          <h3 className="text-2xl font-bold leading-[1.08] tracking-normal text-[#3D2418] lg:text-3xl">
            The grain that needs
            <br />
            <span className="text-[#F97316]">almost nothing.</span>
          </h3>
          <p className="text-sm leading-relaxed text-[#6B625B]">
            Minimal water. No synthetic fertiliser. Acha thrives where other crops cannot,
            making it both a nutrition opportunity and a climate solution.
          </p>
        </div>
      </div>
    </StoryPage>
  )
})

const MissionPage = forwardRef(function MissionPage(_, ref) {
  return (
    <StoryPage ref={ref} pageNumber={8}>
      <div className="flex h-full flex-col justify-center gap-5 bg-[#FFF8F1] p-8 lg:p-10">
        <Kicker>Our Mission</Kicker>
        <h3 className="text-2xl font-bold leading-[1.08] tracking-normal text-[#3D2418] lg:text-3xl">
          Rebuilding
          <br />
          <span className="text-[#F97316]">the Connection.</span>
        </h3>
        <p className="text-sm leading-relaxed text-[#6B625B]">
          AchaBox exists at the intersection of lived experience, systemic insight, and deep
          cultural pride.
        </p>
        <div className="grid grid-cols-2 gap-3 pt-2">
          {['Awareness', 'Accessibility', 'Sustainability', 'Health'].map((pillar) => (
            <div key={pillar} className="rounded-sm border border-[#E9D9C4] bg-white/72 p-3">
              <span className="mb-3 block h-1 w-8 rounded-full bg-[#F97316]" />
              <p className="text-sm font-bold text-[#3D2418]">{pillar}</p>
            </div>
          ))}
        </div>
      </div>
    </StoryPage>
  )
})

const BackCoverPage = forwardRef(function BackCoverPage(_, ref) {
  return (
    <StoryPage ref={ref} density="hard" className="story-cover-page">
      <div className="relative flex h-full flex-col justify-between overflow-hidden bg-[#24140E] p-9 lg:p-11">
        <img
          src={marketGrainsImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-[0.42]"
        />
        <Texture tone="light" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 28% 18%, rgba(249,115,22,0.22), transparent 30%), linear-gradient(145deg,#3D2418 0%,#24140E 72%)',
          }}
        />
        <div className="relative">
          <Kicker tone="light">Today and beyond</Kicker>
          <h3 className="mt-7 text-3xl font-bold leading-[1.05] tracking-normal text-white lg:text-4xl">
            Starting with Acha.
            <br />
            Growing outward.
          </h3>
        </div>
        <p className="relative max-w-[260px] text-sm leading-relaxed text-white/55">
          Reconnecting Africa's finest foods with the people who need them most, one bag of
          Acha at a time.
        </p>
        <div className="relative flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
          <span>AchaBox</span>
          <span>Our Story</span>
        </div>
      </div>
    </StoryPage>
  )
})

function buildPages() {
  return [
    <CoverPage key="cover" />,
    <FamiliarGrainPage key="familiar" />,
    <GrainVisualPage key="grain-visual" />,
    <FamilyHealthPage key="family" />,
    <WestAfricaPage key="west-africa" />,
    <SystemsPage key="systems" />,
    <ContradictionPage key="contradiction" />,
    <ClimatePage key="climate" />,
    <MissionPage key="mission" />,
    <BackCoverPage key="back-cover" />,
  ]
}

export default function StoryFlipBook() {
  const bookRef = useRef(null)
  const pages = useMemo(() => buildPages(), [])
  const [currentPage, setCurrentPage] = useState(0)
  const [bookState, setBookState] = useState('read')

  const pageFlip = useCallback(() => bookRef.current?.pageFlip?.(), [])

  const goNext = useCallback(() => {
    pageFlip()?.flipNext('bottom')
  }, [pageFlip])

  const goPrev = useCallback(() => {
    pageFlip()?.flipPrev('bottom')
  }, [pageFlip])

  const goToPage = useCallback(
    (page) => {
      pageFlip()?.flip(page, 'bottom')
    },
    [pageFlip],
  )

  const canGoPrev = currentPage > 0 && bookState !== 'flipping'
  const canGoNext = currentPage < pages.length - 1 && bookState !== 'flipping'

  return (
    <section className="story-flip-section border-t border-[#D8C8B5] bg-[#EDE4D6] py-20 lg:py-28">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 lg:px-8">
        <div className="text-center">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#F97316]">
            Read our story
          </p>
          <h2 className="text-2xl font-bold tracking-normal text-[#3D2418] lg:text-3xl">
            The AchaBox Journey
          </h2>
        </div>

        <div className="story-book-stage relative w-full max-w-5xl">
          <div className="story-book-shadow absolute -bottom-7 left-[9%] right-[9%] h-12 rounded-full bg-black/25 blur-2xl" />
          <div className="story-book-stack absolute -bottom-3 left-[3%] right-[3%] h-7 rounded-b-md" />

          <HTMLFlipBook
            ref={bookRef}
            width={PAGE_SIZE.width}
            height={PAGE_SIZE.height}
            size="stretch"
            minWidth={280}
            maxWidth={PAGE_SIZE.width}
            minHeight={374}
            maxHeight={PAGE_SIZE.height}
            drawShadow
            flippingTime={980}
            usePortrait
            startZIndex={10}
            autoSize
            maxShadowOpacity={0.58}
            showCover
            mobileScrollSupport
            clickEventForward
            useMouseEvents
            swipeDistance={24}
            showPageCorners
            disableFlipByClick={false}
            startPage={0}
            className="storybook"
            style={{ margin: '0 auto' }}
            renderOnlyPageLengthChange
            onFlip={(event) => setCurrentPage(event.data)}
            onChangeState={(event) => setBookState(event.data)}
            onInit={(event) => setCurrentPage(event.data.page)}
          >
            {pages}
          </HTMLFlipBook>
        </div>

        <div className="flex w-full max-w-3xl flex-col items-center gap-5">
          <div className="flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={goPrev}
              disabled={!canGoPrev}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#BCA68F] bg-white/70 text-[#3D2418] shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[#F97316] hover:text-[#F97316] disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0"
              aria-label="Previous page"
              title="Previous page"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>

            <div className="flex min-w-[9.5rem] items-center justify-center gap-2 rounded-full border border-[#D2BFA9] bg-white/55 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#7C6A5A]">
              <Squares2X2Icon className="h-4 w-4 text-[#F97316]" />
              <span>
                {Math.min(currentPage + 1, pages.length)} / {pages.length}
              </span>
            </div>

            <button
              type="button"
              onClick={goNext}
              disabled={!canGoNext}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#BCA68F] bg-white/70 text-[#3D2418] shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[#F97316] hover:text-[#F97316] disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0"
              aria-label="Next page"
              title="Next page"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {BOOKMARKS.map(({ label, page }) => {
              const active = currentPage >= page && currentPage < (BOOKMARKS.find((item) => item.page > page)?.page ?? pages.length)

              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => goToPage(page)}
                  disabled={bookState === 'flipping'}
                  className={`h-2.5 rounded-full transition-all duration-200 ${
                    active
                      ? 'w-8 bg-[#F97316]'
                      : 'w-2.5 bg-[#BCA68F] hover:bg-[#F97316]/60'
                  }`}
                  aria-label={`Open ${label}`}
                  title={label}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
