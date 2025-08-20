import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Eligibility from './components/Eligibility';
import AdmissionEnquiry from './components/AdmissionEnquiry';
import FAQ from './components/FAQ';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Courses />
      <Eligibility />
      <AdmissionEnquiry />
      <FAQ />
      <About />
      <Footer />
    </div>
  );
}

export default App;