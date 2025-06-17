import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import { MapPin, Target, Eye, MessageSquare } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            About Core Diagnostics
          </h1>
          <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
            Providing quality healthcare services with advanced diagnostic facilities
            since 2010
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <Target className="w-12 h-12 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide accurate, reliable, and timely diagnostic services using state-of-the-art technology, 
                ensuring the highest standards of quality and patient care. We are committed to making healthcare 
                accessible and affordable while maintaining excellence in medical diagnostics.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <Eye className="w-12 h-12 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the leading diagnostic center in Bangladesh, recognized for our commitment to excellence, 
                innovation, and patient care. We aim to continuously improve our services and expand our reach 
                to serve more communities with advanced medical diagnostics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Director's Message */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <MessageSquare className="w-12 h-12 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">Director's Message</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/Images/director.jpg" 
                  alt="Director" 
                  className="rounded-lg shadow-md w-full h-auto"
                  onError={(e) => (e.currentTarget.src = "/placeholder.svg")}
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900">Dr. Borhan Azad</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  "Welcome to Core Diagnostics. Our journey began with a simple yet powerful vision: to make 
                  quality healthcare accessible to everyone. Over the years, we have grown to become one of 
                  the most trusted diagnostic centers in Bangladesh, serving thousands of patients with 
                  dedication and care.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our commitment to excellence, combined with cutting-edge technology and a team of highly 
                  qualified professionals, enables us to provide accurate and reliable diagnostic services. 
                  We believe in continuous improvement and innovation to better serve our community."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Contact />
    </div>
  );
};

export default AboutUs;
