import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToEnquiry = () => {
    const element = document.getElementById('enquiry');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-white pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Medical Admission
              <span className="text-blue-600 block">Guidance</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Your trusted partner in navigating the path to a successful medical career. 
              Expert guidance for all medical and healthcare programs.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToEnquiry}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Contact for Enquiry
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <a
                href="tel:+917888106451"
                className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: +91 78881 06451
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8">
              <img
                src="https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Medical professionals"
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-sm">Students Guided</div>
              </div>
            </div>
            <div className="absolute top-4 left-4 w-72 h-72 bg-blue-100 rounded-full opacity-50 -z-10"></div>
            <div className="absolute bottom-4 right-4 w-48 h-48 bg-blue-200 rounded-full opacity-30 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;