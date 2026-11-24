import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRightIcon,
  BellIcon,
  BookOpenIcon,
  CheckCircleIcon,
  ClockIcon,
  HeartIcon,
  HomeIcon,
  MapPinIcon,
  ShoppingBagIcon,
  SparklesIcon,
  TruckIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline'
import { useInView } from '../hooks/useInView'
import fonioWinnowingImage from '../assets/story/fonio-winnowing.webp'
import wholeGrainBowlsImage from '../assets/story/whole-grain-bowls.webp'
import marketGrainsImage from '../assets/story/market-grains.webp'
import milletFieldImage from '../assets/story/millet-field-ghana.webp'
import healthyGrainBowlImage from '../assets/story/healthy-grain-bowl.webp'

const NAV_ITEMS = [
  { id: 'overview', label: 'Dashboard', path: '/dashboard', icon: HomeIcon },
  { id: 'orders', label: 'Orders', path: '/dashboard/orders', icon: ShoppingBagIcon },
  { id: 'recipes', label: 'Recipes', path: '/dashboard/recipes', icon: BookOpenIcon },
  { id: 'notifications', label: 'Notifications', path: '/dashboard/notifications', icon: BellIcon },
  { id: 'profile', label: 'Profile', path: '/dashboard/profile', icon: UserCircleIcon },
]

const NEWS = [
  {
    tag: 'Heritage',
    title: 'Fonio is having its modern table moment',
    body: 'A short read on why chefs and home cooks are returning to this ancient West African grain.',
    image: fonioWinnowingImage,
    position: '52% 50%',
  },
  {
    tag: 'Sustainability',
    title: 'The crop that asks for almost nothing',
    body: 'Acha grows where many grains struggle, which is why it matters for climate-smart food systems.',
    image: milletFieldImage,
    position: '45% 50%',
  },
  {
    tag: 'Nutrition',
    title: 'A lighter base for everyday bowls',
    body: 'Build quick meals around Acha, vegetables, herbs, and warming spices.',
    image: healthyGrainBowlImage,
    position: '42% 50%',
  },
]

const ORDERS = [
  {
    id: 'AB-2048',
    status: 'Preparing',
    date: 'May 22, 2026',
    item: 'Acha Pantry Pack',
    detail: '2 bags of whole natural fonio seeds',
    total: '₦34.00',
    eta: 'Ships tomorrow',
  },
  {
    id: 'AB-1982',
    status: 'Delivered',
    date: 'May 8, 2026',
    item: 'Starter Box',
    detail: 'Fonio seeds, recipe card, and storage pouch',
    total: '₦24.00',
    eta: 'Delivered May 11',
  },
  {
    id: 'AB-1904',
    status: 'Delivered',
    date: 'April 16, 2026',
    item: 'Family Refill',
    detail: '4 bags for weekly breakfasts and grain bowls',
    total: '₦58.00',
    eta: 'Delivered April 19',
  },
]

const RECIPES = [
  {
    title: 'Warm Acha Breakfast Bowl',
    time: '8 min',
    tag: 'Breakfast',
    image: wholeGrainBowlsImage,
    body: 'Cook Acha with oat milk, cinnamon, dates, and roasted nuts.',
  },
  {
    title: 'Herby Fonio Grain Salad',
    time: '12 min',
    tag: 'Lunch',
    image: healthyGrainBowlImage,
    body: 'A bright bowl with greens, beans, sweet potato, and a citrus dressing.',
  },
  {
    title: 'Sahel Spiced Dinner Base',
    time: '18 min',
    tag: 'Dinner',
    image: marketGrainsImage,
    body: 'Pair fluffy Acha with tomato stew, herbs, and grilled vegetables.',
  },
]

const NOTIFICATIONS = [
  {
    title: 'Your pantry pack is being prepared',
    body: 'Order AB-2048 is packed and should leave the grain room tomorrow.',
    time: 'Today',
    icon: ShoppingBagIcon,
  },
  {
    title: 'New recipe saved for you',
    body: 'Try the herby fonio grain salad with the Acha you ordered last week.',
    time: 'Yesterday',
    icon: BookOpenIcon,
  },
  {
    title: 'Stock update',
    body: 'The next smallholder shipment has arrived and passed quality checks.',
    time: 'May 18',
    icon: TruckIcon,
  },
]

