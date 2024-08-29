import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import Work from './components/Work/Work'
import Price from './components/Pricing/Price'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <Features />
        <Work />
        <Price />
        <Testimonials />
        <Footer />
      </div>
    </>
  )
}

export default App