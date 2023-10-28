import React, { useEffect } from 'react'
import Navbar from './component/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Footer from './pages/Footer'
import Services from './pages/Services'
import ErrorPage from './pages/ErrorPage'
import Appointments from './pages/Appointments'

const App = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [location.pathname])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App