import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  CheckCircleIcon,
  EnvelopeIcon,
  EyeIcon,
  EyeSlashIcon,
  LockClosedIcon,
  PhoneIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import BrandLogo from '../components/BrandLogo'
import marketGrainsImage from '../assets/story/market-grains.webp'
import healthyGrainBowlImage from '../assets/story/healthy-grain-bowl.webp'

function ScrollTop() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return null
}

function Field({
  label,
  id,
  type: initialType = 'text',
  placeholder,
  icon: Icon,
  value,
  onChange,
  error,
  required = false,
  autoComplete,
}) {
  const [showPass, setShowPass] = useState(false)
  const isPassword = initialType === 'password'
  const type = isPassword && showPass ? 'text' : initialType

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between gap-3">
        <label htmlFor={id} className="text-sm font-semibold text-[#3D2418]">
          {label}
        </label>
        {required && (
          <span className="rounded-full bg-[#FFF1E8] px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#F97316]">
            Required
          </span>
        )}
      </div>
      <div className={`relative flex items-center rounded-xl border transition-all duration-200 ${
        error
          ? 'border-red-400 bg-red-50'
          : 'border-[#E8E0D5] bg-white focus-within:border-[#F97316] focus-within:ring-3 focus-within:ring-[#F97316]/10'
      }`}>
        <Icon className="pointer-events-none absolute left-4 h-4.5 w-4.5 text-[#B0A89E]" />
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          autoComplete={autoComplete}
          className="w-full rounded-xl bg-transparent py-3.5 pl-11 pr-11 text-sm text-[#3D2418] outline-none placeholder:text-[#C0B8B0]"
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPass((shown) => !shown)}
            className="absolute right-4 text-[#B0A89E] transition-colors duration-150 hover:text-[#3D2418]"
            aria-label={showPass ? 'Hide password' : 'Show password'}
          >
            {showPass ? <EyeSlashIcon className="h-4.5 w-4.5" /> : <EyeIcon className="h-4.5 w-4.5" />}
          </button>
        )}
      </div>
      {error && <p className="mt-0.5 text-xs text-red-500">{error}</p>}
    </div>
  )
}

