import { Button } from "@/components/ui/button";
import { Heart, Shield, Clock } from "lucide-react";
import { useWhatsapp } from "@/components/WhatsappWidget";

const Hero = () => {
  const { openChat } = useWhatsapp();
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold leading-tight">
                Your Health is Our 
                <span className="text-blue-200"> Priority</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Comprehensive health packages designed by medical experts to give you complete 
                insights into your health status with state-of-the-art diagnostic technology.
              </p>
            </div>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-400" />
                <span className="font-medium">Preventive Care</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="font-medium">Certified Lab</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-yellow-400" />
                <span className="font-medium">Quick Results</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8"
                onClick={() => openChat("Hi! I want to book a package.")}
              >
                Book Appointment
              </Button>
              <Button size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8">
                Health Packages
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Why Choose Us?</h3>
                  <p className="text-blue-100">Trusted by over 50,000+ patients</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-3xl font-bold">15+</div>
                    <div className="text-sm text-blue-100">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-3xl font-bold">99%</div>
                    <div className="text-sm text-blue-100">Accuracy Rate</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-3xl font-bold">24h</div>
                    <div className="text-sm text-blue-100">Report Delivery</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-3xl font-bold">NABL</div>
                    <div className="text-sm text-blue-100">Certified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
