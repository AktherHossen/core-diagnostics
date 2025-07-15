import { Button } from "@/components/ui/button";
import { Heart, Shield, Clock } from "lucide-react";
import { useWhatsapp } from "@/components/WhatsappWidget";
import { Link } from "react-router-dom";

const Hero = () => {
  const { openChat } = useWhatsapp();
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white min-h-[70vh] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative w-full max-w-4xl mx-auto px-4 py-20 flex flex-col items-center justify-center text-center space-y-8 z-10">
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
        <div className="flex flex-wrap gap-6 justify-center">
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8"
            onClick={() => openChat("হ্যালো! আমি হেলথ প্যাকেজ বা ডাক্তার অ্যাপয়েন্টমেন্ট সম্পর্কে জানতে চাই। অনুগ্রহ করে বিস্তারিত জানাবেন?.")}
          >
            Book Appointment
          </Button>
          <Link to="/health-package">
            <Button 
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8"
            >
              Health Packages
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
