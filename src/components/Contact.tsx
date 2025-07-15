import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useWhatsapp } from "@/components/WhatsappWidget";

const Contact = () => {
  const { openChat } = useWhatsapp();

  const socialLinks = [
    {
      name: 'Facebook',
      icon: <FaFacebookF />,
      url: 'https://www.facebook.com/CoreLabBD',
      bg: 'bg-[#3b5998]'
    },
    {
      name: 'Twitter',
      icon: <FaTwitter />,
      url: 'https://twitter.com/your-actual-page',
      bg: 'bg-[#1da1f2]'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedinIn />,
      url: 'https://linkedin.com/your-actual-page',
      bg: 'bg-[#0077b5]'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      url: 'https://instagram.com/your-actual-page',
      bg: 'bg-[#e1306c]'
    },
  ];

  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Ready to Take Charge of Your Health?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Book your health package today and take the first step towards a healthier, happier you.
          </p>
        </div>

        {/* 🔁 Replaced iframe with a clickable image */}
        <a
          href="https://www.google.com/maps/place/Core+Diagnostic+Ltd./@22.371764,91.8369182,15z/data=!4m6!3m5!1s0x30ad270536ac093b:0x1b99f8326e067d73!8m2!3d22.3719971!4d91.8476471!16s%2Fg%2F11tx6v6pph?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/Images/google-map.jpg"
            alt="Core Diagnostic Center Map"
            className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg border border-white/20 mb-12 hover:opacity-90 transition-opacity"
          />
        </a>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-blue-200" />
                    <div>
                      <div className="font-semibold">Core Diagnostic Center LTD</div>
                      <div className="text-blue-100">A.S Tower, Arkan Road (Opposite of RAB-7), Bahaddarhat, Chattogram</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-blue-200" />
                    <div>
                      <div className="font-semibold">+8801958092201</div>
                      <div className="text-blue-100">Emergency Number</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue-200" />
                    <div>
                      <div className="font-semibold">contact@corediagnosticltd.com</div>
                      <div className="text-blue-100">Get instant support</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-blue-200" />
                    <div>
                      <div className="font-semibold">Sat - Thu: 7:00 AM - 10:30 PM</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="font-semibold text-lg mb-2">Follow Us</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 ${link.bg} flex items-center justify-center rounded-full hover:opacity-90 transition`}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8"
                  onClick={() => openChat("Hi! I want to book an appointment.")}
                >
                  Book Appointment
                </Button>
                <Button  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8">
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 w-full">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Special Offers</h3>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Early Bird Discount</span>
                      <span className="bg-green-500 text-white px-2 py-1 rounded text-sm">20% OFF</span>
                    </div>
                    <p className="text-blue-100 text-sm">Book before 10 AM and save on all packages</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Family Package</span>
                      <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm">30% OFF</span>
                    </div>
                    <p className="text-blue-100 text-sm">Special rates for 3+ family members</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Corporate Wellness</span>
                      <span className="bg-purple-500 text-white px-2 py-1 rounded text-sm">35% OFF</span>
                    </div>
                    <p className="text-blue-100 text-sm">Bulk bookings for companies</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-yellow-500/20 rounded-lg border border-yellow-400/30">
                  <p className="text-center font-medium">
                    🎉 Limited Time: Free home collection for all packages!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-16 text-sm text-white/70">
          Developed by <a href="https://synacto.de/en" className="underline hover:text-white">Synacto</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
