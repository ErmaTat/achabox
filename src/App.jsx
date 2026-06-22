import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import AnnouncementBar from './components/AnnouncementBar'
import NavHeader from './components/NavHeader'
import Footer from './components/Footer'
import PageLoader from './components/PageLoader'
// import AchaFacts from './components/AchaFacts'

// Pages
import Home from './pages/Home'
import OurStory from './pages/OurStory'
import Login from './pages/Login'
import Register from './pages/Register'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import Admin from './pages/Admin'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <PageLoader visible={loading} />
      <AnnouncementBar />
      <NavHeader />
      <Routes>
        <Route path="/"           element={<Home />} />
        <Route path="/our-story"  element={<OurStory />} />
        <Route path="/contact"    element={<Contact />} />
        <Route path="/dashboard"  element={<Dashboard />} />
        <Route path="/dashboard/:section" element={<Dashboard />} />
        <Route path="/admin"      element={<Admin />} />
        <Route path="/admin/:section" element={<Admin />} />
        <Route path="/login"      element={<Login />} />
        <Route path="/register"   element={<Register />} />
      </Routes>
      <Footer />
      {/* <AchaFacts /> */}
    </>
  )
}