function ScrollTop() {
  const { pathname } = useLocation()

  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
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

function currentSection(pathname) {
  const section = pathname.split('/')[2]
  return section || 'overview'
}

function AccountNav({ active }) {
  return (
    <aside className="lg:sticky lg:top-[132px] h-fit">
      <nav className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-1 gap-2">
        {NAV_ITEMS.map(({ id, label, path, icon: Icon }) => (
          <Link
            key={id}
            to={path}
            className={`flex items-center gap-3 rounded-lg border px-4 py-3 text-sm font-semibold transition duration-200 ${
              active === id
                ? 'border-[#F97316] bg-[#FFF1E8] text-[#3D2418]'
                : 'border-[#F0EBE3] bg-white text-[#6B625B] hover:border-[#F97316]/45 hover:text-[#3D2418]'
            }`}
          >
            <Icon className="h-5 w-5 shrink-0 text-[#F97316]" />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}

function ImageCard({ image, title, tag, body, position = 'center', delay = '0s' }) {
  return (
    <Reveal delay={delay}>
      <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-[#F0EBE3] bg-white">
        <div className="relative aspect-[16/10] overflow-hidden bg-[#F3E6CF]">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            style={{ objectPosition: position }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3D2418]/35 via-transparent to-white/10" />
          <p className="absolute bottom-4 left-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
            {tag}
          </p>
        </div>
        <div className="flex flex-1 flex-col gap-3 p-5">
          <h3 className="text-lg font-bold leading-snug text-[#3D2418]">{title}</h3>
          <p className="text-sm leading-relaxed text-[#6B625B]">{body}</p>
          <span className="mt-auto inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#F97316]">
            Open
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </span>
        </div>
      </article>
    </Reveal>
  )
}

function Overview() {
  return (
    <div className="flex flex-col gap-10">
      <Reveal>
        <section className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-6">
          <div className="relative min-h-[360px] overflow-hidden rounded-xl bg-[#3D2418]">
            <img
              src={marketGrainsImage}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-[0.82]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#3D2418]/82 via-[#3D2418]/42 to-transparent" />
            <div className="relative flex min-h-[360px] max-w-xl flex-col justify-end gap-5 p-8 lg:p-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.20em] text-[#F97316]">
                This week in your grain room
              </p>
              <h2 className="text-3xl font-bold leading-tight text-white lg:text-4xl">
                New harvest notes from our West African supply partners.
              </h2>
              <p className="text-sm leading-relaxed text-white/68">
                Follow sourcing updates, seasonal recipes, and practical ways to use Acha in
                quick everyday meals.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {[
              {
                icon: ShoppingBagIcon,
                title: 'Next order',
                body: 'Acha Pantry Pack is preparing for dispatch.',
                action: 'View order',
                to: '/dashboard/orders',
              },
              {
                icon: BookOpenIcon,
                title: 'Saved recipe',
                body: 'Warm Acha breakfast bowl is ready for your next cook.',
                action: 'Open recipes',
                to: '/dashboard/recipes',
              },
              {
                icon: BellIcon,
                title: 'Fresh update',
                body: 'A new sourcing update has been added to your feed.',
                action: 'See notifications',
                to: '/dashboard/notifications',
              },
            ].map(({ icon: Icon, title, body, action, to }) => (
              <Link
                key={title}
                to={to}
                className="flex items-center gap-4 rounded-lg border border-[#F0EBE3] bg-white p-5 transition duration-200 hover:-translate-y-0.5 hover:border-[#F97316]/45"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#FFF1E8]">
                  <Icon className="h-5 w-5 text-[#F97316]" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-bold text-[#3D2418]">{title}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-[#6B625B]">{body}</span>
                </span>
                <span className="hidden text-xs font-bold uppercase tracking-[0.14em] text-[#F97316] sm:block">
                  {action}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </Reveal>

      <section>
        <Reveal>
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.20em] text-[#F97316]">
                Stories and ideas
              </p>
              <h2 className="mt-2 text-2xl font-bold text-[#3D2418]">For your next meal</h2>
            </div>
            <Link to="/dashboard/recipes" className="text-sm font-semibold text-[#F97316]">
              View recipes
            </Link>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {NEWS.map((item, index) => (
            <ImageCard key={item.title} {...item} delay={`${index * 0.08}s`} />
          ))}
        </div>
      </section>
    </div>
  )
}

function Orders() {
  return (
    <section className="flex flex-col gap-5">
      {ORDERS.map((order, index) => (
        <Reveal key={order.id} delay={`${index * 0.06}s`}>
          <article className="rounded-lg border border-[#F0EBE3] bg-white p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-lg font-bold text-[#3D2418]">Order {order.id}</p>
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${
                    order.status === 'Preparing'
                      ? 'bg-[#FFF1E8] text-[#F97316]'
                      : 'bg-[#EAF0E4] text-[#425A32]'
                  }`}>
                    {order.status}
                  </span>
                </div>
                <p className="mt-2 text-sm text-[#8B7A6B]">{order.date}</p>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-[#6B625B]">
                <ClockIcon className="h-5 w-5 text-[#F97316]" />
                {order.eta}
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-4 border-t border-[#F0EBE3] pt-5 sm:grid-cols-[1fr_auto_auto] sm:items-center">
              <div>
                <p className="font-bold text-[#3D2418]">{order.item}</p>
                <p className="mt-1 text-sm text-[#6B625B]">{order.detail}</p>
              </div>
              <p className="text-sm font-semibold text-[#3D2418]">{order.total}</p>
              <button type="button" className="rounded-lg border border-[#D8C8B5] px-4 py-2 text-sm font-semibold text-[#3D2418] transition hover:border-[#F97316] hover:text-[#F97316]">
                Details
              </button>
            </div>
          </article>
        </Reveal>
      ))}
    </section>
  )
}

function Recipes() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {RECIPES.map((recipe, index) => (
        <Reveal key={recipe.title} delay={`${index * 0.08}s`}>
          <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-[#F0EBE3] bg-white">
            <div className="relative aspect-[16/11] overflow-hidden bg-[#F3E6CF]">
              <img src={recipe.image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <button
                type="button"
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#F97316] shadow-sm"
                aria-label={`Save ${recipe.title}`}
                title="Save recipe"
              >
                <HeartIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-1 flex-col gap-3 p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#F97316]">
                  {recipe.tag}
                </p>
                <p className="text-xs font-semibold text-[#8B7A6B]">{recipe.time}</p>
              </div>
              <h3 className="text-lg font-bold leading-snug text-[#3D2418]">{recipe.title}</h3>
              <p className="text-sm leading-relaxed text-[#6B625B]">{recipe.body}</p>
            </div>
          </article>
        </Reveal>
      ))}
    </section>
  )
}

function Notifications() {
  return (
    <section className="flex flex-col gap-4">
      {NOTIFICATIONS.map(({ title, body, time, icon: Icon }, index) => (
        <Reveal key={title} delay={`${index * 0.06}s`}>
          <article className="flex gap-4 rounded-lg border border-[#F0EBE3] bg-white p-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#FFF1E8]">
              <Icon className="h-5 w-5 text-[#F97316]" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <p className="font-bold text-[#3D2418]">{title}</p>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9B8D80]">{time}</p>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[#6B625B]">{body}</p>
            </div>
          </article>
        </Reveal>
      ))}
    </section>
  )
}

function Profile() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Reveal>
        <form className="rounded-lg border border-[#F0EBE3] bg-white p-6" onSubmit={(event) => event.preventDefault()}>
          <p className="text-lg font-bold text-[#3D2418]">Account details</p>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ['First name', 'Amara'],
              ['Last name', 'Okafor'],
              ['Email', 'amara@example.com'],
              ['Phone', '+44 20 0000 0000'],
            ].map(([label, value]) => (
              <label key={label} className="flex flex-col gap-2 text-sm font-semibold text-[#3D2418]">
                {label}
                <input
                  defaultValue={value}
                  className="rounded-lg border border-[#E8DDD0] bg-[#FFFDF9] px-4 py-3 text-sm font-normal outline-none transition focus:border-[#F97316]"
                />
              </label>
            ))}
          </div>
          <button type="submit" className="mt-6 rounded-lg bg-[#F97316] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#EA580C]">
            Save changes
          </button>
        </form>
      </Reveal>

      <Reveal delay="0.08s">
        <div className="rounded-lg border border-[#F0EBE3] bg-white p-6">
          <p className="text-lg font-bold text-[#3D2418]">Preferences</p>
          <div className="mt-5 flex flex-col gap-4">
            {[
              ['Recipe ideas', 'Send quick recipes and cooking notes.'],
              ['Order updates', 'Notify me when my order changes status.'],
              ['Sourcing stories', 'Share harvest and farmer updates.'],
            ].map(([title, body], index) => (
              <label key={title} className="flex items-start gap-3 rounded-lg border border-[#F0EBE3] bg-[#FAFAF7] p-4">
                <input
                  type="checkbox"
                  defaultChecked={index !== 2}
                  className="mt-1 h-4 w-4 rounded border-[#D8C8B5] text-[#F97316]"
                />
                <span>
                  <span className="block text-sm font-bold text-[#3D2418]">{title}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-[#6B625B]">{body}</span>
                </span>
              </label>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay="0.14s" className="lg:col-span-2">
        <div className="grid grid-cols-1 gap-5 rounded-lg border border-[#F0EBE3] bg-white p-6 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-lg font-bold text-[#3D2418]">Delivery address</p>
            <div className="mt-4 flex items-start gap-3 text-sm leading-relaxed text-[#6B625B]">
              <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#F97316]" />
              <span>
                12 Market Lane
                <br />
                London
                <br />
                United Kingdom
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-lg font-bold text-[#3D2418]">Account health</p>
            {[
              ['Email verified', CheckCircleIcon],
              ['Notifications active', BellIcon],
              ['Recipe preferences saved', SparklesIcon],
            ].map(([label, Icon]) => (
              <div key={label} className="flex items-center gap-3 text-sm font-semibold text-[#3D2418]">
                <Icon className="h-5 w-5 text-[#7DA267]" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}

function SectionContent({ active }) {
  if (active === 'orders') return <Orders />
  if (active === 'recipes') return <Recipes />
  if (active === 'notifications') return <Notifications />
  if (active === 'profile') return <Profile />
  return <Overview />
}

export default function Dashboard() {
  const { pathname } = useLocation()
  const active = currentSection(pathname)
  const current = NAV_ITEMS.find((item) => item.id === active) || NAV_ITEMS[0]

  return (
    <>
      <ScrollTop />
      <main className="min-h-screen bg-[#FAFAF7] pt-[104px]">
        <section className="border-b border-[#F0EBE3] bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 lg:py-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.20em] text-[#F97316]">
                  AchaBox account
                </p>
                <h1 className="mt-3 text-3xl font-bold leading-tight text-[#3D2418] lg:text-4xl">
                  {current.label === 'Dashboard' ? 'Welcome back, Amara.' : current.label}
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#6B625B] lg:text-base">
                  Keep up with your orders, recipes, sourcing stories, and account details in
                  one calm place.
                </p>
              </div>
              <div className="flex items-center gap-3 rounded-full border border-[#F0EBE3] bg-[#FAFAF7] px-4 py-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F97316] text-sm font-bold text-white">
                  AO
                </span>
                <span>
                  <span className="block text-sm font-bold text-[#3D2418]">Amara Okafor</span>
                  <span className="block text-xs text-[#8B7A6B]">Member since 2026</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto grid grid-cols-1 gap-8 px-6 py-10 lg:grid-cols-[250px_1fr] lg:px-8 lg:py-12">
          <AccountNav active={active} />
          <SectionContent active={active} />
        </section>
      </main>
    </>
  )
}