export default function Register() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  function update(field) {
    return (event) => {
      setForm((current) => ({ ...current, [field]: event.target.value }))
      setErrors((current) => ({ ...current, [field]: '' }))
    }
  }

  function validate() {
    const nextErrors = {}

    if (!form.firstName.trim()) nextErrors.firstName = 'First name is required.'
    if (!form.lastName.trim()) nextErrors.lastName = 'Last name is required.'
    if (!form.email.trim()) nextErrors.email = 'Email is required.'
    else if (!/\S+@\S+\.\S+/.test(form.email)) nextErrors.email = 'Enter a valid email address.'
    if (!form.phone.trim()) nextErrors.phone = 'Phone number is required.'
    else if (!/^[+()\d\s-]{7,}$/.test(form.phone)) nextErrors.phone = 'Enter a valid phone number.'
    if (!form.password) nextErrors.password = 'Password is required.'
    else if (form.password.length < 6) nextErrors.password = 'Password must be at least 6 characters.'

    return nextErrors
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validate()
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors)
      return
    }

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setDone(true)
      setTimeout(() => navigate('/dashboard'), 850)
    }, 1500)
  }

  return (
    <>
      <ScrollTop />
      <main className="min-h-screen bg-[#FAFAF7] px-6 pb-16 pt-[128px]">
        <section className="mx-auto grid w-full max-w-6xl grid-cols-1 overflow-hidden rounded-2xl border border-[#F0EBE3] bg-white shadow-[0_24px_70px_rgba(61,36,24,0.08)] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative hidden min-h-[720px] overflow-hidden bg-[#3D2418] lg:block">
            <img
              src={marketGrainsImage}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-[0.78]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3D2418]/88 via-[#3D2418]/36 to-transparent" />
            <div className="absolute left-8 right-8 top-8 flex items-center justify-between">
              <Link to="/" className="text-white">
                <BrandLogo className="h-12" />
              </Link>
              <span className="rounded-full bg-white/12 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white/72 backdrop-blur">
                Member account
              </span>
            </div>
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.20em] text-[#F97316]">
                Start your grain room
              </p>
              <h1 className="mt-4 max-w-md text-4xl font-bold leading-tight text-white">
                Save recipes, follow orders, and keep AchaBox close.
              </h1>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  'Order tracking',
                  'Recipe ideas',
                  'Harvest notes',
                  'Profile preferences',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm font-semibold text-white/80 backdrop-blur">
                    <CheckCircleIcon className="h-4 w-4 shrink-0 text-[#F97316]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-12">
            <div className="mx-auto flex max-w-xl flex-col gap-8">
              <div className="flex flex-col gap-2">
                <Link to="/" className="w-fit text-[#3D2418] lg:hidden">
                  <BrandLogo className="h-12" />
                </Link>
                <p className="text-[10px] font-bold uppercase tracking-[0.20em] text-[#F97316]">
                  Create account
                </p>
                <h1 className="text-3xl font-bold tracking-tight text-[#3D2418]">
                  Join AchaBox
                </h1>
                <p className="text-sm leading-relaxed text-[#6B625B]">
                  Email and phone number are required so we can manage order updates,
                  delivery communication, and account security.
                </p>
              </div>

              {done ? (
                <div className="flex flex-col items-center gap-4 rounded-xl border border-[#EAF0E4] bg-[#FAFFF7] px-6 py-12 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF0E4]">
                    <CheckCircleIcon className="h-8 w-8 text-[#7DA267]" />
                  </div>
                  <p className="text-lg font-bold text-[#3D2418]">Account created.</p>
                  <p className="text-sm text-[#6B625B]">Taking you to your dashboard...</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field
                      label="First name"
                      id="firstName"
                      placeholder="Amara"
                      icon={UserIcon}
                      value={form.firstName}
                      onChange={update('firstName')}
                      error={errors.firstName}
                      required
                      autoComplete="given-name"
                    />
                    <Field
                      label="Last name"
                      id="lastName"
                      placeholder="Okafor"
                      icon={UserIcon}
                      value={form.lastName}
                      onChange={update('lastName')}
                      error={errors.lastName}
                      required
                      autoComplete="family-name"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field
                      label="Email address"
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      icon={EnvelopeIcon}
                      value={form.email}
                      onChange={update('email')}
                      error={errors.email}
                      required
                      autoComplete="email"
                    />
                    <Field
                      label="Phone number"
                      id="phone"
                      type="tel"
                      placeholder="+44 20 0000 0000"
                      icon={PhoneIcon}
                      value={form.phone}
                      onChange={update('phone')}
                      error={errors.phone}
                      required
                      autoComplete="tel"
                    />
                  </div>

                  <Field
                    label="Password"
                    id="password"
                    type="password"
                    placeholder="Create a password"
                    icon={LockClosedIcon}
                    value={form.password}
                    onChange={update('password')}
                    error={errors.password}
                    required
                    autoComplete="new-password"
                  />

                  <label className="flex items-start gap-3 rounded-xl border border-[#F0EBE3] bg-[#FAFAF7] p-4 text-sm leading-relaxed text-[#6B625B]">
                    <input
                      type="checkbox"
                      className="mt-1 h-4 w-4 rounded border-[#D8C8B5] text-[#F97316]"
                      defaultChecked
                    />
                    <span>
                      Send me order updates, recipes, and harvest notes from AchaBox.
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-1 flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#F97316] py-3.5 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#EA580C] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Creating account...
                      </>
                    ) : 'Create account'}
                  </button>
                </form>
              )}

              <div className="grid grid-cols-1 gap-4 border-t border-[#F0EBE3] pt-6 sm:grid-cols-[1fr_auto] sm:items-center">
                <p className="text-sm text-[#6B625B]">
                  Already have an account?{' '}
                  <Link to="/login" className="font-semibold text-[#F97316] transition-colors hover:text-[#EA580C]">
                    Sign in
                  </Link>
                </p>
                <div className="hidden h-16 w-24 overflow-hidden rounded-lg bg-[#F3E6CF] sm:block">
                  <img src={healthyGrainBowlImage} alt="" className="h-full w-full object-cover" />
                </div>
              </div>

              <p className="text-xs leading-relaxed text-[#B0A89E]">
                By creating an account you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
