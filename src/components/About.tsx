import React from 'react';
import { Users, Award, BookOpen, Target } from 'lucide-react';

const stats = [
  { label: 'Students Guided', value: '1000+', icon: Users },
  { label: 'Years of Experience', value: '15+', icon: Award },
  { label: 'Partner Colleges', value: '50+', icon: BookOpen },
  { label: 'Success Rate', value: '95%', icon: Target }
];

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Medical Admission Guidance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in achieving your dream of becoming a healthcare professional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              We are dedicated to providing comprehensive guidance and support to aspiring medical professionals. 
              Our team of experienced counselors and education experts help students navigate the complex world 
              of medical admissions with confidence and clarity.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              From course selection to entrance exam preparation, from college selection to career guidance, 
              we provide end-to-end support to ensure your success in the medical field.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <BookOpen className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Expert Counseling</h4>
                  <p className="text-gray-600">Personalized guidance from experienced professionals</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <Target className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Proven Results</h4>
                  <p className="text-gray-600">95% success rate in medical college admissions</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Medical guidance team"
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
            <div className="absolute inset-0 bg-blue-600 bg-opacity-10 rounded-xl"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-blue-50 rounded-xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Experienced Team</h4>
                <p className="text-gray-600 text-sm">15+ years of experience in medical education counseling</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Personalized Support</h4>
                <p className="text-gray-600 text-sm">Individual attention and customized guidance for every student</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Proven Track Record</h4>
                <p className="text-gray-600 text-sm">Thousands of successful admissions in top medical colleges</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;