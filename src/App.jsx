import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import { Home } from './Pages/Home/Home';
import WhyUs from './Pages/WhyUS/WhyUs';
import Footer from './Pages/Footer/Footer';
import Services from './Pages/Services/Services';
import About from './Pages/About/About';
import Products from './Pages/Products/Products';
import Contact from './Pages/Contact/Contact';
import ApplicationDevelopment from './Pages/ApplicationDevelopment/ApplicationDevelopment';
import TestingServices from './Pages/TestingServices/TestingServices';
import ServicesPage from './Pages/ServicesPage/ServicesPage';

import './index.css'

const HomePage = () => {
  return (
    <>
      <Home />
      <Services />
      <WhyUs />
    </>
  );
};

const App = () => {
  return (
      <div className='appContainer'>
        {/* Background Video */}
        <video autoPlay loop muted className='bgVideo'>
          <source src='../bgVideo.mp4' type="video/mp4" />
          {/* Your browser does not support the video tag. */}
        </video>

        <Header />
        <div className='pageContent'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/testingServices" element={<TestingServices />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/application" element={<ApplicationDevelopment />} />
          </Routes>
        </div>
        <Footer />
      </div>
  );
};

export default App;
