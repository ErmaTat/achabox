import { useState, useEffect } from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import AnnouncementBar from './components/AnnouncementBar'
import NavHeader from './components/NavHeader'
import Footer from './components/Footer'
import PageLoader from './components/PageLoader'
// import AchaFacts from './components/AchaFacts'

// Pages
import Home from './pages/Home'
import OurStory from './pages/OurStory'
import Contact from './pages/Contact'

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
        <Route path="/dashboard/*" element={<Navigate to="/" replace />} />
        <Route path="/admin/*"     element={<Navigate to="/" replace />} />
        <Route path="/login"       element={<Navigate to="/" replace />} />
        <Route path="/register"    element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      {/* <AchaFacts /> */}
    </>
  )
}
