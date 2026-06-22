import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  ArrowTrendingUpIcon,
  BanknotesIcon,
  BookOpenIcon,
  CheckCircleIcon,
  ClockIcon,
  CreditCardIcon,
  CubeIcon,
  HomeIcon,
  PhotoIcon,
  PlusIcon,
  ShoppingBagIcon,
  TruckIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import fonioWinnowingImage from '../assets/story/fonio-winnowing.webp'
import healthyGrainBowlImage from '../assets/story/healthy-grain-bowl.webp'
import marketGrainsImage from '../assets/story/market-grains.webp'
import milletFieldImage from '../assets/story/millet-field-ghana.webp'
import wholeGrainBowlsImage from '../assets/story/whole-grain-bowls.webp'

const ADMIN_NAV = [
  { id: 'overview', label: 'Overview', path: '/admin', icon: HomeIcon },
  { id: 'flipbook', label: 'Flipbook', path: '/admin/flipbook', icon: PhotoIcon },
  { id: 'recipes', label: 'Recipes', path: '/admin/recipes', icon: BookOpenIcon },
  { id: 'users', label: 'Users', path: '/admin/users', icon: UserGroupIcon },
  { id: 'orders', label: 'Orders', path: '/admin/orders', icon: ShoppingBagIcon },
  { id: 'payments', label: 'Payments', path: '/admin/payments', icon: CreditCardIcon },
]

const KPIS = [
  { label: 'Revenue', value: '$18,420', change: '+18.4%', icon: BanknotesIcon },
  { label: 'Orders', value: '428', change: '+12.1%', icon: ShoppingBagIcon },
  { label: 'Customers', value: '3,842', change: '+9.8%', icon: UserGroupIcon },
  { label: 'Conversion', value: '4.7%', change: '+0.6%', icon: ArrowTrendingUpIcon },
]

const SALES = [
  { label: 'Jan', revenue: 8.4, orders: 96 },
  { label: 'Feb', revenue: 10.2, orders: 118 },
  { label: 'Mar', revenue: 9.8, orders: 111 },
  { label: 'Apr', revenue: 13.6, orders: 156 },
  { label: 'May', revenue: 18.4, orders: 214 },
  { label: 'Jun', revenue: 17.2, orders: 204 },
]

const CHANNELS = [
  { label: 'Direct', value: 42 },
  { label: 'Social', value: 28 },
  { label: 'Wholesale', value: 18 },
  { label: 'Retail', value: 12 },
]

const FLIPBOOK_PAGES = [
  { page: 1, title: 'Cover', status: 'Published', updated: 'May 22', image: marketGrainsImage },
  { page: 2, title: 'The familiar grain', status: 'Published', updated: 'May 21', image: wholeGrainBowlsImage },
  { page: 3, title: 'Food and family', status: 'Draft', updated: 'May 20', image: healthyGrainBowlImage },
  { page: 4, title: 'West Africa origin', status: 'Published', updated: 'May 18', image: fonioWinnowingImage },
  { page: 5, title: 'Climate solution', status: 'Review', updated: 'May 17', image: milletFieldImage },
]

const RECIPES = [
  { title: 'Warm Acha Breakfast Bowl', category: 'Breakfast', time: '8 min', status: 'Live', image: wholeGrainBowlsImage },
  { title: 'Herby Fonio Grain Salad', category: 'Lunch', time: '12 min', status: 'Live', image: healthyGrainBowlImage },
  { title: 'Sahel Spiced Dinner Base', category: 'Dinner', time: '18 min', status: 'Draft', image: marketGrainsImage },
]

const USERS = [
  { name: 'Amara Okafor', email: 'amara@example.com', role: 'Customer', orders: 3, joined: 'May 2026' },
  { name: 'Daniel Reed', email: 'daniel@example.com', role: 'Wholesale', orders: 12, joined: 'Apr 2026' },
  { name: 'Nia Carter', email: 'nia@example.com', role: 'Customer', orders: 1, joined: 'Apr 2026' },
  { name: 'Maya Bello', email: 'maya@example.com', role: 'Admin', orders: 0, joined: 'Mar 2026' },
]

