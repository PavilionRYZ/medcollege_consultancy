import React from 'react';
import { GraduationCap, Heart, Stethoscope, Brain, Users, Activity, Zap, Bone } from 'lucide-react';

const courses = [
  {
    name: 'MBBS',
    icon: Stethoscope,
    description: 'Bachelor of Medicine, Bachelor of Surgery - The most prestigious medical degree for aspiring doctors.',
    eligibility: '12th PCB with 50% marks, NEET qualification',
    duration: '5.5 years',
    color: 'bg-blue-500'
  },
  {
    name: 'BAMS',
    icon: Heart,
    description: 'Bachelor of Ayurvedic Medicine & Surgery - Traditional Indian medicine with modern healthcare.',
    eligibility: '12th PCB with 50% marks, NEET qualification',
    duration: '5.5 years',
    color: 'bg-green-500'
  },
  {
    name: 'BDS',
    icon: Brain,
    description: 'Bachelor of Dental Surgery - Comprehensive dental care and oral health specialization.',
    eligibility: '12th PCB with 50% marks, NEET qualification',
    duration: '5 years',
    color: 'bg-purple-500'
  },
  {
    name: 'BHMS',
    icon: Activity,
    description: 'Bachelor of Homeopathic Medicine & Surgery - Holistic healthcare through homeopathy.',
    eligibility: '12th PCB with 50% marks, NEET qualification',
    duration: '5.5 years',
    color: 'bg-indigo-500'
  },
  {
    name: 'B.Sc Nursing',
    icon: Users,
    description: 'Bachelor of Science in Nursing - Professional nursing care and healthcare management.',
    eligibility: '12th PCB with 45% marks, Nursing entrance exam',
    duration: '4 years',
    color: 'bg-pink-500'
  },
  {
    name: 'GNM',
    icon: Heart,
    description: 'General Nursing & Midwifery - Essential nursing skills and patient care expertise.',
    eligibility: '12th Any stream with 45% marks',
    duration: '3.5 years',
    color: 'bg-red-500'
  },
  {
    name: 'Paramedical',
    icon: Zap,
    description: 'Various paramedical courses - Medical laboratory technology, radiology, and emergency care.',
    eligibility: '12th PCB with 45% marks',
    duration: '1-3 years',
    color: 'bg-yellow-500'
  },
  {
    name: 'Physiotherapy',
    icon: Bone,
    description: 'Bachelor of Physiotherapy - Rehabilitation and physical therapy for optimal health.',
    eligibility: '12th PCB with 50% marks, Entrance exam',
    duration: '4.5 years',
    color: 'bg-teal-500'
  }
];

const Courses = () => {
  return (
    <section id="courses" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Medical Courses We Guide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore various medical and healthcare programs. Each course opens doors to a rewarding career in healthcare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => {
            const IconComponent = course.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6"
              >
                <div className={`${course.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                  {course.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {course.description}
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <div className="text-sm text-gray-500 mb-2">
                    <span className="font-semibold">Duration:</span> {course.duration}
                  </div>
                  <div className="text-sm text-gray-500">
                    <span className="font-semibold">Eligibility:</span> {course.eligibility}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;