import React from 'react'
import Header from './Components/Header/Header'
import { Home } from './Pages/Home/Home'
import WhyUs from './Pages/WhyUS/WhyUs'
import Footer from './Pages/Footer/Footer'
import Services from './Pages/Services/Services'
import About from './Pages/About/About'
import Products from './Pages/Products/Products'
import Contact from './Pages/Contact/Contact'
import { Route, Router, Routes } from 'react-router-dom'
import ApplicationDevelopment from './Pages/ApplicationDevelopment/ApplicationDevelopment'
import TestingServices from './Pages/TestingServices/TestingServices'
import ServicesPage from './Pages/ServicesPage/ServicesPage'

const HomePage = () => {
  return(
    <>
      <Home />
      <Services />
      <WhyUs />
    </>
  )
}

const App = () => {
  return (
      <div className="appContainer">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/testingServices" element={<TestingServices />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/application" element={<ApplicationDevelopment />} />
        </Routes>
        <Footer />
      </div>
  )
}

export default App