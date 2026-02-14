import './App.css'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/home/home'
import About from './pages/about/about'
import Contact from './pages/contact/contact'
import Media from './pages/media/media'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import ScrollProgress from './components/ScrollProgress'
import Notfound from './pages/notfound'




function App() {
  return (
    
    <>
      <ScrollProgress />
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/media" element={<Media />} />
                  {/* Catch-all for 404 */}
          <Route path="*" element={<Notfound />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
