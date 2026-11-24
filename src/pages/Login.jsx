import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { EnvelopeIcon, LockClosedIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import BrandLogo from '../components/BrandLogo'

function ScrollTop() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return null
}

function InputField({ label, type: initialType, id, placeholder, icon: Icon, value, onChange, error }) {
  const [showPass, setShowPass] = useState(false)
  const isPassword = initialType === 'password'
  const type = isPassword && showPass ? 'text' : initialType

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[#3D2418] text-sm font-semibold">
        {label}
      </label>
      <div className={`relative flex items-center border rounded-xl transition-all duration-200 ${
        error
          ? 'border-red-400 bg-red-50'
          : 'border-[#E8E0D5] bg-white focus-within:border-[#F97316] focus-within:ring-3 focus-within:ring-[#F97316]/10'
      }`}>
        <Icon className="absolute left-4 w-4.5 h-4.5 text-[#B0A89E] pointer-events-none" />
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete={isPassword ? 'current-password' : 'email'}
          className="w-full pl-11 pr-11 py-3.5 text-sm text-[#3D2418] placeholder:text-[#C0B8B0] bg-transparent rounded-xl outline-none"
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPass(v => !v)}
            className="absolute right-4 text-[#B0A89E] hover:text-[#3D2418] transition-colors duration-150"
            aria-label={showPass ? 'Hide password' : 'Show password'}
          >
            {showPass ? <EyeSlashIcon className="w-4.5 h-4.5" /> : <EyeIcon className="w-4.5 h-4.5" />}
          </button>
        )}
      </div>
      {error && <p className="text-red-500 text-xs mt-0.5">{error}</p>}
    </div>
  )
}

export default function Login() {
  const navigate = useNavigate()
  const [form, setForm]       = useState({ email: '', password: '' })
  const [errors, setErrors]   = useState({})
  const [loading, setLoading] = useState(false)
  const [done, setDone]       = useState(false)

  function update(field) {
    return e => {
      setForm(prev => ({ ...prev, [field]: e.target.value }))
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  function validate() {
    const errs = {}
    if (!form.email) errs.email = 'Email is required.'
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Enter a valid email address.'
    if (!form.password) errs.password = 'Password is required.'
    else if (form.password.length < 6) errs.password = 'Password must be at least 6 characters.'
    return errs
  }

  function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setDone(true)
      setTimeout(() => navigate('/dashboard'), 700)
    }, 1600)
  }

  return (
    <>
      <ScrollTop />
      <div className="min-h-screen bg-[#FAFAF7] flex items-center justify-center px-6 pt-[104px] pb-16">
        <div className="w-full max-w-[420px] flex flex-col gap-8">

          {/* Logo */}
          <Link to="/" className="mx-auto w-fit text-[#3D2418]">
            <BrandLogo className="h-12" />
          </Link>

          {/* Card */}
          <div className="bg-white border border-[#F0EBE3] rounded-2xl p-8 flex flex-col gap-6 shadow-sm">

            {/* Header */}
            <div className="flex flex-col gap-1">
              <h1 className="text-[#3D2418] font-bold text-2xl tracking-tight">Sign in</h1>
              <p className="text-[#6B625B] text-sm">
                Don't have an account?{' '}
                <Link to="/register" className="text-[#F97316] font-semibold hover:text-[#EA580C] transition-colors duration-150">
                  Create one free
                </Link>
              </p>
            </div>

            {done ? (
              <div className="flex flex-col items-center gap-4 py-8 text-center">
                <div className="w-14 h-14 rounded-full bg-[#EAF0E4] flex items-center justify-center">
                  <svg className="w-7 h-7 text-[#7DA267]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-[#3D2418] font-bold text-lg">You're in.</p>
                <p className="text-[#6B625B] text-sm">Redirecting you to your account…</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

                <InputField
                  label="Email address"
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  icon={EnvelopeIcon}
                  value={form.email}
                  onChange={update('email')}
                  error={errors.email}
                />

                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-[#3D2418] text-sm font-semibold">Password</label>
                    <a href="#" className="text-[#F97316] text-xs font-semibold hover:text-[#EA580C] transition-colors duration-150">
                      Forgot password?
                    </a>
                  </div>
                  <div className={`relative flex items-center border rounded-xl transition-all duration-200 ${
                    errors.password
                      ? 'border-red-400 bg-red-50'
                      : 'border-[#E8E0D5] bg-white focus-within:border-[#F97316] focus-within:ring-3 focus-within:ring-[#F97316]/10'
                  }`}>
                    <LockClosedIcon className="absolute left-4 w-4.5 h-4.5 text-[#B0A89E] pointer-events-none" />
                    <input
                      id="password"
                      type="password"
                      placeholder="Your password"
                      value={form.password}
                      onChange={update('password')}
                      autoComplete="current-password"
                      className="w-full pl-11 pr-4 py-3.5 text-sm text-[#3D2418] placeholder:text-[#C0B8B0] bg-transparent rounded-xl outline-none"
                    />
                  </div>
                  {errors.password && <p className="text-red-500 text-xs mt-0.5">{errors.password}</p>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2.5 bg-[#F97316] hover:bg-[#EA580C] disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold text-base py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 mt-1"
                >
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Signing in…
                    </>
                  ) : 'Sign in'}
                </button>

                <div className="flex items-center gap-3">
                  <div className="flex-1 h-px bg-[#E8E0D5]" />
                  <span className="text-[#B0A89E] text-xs">or continue with</span>
                  <div className="flex-1 h-px bg-[#E8E0D5]" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      name: 'Google',
                      icon: (
                        <svg className="w-4 h-4" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                      ),
                    },
                    {
                      name: 'Facebook',
                      icon: (
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#1877F2">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                        </svg>
                      ),
                    },
                  ].map(({ name, icon }) => (
                    <button
                      key={name}
                      type="button"
                      className="flex items-center justify-center gap-2.5 border border-[#E8E0D5] bg-white hover:border-[#D4C4B0] text-[#3D2418] text-sm font-medium py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                    >
                      {icon}
                      {name}
                    </button>
                  ))}
                </div>

              </form>
            )}
          </div>

          {/* Footer note */}
          <p className="text-[#B0A89E] text-xs text-center leading-relaxed">
            By signing in you agree to our{' '}
            <a href="#" className="underline hover:text-[#6B625B] transition-colors duration-150">Terms of Service</a>
            {' '}and{' '}
            <a href="#" className="underline hover:text-[#6B625B] transition-colors duration-150">Privacy Policy</a>.
          </p>

        </div>
      </div>
    </>
  )
}
