import { Routes, Route } from 'react-router-dom'
import { useState, useRef } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Hakkimizda from './pages/Hakkimizda'
import Baskanlar from './pages/Baskanlar'
import Ortaklarimiz from './pages/Ortaklarimiz'
import Haberler from './pages/Haberler'
import HaberDetay from './pages/HaberDetay'
import Duyurular from './pages/Duyurular'
import Galeri from './pages/Galeri'
import Faaliyetler from './pages/Faaliyetler'
import Iletisim from './pages/Iletisim'
import Kurullar from './pages/Kurullar'
import HaberPopup from './components/HaberPopup'
import ScrollToTop from './components/ScrollToTop'

function MuzikOynatici() {
  const [oynuyor, setOynuyor] = useState(false)
  const [gizli, setGizli] = useState(false)
  const audioRef = useRef(null)

  const toggle = () => {
    if (oynuyor) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setOynuyor(!oynuyor)
  }

  if (gizli) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full shadow-lg text-white text-sm"
      style={{ backgroundColor: 'var(--color-primary-dark)' }}>
      <audio ref={audioRef} src="/nature.mp3" loop />
      <button onClick={toggle} className="text-lg">
        {oynuyor ? '⏸' : '▶️'}
      </button>
      <span className="hidden md:inline">{oynuyor ? 'Müzik Çalıyor' : 'Müzik'}</span>
      <button onClick={() => { audioRef.current.pause(); setGizli(true) }} className="ml-1 opacity-60 hover:opacity-100">
        ✕
      </button>
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--color-bg)' }}>
      <ScrollToTop />
      <HaberPopup />
      <Navbar />
      <MuzikOynatici />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          <Route path="/baskanlar" element={<Baskanlar />} />
          <Route path="/ortaklarimiz" element={<Ortaklarimiz />} />
          <Route path="/haberler" element={<Haberler />} />
          <Route path="/haberler/:slug" element={<HaberDetay />} />
          <Route path="/duyurular" element={<Duyurular />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="/faaliyetler" element={<Faaliyetler />} />
          <Route path="/iletisim" element={<Iletisim />} />
          <Route path="/kurullar" element={<Kurullar />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App