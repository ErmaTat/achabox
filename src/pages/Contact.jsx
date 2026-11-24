import { useEffect, useState } from 'react'
import {
  ArrowRightIcon,
  ClockIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'
import BrandLogo from '../components/BrandLogo'
import { useInView } from '../hooks/useInView'

function ScrollTop() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return null
}

function Reveal({ children, className = '', delay = '0s' }) {
  const ref = useInView()
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: delay }}>
      {children}
    </div>
  )
}

const CONTACT_METHODS = [
  {
    icon: EnvelopeIcon,
    label: 'Email',
    value: 'hello@acahabox.com',
    href: 'mailto:hello@acahabox.com',
  },
  {
    icon: PhoneIcon,
    label: 'Phone',
    value: '08113579865',
    href: 'tel:+2348113579865',
  },
  {
    icon: MapPinIcon,
    label: 'Address',
    value: 'No. 20 FDA Road, Jos, Plateau State',
    href: null,
  },
  {
    icon: ClockIcon,
    label: 'Response',
    value: 'Within 1-2 business days',
    href: null,
  },
]

const TOPICS = [
  'Online orders',
  'Wholesale',
  'Press',
  'Partnerships',
  'Other',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const topic = formData.get('topic')
    const body = [
      `Name: ${formData.get('name')}`,
      `Email: ${formData.get('email')}`,
      `Topic: ${topic}`,
      '',
      formData.get('message'),
    ].join('\n')

    window.location.href = `mailto:hello@acahabox.com?subject=${encodeURIComponent(`AchaBox enquiry: ${topic}`)}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  return (
    <>
      <ScrollTop />
      <main id="contact" className="bg-[#FAFAF7] pt-[104px]">
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-20 items-center">
              <div className="flex flex-col gap-7 max-w-2xl">
                <Reveal>
                  <p className="text-[#F97316] text-xs font-bold tracking-[0.20em] uppercase mb-4">
                    Contact
                  </p>
                  <h1 className="text-[#3D2418] font-bold text-[2.8rem] sm:text-[3.6rem] lg:text-[4.2rem] leading-[1.04] tracking-tight">
                    Let&apos;s talk<br />
                    <span className="mt-3 block">
                      <BrandLogo className="h-16" />
                    </span>
                  </h1>
                </Reveal>
                <Reveal delay="0.1s">
                  <p className="text-[#6B625B] text-lg lg:text-xl leading-relaxed max-w-xl">
                    Questions about orders, wholesale, recipes, or collaborations? Send a note
                    and the AchaBox team will get back to you.
                  </p>
                </Reveal>
                <Reveal delay="0.18s">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                    {CONTACT_METHODS.map(({ icon: Icon, label, value, href }) => {
                      const content = (
                        <>
                          <Icon className="h-5 w-5 text-[#F97316] shrink-0" />
                          <span>
                            <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-[#9B8D80]">
                              {label}
                            </span>
                            <span className="mt-1 block text-sm font-semibold text-[#3D2418]">
                              {value}
                            </span>
                          </span>
                        </>
                      )

                      return href ? (
                        <a
                          key={label}
                          href={href}
                          className="flex items-start gap-3 rounded-lg border border-[#F0EBE3] bg-[#FAFAF7] p-4 transition duration-200 hover:-translate-y-0.5 hover:border-[#F97316]/50"
                        >
                          {content}
                        </a>
                      ) : (
                        <div
                          key={label}
                          className="flex items-start gap-3 rounded-lg border border-[#F0EBE3] bg-[#FAFAF7] p-4"
                        >
                          {content}
                        </div>
                      )
                    })}
                  </div>
                </Reveal>
              </div>

              <Reveal delay="0.12s">
                <form
                  onSubmit={handleSubmit}
                  className="rounded-xl border border-[#F0EBE3] bg-[#FFFDF9] p-6 sm:p-8 shadow-[0_24px_70px_rgba(61,36,24,0.08)]"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <label className="flex flex-col gap-2 text-sm font-semibold text-[#3D2418]">
                      Name
                      <input
                        name="name"
                        required
                        className="rounded-lg border border-[#E8DDD0] bg-white px-4 py-3 text-sm font-normal outline-none transition focus:border-[#F97316]"
                        placeholder="Your name"
                      />
                    </label>
                    <label className="flex flex-col gap-2 text-sm font-semibold text-[#3D2418]">
                      Email
                      <input
                        name="email"
                        type="email"
                        required
                        className="rounded-lg border border-[#E8DDD0] bg-white px-4 py-3 text-sm font-normal outline-none transition focus:border-[#F97316]"
                        placeholder="you@example.com"
                      />
                    </label>
                  </div>

                  <label className="mt-5 flex flex-col gap-2 text-sm font-semibold text-[#3D2418]">
                    Topic
                    <select
                      name="topic"
                      className="rounded-lg border border-[#E8DDD0] bg-white px-4 py-3 text-sm font-normal outline-none transition focus:border-[#F97316]"
                      defaultValue="Online orders"
                    >
                      {TOPICS.map((topic) => (
                        <option key={topic}>{topic}</option>
                      ))}
                    </select>
                  </label>

                  <label className="mt-5 flex flex-col gap-2 text-sm font-semibold text-[#3D2418]">
                    Message
                    <textarea
                      name="message"
                      required
                      rows={6}
                      className="resize-none rounded-lg border border-[#E8DDD0] bg-white px-4 py-3 text-sm font-normal leading-relaxed outline-none transition focus:border-[#F97316]"
                      placeholder="Tell us what you need"
                    />
                  </label>

                  <button
                    type="submit"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#F97316] px-6 py-3.5 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#EA580C]"
                  >
                    Send Message
                    <ArrowRightIcon className="h-4 w-4" />
                  </button>

                  {submitted && (
                    <p className="mt-4 rounded-lg bg-[#EAF0E4] px-4 py-3 text-sm font-medium text-[#425A32]">
                      Your email app should open with a draft addressed to hello@acahabox.com. If it doesn&apos;t, email us directly.
                    </p>
                  )}
                </form>
              </Reveal>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
