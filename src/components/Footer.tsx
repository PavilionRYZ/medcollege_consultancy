import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Stethoscope,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-4">
              <Stethoscope className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-2xl font-bold">Medcollege Consultancy</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner in navigating the path to a successful
              medical career. We provide expert guidance for all medical and
              healthcare programs with personalized counseling and comprehensive
              support.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <div className="text-gray-300">
                  <div>+91 78881 06451</div>
                  <div>+91 81720 49667</div>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <div className="text-gray-300">
                  <div>Omkardixit333@gmail.com</div>
                  <div>susritade@gmail.com</div>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  #5, 2nd Main, Thimmappa Reddy Layout, Hulimavu Gate, B.G.
                  Road, Bangalore - 560076
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("courses")}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Courses
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("eligibility")}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Eligibility
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("enquiry")}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Admission Enquiry
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  About Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="bg-blue-600 p-4 rounded-lg mb-6">
              <h4 className="font-semibold mb-2">Contact Numbers</h4>
              <div className="space-y-1">
                <p className="text-lg font-bold">+91 78881 06451</p>
                <p className="text-lg font-bold">+91 81720 49667</p>
              </div>
              <p className="text-sm text-blue-100">
                Call for immediate assistance
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61579379708909"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/medcollege_consultancy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 p-2 rounded-full hover:bg-red-700 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              <p>© 2025 Medical Admission Guidance. All rights reserved.</p>
              <p className="mt-1">
                Developed by{" "}
                <a
                  href="https://subhradev.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  subhra.dev
                </a>
              </p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