const ORDERS = [
  { id: 'AB-2048', customer: 'Amara Okafor', status: 'Preparing', total: '$34.00', fulfilment: 'Pack today' },
  { id: 'AB-2047', customer: 'Daniel Reed', status: 'Wholesale', total: '$480.00', fulfilment: 'Invoice sent' },
  { id: 'AB-2046', customer: 'Nia Carter', status: 'Shipped', total: '$24.00', fulfilment: 'In transit' },
  { id: 'AB-2045', customer: 'Lena Smith', status: 'Delivered', total: '$58.00', fulfilment: 'Complete' },
]

const PAYMENTS = [
  { id: 'PAY-7102', source: 'Stripe', status: 'Paid', amount: '$34.00', date: 'May 22' },
  { id: 'PAY-7101', source: 'Manual invoice', status: 'Pending', amount: '$480.00', date: 'May 22' },
  { id: 'PAY-7098', source: 'PayPal', status: 'Paid', amount: '$24.00', date: 'May 21' },
  { id: 'PAY-7094', source: 'Stripe', status: 'Refunded', amount: '$18.00', date: 'May 20' },
]

function ScrollTop() {
  const { pathname } = useLocation()

  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function activeSection(pathname) {
  return pathname.split('/')[2] || 'overview'
}

function Panel({ title, eyebrow, action, children, className = '' }) {
  return (
    <section className={`min-w-0 rounded-lg border border-[#E7DFD4] bg-white ${className}`}>
      {(title || eyebrow || action) && (
        <div className="flex flex-col gap-3 border-b border-[#F0EBE3] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            {eyebrow && (
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#F97316]">
                {eyebrow}
              </p>
            )}
            {title && <h2 className="mt-1 text-lg font-bold text-[#3D2418]">{title}</h2>}
          </div>
          {action}
        </div>
      )}
      <div className="p-5">{children}</div>
    </section>
  )
}

