import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What is the eligibility requirements to study MBBS and BAMS, BHMS, BDS, Nursing (BSc, GNM), MSC Nursing, paramedical, BPT in Bangalore?",
    answer: "For MBBS, BAMS, BHMS, BDS: 10+2 with Physics, Chemistry, Biology with minimum 50% marks (45% for SC/ST/OBC) and NEET qualification. For BSc Nursing: 10+2 with PCB, minimum 45% marks and nursing entrance exam. For GNM: 10+2 any stream with 45% marks. For MSc Nursing: BSc Nursing degree with 55% marks. For Paramedical: 10+2 with PCB, minimum 45% marks. For BPT: 10+2 with PCB, minimum 50% marks and entrance exam qualification."
  },
  {
    question: "What is the admission process like?",
    answer: "The admission process typically involves: 1) Meeting eligibility criteria, 2) Qualifying entrance examinations (NEET for medical courses, state-specific exams for nursing), 3) Online application submission, 4) Document verification, 5) Counseling process, 6) Seat allotment based on merit and preferences, 7) Fee payment and admission confirmation. We guide you through each step to ensure smooth admission."
  },
  {
    question: "What is the duration of MBBS and nursing course?",
    answer: "MBBS: 5.5 years (4.5 years academic + 1 year compulsory internship). BSc Nursing: 4 years. GNM (General Nursing & Midwifery): 3.5 years (3 years academic + 6 months internship). MSc Nursing: 2 years. The duration includes both theoretical studies and practical training components."
  },
  {
    question: "What are the career opportunities after MBBS, nursing in Bangalore?",
    answer: "After MBBS: Government/Private hospitals, clinics, research institutions, public health sector, specialization through MD/MS, medical officer positions. After Nursing: Hospitals (government/private), nursing homes, community health centers, corporate health sectors, teaching positions, administrative roles, specialization opportunities, international nursing opportunities. Bangalore offers excellent career prospects in both fields with numerous healthcare facilities."
  },
  {
    question: "What documents are needed for admission?",
    answer: "Required documents include: 10th & 12th mark sheets and certificates, NEET scorecard (for medical courses), Transfer certificate, Migration certificate, Conduct certificate, Caste certificate (if applicable), Income certificate (for fee concessions), Domicile certificate, Passport size photographs, Aadhar card, Medical fitness certificate. All documents should be original with photocopies for verification."
  },
  {
    question: "Do colleges provide internship and placements?",
    answer: "Yes, most medical and nursing colleges provide: Mandatory internships as part of curriculum (1 year for MBBS, 6 months for GNM), Clinical rotations in affiliated hospitals, Placement assistance through campus recruitment drives, Tie-ups with leading hospitals and healthcare organizations, Career guidance and counseling services. Many colleges in Bangalore have excellent placement records with top healthcare institutions."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about medical admissions and courses in Bangalore.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-blue-600 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our expert counselors are here to help you with personalized guidance for your medical career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917888106451"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Call +91 78881 06451
            </a>
            <a
              href="tel:+918172049667"
              className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
            >
              Call +91 81720 49667
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;