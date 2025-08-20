import React from 'react';
import { BookOpen, Award, FileText, CheckCircle } from 'lucide-react';

const eligibilityItems = [
  {
    icon: BookOpen,
    title: '10+2 Education',
    description: 'Completion of Higher Secondary Education with Physics, Chemistry, and Biology as core subjects',
    details: 'Must be from a recognized board (CBSE, State Boards, etc.)'
  },
  {
    icon: Award,
    title: 'Minimum Marks',
    description: 'Minimum 50% marks in 12th standard for general category students',
    details: '45% for SC/ST/OBC categories, 40% for PWD candidates'
  },
  {
    icon: FileText,
    title: 'Entrance Examination',
    description: 'Qualification in respective entrance examinations like NEET, State CETs',
    details: 'NEET for MBBS, BDS, BAMS, BHMS and other medical courses'
  },
  {
    icon: CheckCircle,
    title: 'Age Criteria',
    description: 'Minimum age of 17 years as of December 31st of admission year',
    details: 'Maximum age limit varies by course and category'
  }
];

const Eligibility = () => {
  return (
    <section id="eligibility" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Eligibility Criteria
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            General requirements for medical course admissions. Specific criteria may vary by course and institution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {eligibilityItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-600 transition-colors duration-300">
                  <IconComponent className="h-10 w-10 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>
                <p className="text-sm text-gray-500 italic">
                  {item.details}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-blue-50 rounded-xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Important Notes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 mb-2">Documentation</h4>
                <p className="text-sm text-gray-600">All certificates must be from recognized boards and institutions. Original documents required during counseling.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 mb-2">Reservations</h4>
                <p className="text-sm text-gray-600">Reservation benefits available as per government guidelines for SC/ST/OBC/EWS and PWD candidates.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 mb-2">Domicile</h4>
                <p className="text-sm text-gray-600">State domicile certificates may be required for state quota seats in government medical colleges.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eligibility;