function AdminNav({ active }) {
  return (
    <aside className="lg:sticky lg:top-[132px] h-fit">
      <nav className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1">
        {ADMIN_NAV.map(({ id, label, path, icon: Icon }) => (
          <Link
            key={id}
            to={path}
            className={`flex items-center gap-3 rounded-lg border px-4 py-3 text-sm font-semibold transition duration-200 ${
              active === id
                ? 'border-[#F97316] bg-[#FFF1E8] text-[#3D2418]'
                : 'border-[#E7DFD4] bg-white text-[#6B625B] hover:border-[#F97316]/50 hover:text-[#3D2418]'
            }`}
          >
            <Icon className="h-5 w-5 shrink-0 text-[#F97316]" />
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}

function MetricCard({ label, value, change, icon: Icon }) {
  return (
    <article className="rounded-lg border border-[#E7DFD4] bg-white p-5">
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#FFF1E8]">
          <Icon className="h-5 w-5 text-[#F97316]" />
        </span>
        <span className="rounded-full bg-[#EAF0E4] px-2.5 py-1 text-xs font-bold text-[#425A32]">
          {change}
        </span>
      </div>
      <p className="mt-5 text-sm font-semibold text-[#7A736C]">{label}</p>
      <p className="mt-1 text-3xl font-bold tracking-tight text-[#3D2418]">{value}</p>
    </article>
  )
}

function RevenueChart() {
  const max = Math.max(...SALES.map((item) => item.revenue))
  const points = SALES.map((item, index) => {
    const x = (index / (SALES.length - 1)) * 100
    const y = 94 - (item.revenue / max) * 78
    return `${x},${y}`
  }).join(' ')

  return (
    <div>
      <svg viewBox="0 0 100 100" className="h-64 w-full overflow-visible">
        {[20, 40, 60, 80].map((y) => (
          <line key={y} x1="0" x2="100" y1={y} y2={y} stroke="#F0EBE3" strokeWidth="0.6" />
        ))}
        <polyline points={points} fill="none" stroke="#F97316" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        {SALES.map((item, index) => {
          const x = (index / (SALES.length - 1)) * 100
          const y = 94 - (item.revenue / max) * 78
          return <circle key={item.label} cx={x} cy={y} r="2.5" fill="#FFFFFF" stroke="#F97316" strokeWidth="1.4" />
        })}
      </svg>
      <div className="grid grid-cols-6 gap-2 text-center text-xs font-semibold text-[#8B7A6B]">
        {SALES.map((item) => <span key={item.label}>{item.label}</span>)}
      </div>
    </div>
  )
}

function ChannelBars() {
  return (
    <div className="flex flex-col gap-4">
      {CHANNELS.map((item) => (
        <div key={item.label}>
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-semibold text-[#3D2418]">{item.label}</span>
            <span className="font-bold text-[#F97316]">{item.value}%</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-[#F3E6CF]">
            <div className="h-full rounded-full bg-[#F97316]" style={{ width: `${item.value}%` }} />
          </div>
        </div>
      ))}
    </div>
  )
}

function PaymentDonut() {
  return (
    <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
      <div
        className="grid h-36 w-36 shrink-0 place-items-center rounded-full"
        style={{
          background: 'conic-gradient(#F97316 0 58%, #7DA267 58% 78%, #D4A96A 78% 91%, #E8DDD0 91% 100%)',
        }}
      >
        <div className="grid h-20 w-20 place-items-center rounded-full bg-white text-center">
          <span className="text-xl font-bold text-[#3D2418]">92%</span>
        </div>
      </div>
      <div className="grid gap-2 text-sm">
        {[
          ['Stripe', '#F97316', '58%'],
          ['PayPal', '#7DA267', '20%'],
          ['Invoice', '#D4A96A', '13%'],
          ['Other', '#E8DDD0', '9%'],
        ].map(([label, color, value]) => (
          <div key={label} className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: color }} />
            <span className="min-w-16 text-[#6B625B]">{label}</span>
            <span className="font-bold text-[#3D2418]">{value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function StatusPill({ status }) {
  const styles = {
    Published: 'bg-[#EAF0E4] text-[#425A32]',
    Live: 'bg-[#EAF0E4] text-[#425A32]',
    Paid: 'bg-[#EAF0E4] text-[#425A32]',
    Delivered: 'bg-[#EAF0E4] text-[#425A32]',
    Draft: 'bg-[#FFF1E8] text-[#F97316]',
    Preparing: 'bg-[#FFF1E8] text-[#F97316]',
    Pending: 'bg-[#FFF1E8] text-[#F97316]',
    Review: 'bg-[#F3E6CF] text-[#6B4D2E]',
    Shipped: 'bg-[#EEF5FF] text-[#3260A8]',
    Wholesale: 'bg-[#F2EFFA] text-[#6342A8]',
    Refunded: 'bg-[#FCE8E8] text-[#B63D3D]',
  }

  return (
    <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${styles[status] || 'bg-[#F3E6CF] text-[#6B625B]'}`}>
      {status}
    </span>
  )
}

function DataTable({ columns, rows }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[680px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-[#F0EBE3] text-[10px] font-bold uppercase tracking-[0.16em] text-[#9B8D80]">
            {columns.map((column) => <th key={column} className="px-3 py-3">{column}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.key} className="border-b border-[#F6F0E8] last:border-0">
              {row.cells.map((cell, index) => <td key={index} className="px-3 py-4 align-middle">{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Overview() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {KPIS.map((item) => <MetricCard key={item.label} {...item} />)}
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.35fr_0.65fr]">
        <Panel title="Revenue Trend" eyebrow="Analytics">
          <RevenueChart />
        </Panel>
        <div className="grid gap-6">
          <Panel title="Sales Channels" eyebrow="Attribution">
            <ChannelBars />
          </Panel>
          <Panel title="Payment Mix" eyebrow="Finance">
            <PaymentDonut />
          </Panel>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_0.7fr]">
        <Panel title="Operations Queue" eyebrow="Today">
          <DataTable
            columns={['Task', 'Owner', 'Priority', 'Due']}
            rows={[
              {
                key: 'pack',
                cells: ['Pack AB-2048 pantry order', 'Fulfilment', <StatusPill status="Preparing" />, 'Today'],
              },
              {
                key: 'invoice',
                cells: ['Follow wholesale invoice AB-2047', 'Finance', <StatusPill status="Pending" />, 'Today'],
              },
              {
                key: 'flipbook',
                cells: ['Review climate page copy', 'Content', <StatusPill status="Review" />, 'Tomorrow'],
              },
            ]}
          />
        </Panel>
        <Panel title="Inventory Snapshot" eyebrow="Stock">
          <div className="grid gap-4">
            {[
              ['Whole natural fonio seeds', 74],
              ['Pantry pack boxes', 38],
              ['Recipe inserts', 61],
            ].map(([label, value]) => (
              <div key={label}>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-semibold text-[#3D2418]">{label}</span>
                  <span className="font-bold text-[#F97316]">{value}%</span>
                </div>
                <div className="h-2.5 rounded-full bg-[#F3E6CF]">
                  <div className="h-full rounded-full bg-[#7DA267]" style={{ width: `${value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  )
}

function FlipbookManager() {
  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.25fr_0.75fr]">
      <Panel
        title="Story Flipbook Pages"
        eyebrow="Content"
        action={
          <button className="inline-flex items-center gap-2 rounded-lg bg-[#F97316] px-4 py-2 text-sm font-semibold text-white">
            <PlusIcon className="h-4 w-4" />
            Add page
          </button>
        }
      >
        <DataTable
          columns={['Page', 'Title', 'Status', 'Updated', 'Preview']}
          rows={FLIPBOOK_PAGES.map((page) => ({
            key: page.title,
            cells: [
              <span className="font-bold text-[#3D2418]">{String(page.page).padStart(2, '0')}</span>,
              <span className="font-semibold text-[#3D2418]">{page.title}</span>,
              <StatusPill status={page.status} />,
              page.updated,
              <img src={page.image} alt="" className="h-12 w-20 rounded-md object-cover" />,
            ],
          }))}
        />
      </Panel>

      <Panel title="Edit Page Data" eyebrow="Selected page">
        <form className="flex flex-col gap-4" onSubmit={(event) => event.preventDefault()}>
          <label className="flex flex-col gap-2 text-sm font-semibold text-[#3D2418]">
            Chapter title
            <input defaultValue="The familiar grain" className="rounded-lg border border-[#E8DDD0] px-4 py-3 outline-none focus:border-[#F97316]" />
          </label>
          <label className="flex flex-col gap-2 text-sm font-semibold text-[#3D2418]">
            Page copy
            <textarea defaultValue="A grain I have always known." rows={5} className="resize-none rounded-lg border border-[#E8DDD0] px-4 py-3 outline-none focus:border-[#F97316]" />
          </label>
          <label className="flex flex-col gap-2 text-sm font-semibold text-[#3D2418]">
            Status
            <select className="rounded-lg border border-[#E8DDD0] px-4 py-3 outline-none focus:border-[#F97316]" defaultValue="Published">
              <option>Published</option>
              <option>Draft</option>
              <option>Review</option>
            </select>
          </label>
          <button className="rounded-lg bg-[#F97316] px-5 py-3 text-sm font-semibold text-white">Save page</button>
        </form>
      </Panel>
    </div>
  )
}

function RecipesManager() {
  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-[0.75fr_1.25fr]">
      <Panel title="Add Recipe" eyebrow="Kitchen">
        <form className="flex flex-col gap-4" onSubmit={(event) => event.preventDefault()}>
          <input placeholder="Recipe title" className="rounded-lg border border-[#E8DDD0] px-4 py-3 outline-none focus:border-[#F97316]" />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <input placeholder="Category" className="rounded-lg border border-[#E8DDD0] px-4 py-3 outline-none focus:border-[#F97316]" />
            <input placeholder="Cook time" className="rounded-lg border border-[#E8DDD0] px-4 py-3 outline-none focus:border-[#F97316]" />
          </div>
          <textarea placeholder="Short description" rows={5} className="resize-none rounded-lg border border-[#E8DDD0] px-4 py-3 outline-none focus:border-[#F97316]" />
          <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#F97316] px-5 py-3 text-sm font-semibold text-white">
            <PlusIcon className="h-4 w-4" />
            Add recipe
          </button>
        </form>
      </Panel>
      <Panel title="Recipe Library" eyebrow="Manage">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {RECIPES.map((recipe) => (
            <article key={recipe.title} className="overflow-hidden rounded-lg border border-[#F0EBE3]">
              <img src={recipe.image} alt="" className="h-32 w-full object-cover" />
              <div className="p-4">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#F97316]">{recipe.category}</p>
                  <StatusPill status={recipe.status} />
                </div>
                <p className="font-bold leading-snug text-[#3D2418]">{recipe.title}</p>
                <p className="mt-2 text-sm text-[#6B625B]">{recipe.time}</p>
              </div>
            </article>
          ))}
        </div>
      </Panel>
    </div>
  )
}

function UsersManager() {
  return (
    <Panel title="User Management" eyebrow="Accounts">
      <DataTable
        columns={['User', 'Role', 'Orders', 'Joined', 'Action']}
        rows={USERS.map((user) => ({
          key: user.email,
          cells: [
            <span>
              <span className="block font-bold text-[#3D2418]">{user.name}</span>
              <span className="text-sm text-[#6B625B]">{user.email}</span>
            </span>,
            <StatusPill status={user.role} />,
            user.orders,
            user.joined,
            <button className="rounded-lg border border-[#D8C8B5] px-3 py-2 text-sm font-semibold text-[#3D2418]">View</button>,
          ],
        }))}
      />
    </Panel>
  )
}

function OrdersManager() {
  return (
    <div className="grid grid-cols-1 gap-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {[
          ['New', 24, CubeIcon],
          ['Preparing', 18, ClockIcon],
          ['Shipped', 42, TruckIcon],
          ['Delivered', 344, CheckCircleIcon],
        ].map(([label, value, Icon]) => (
          <MetricCard key={label} label={label} value={value} change="Today" icon={Icon} />
        ))}
      </div>
      <Panel title="Orders" eyebrow="Fulfilment">
        <DataTable
          columns={['Order', 'Customer', 'Status', 'Total', 'Fulfilment']}
          rows={ORDERS.map((order) => ({
            key: order.id,
            cells: [
              <span className="font-bold text-[#3D2418]">{order.id}</span>,
              order.customer,
              <StatusPill status={order.status} />,
              <span className="font-bold text-[#3D2418]">{order.total}</span>,
              order.fulfilment,
            ],
          }))}
        />
      </Panel>
    </div>
  )
}

function PaymentsManager() {
  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-[0.7fr_1.3fr]">
      <Panel title="Payment Analysis" eyebrow="Finance">
        <PaymentDonut />
        <div className="mt-6 rounded-lg bg-[#FAFAF7] p-4">
          <p className="text-sm font-bold text-[#3D2418]">Next payout</p>
          <p className="mt-1 text-2xl font-bold text-[#F97316]">$4,820.40</p>
          <p className="mt-1 text-sm text-[#6B625B]">Estimated May 24, 2026</p>
        </div>
      </Panel>
      <Panel title="Transactions" eyebrow="Payments">
        <DataTable
          columns={['Payment', 'Source', 'Status', 'Amount', 'Date']}
          rows={PAYMENTS.map((payment) => ({
            key: payment.id,
            cells: [
              <span className="font-bold text-[#3D2418]">{payment.id}</span>,
              payment.source,
              <StatusPill status={payment.status} />,
              <span className="font-bold text-[#3D2418]">{payment.amount}</span>,
              payment.date,
            ],
          }))}
        />
      </Panel>
    </div>
  )
}

function AdminSection({ active }) {
  if (active === 'flipbook') return <FlipbookManager />
  if (active === 'recipes') return <RecipesManager />
  if (active === 'users') return <UsersManager />
  if (active === 'orders') return <OrdersManager />
  if (active === 'payments') return <PaymentsManager />
  return <Overview />
}

export default function Admin() {
  const { pathname } = useLocation()
  const active = activeSection(pathname)
  const current = ADMIN_NAV.find((item) => item.id === active) || ADMIN_NAV[0]

  return (
    <>
      <ScrollTop />
      <main className="min-h-screen overflow-x-hidden bg-[#FAFAF7] pt-[104px]">
        <section className="border-b border-[#E7DFD4] bg-[#2A1610] text-white">
          <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F97316]">Admin control</p>
                <h1 className="mt-3 text-3xl font-bold leading-tight lg:text-4xl">
                  {current.label === 'Overview' ? 'AchaBox Operations' : current.label}
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/62 lg:text-base">
                  Manage content, customers, orders, payments, recipes, and live site storytelling
                  from one operational workspace.
                </p>
              </div>
              <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/8 px-4 py-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F97316] text-sm font-bold text-white">
                  AD
                </span>
                <span>
                  <span className="block text-sm font-bold text-white">Admin Team</span>
                  <span className="block text-xs text-white/45">Full site access</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid min-w-0 max-w-7xl grid-cols-1 gap-8 px-6 py-10 lg:grid-cols-[250px_1fr] lg:px-8 lg:py-12">
          <AdminNav active={active} />
          <div className="min-w-0">
            <AdminSection active={active} />
          </div>
        </section>
      </main>
    </>
  )
}
