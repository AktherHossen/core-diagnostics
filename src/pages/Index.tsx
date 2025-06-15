
import Hero from "@/components/Hero";
import PackageCard from "@/components/PackageCard";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import { Heart, Shield, Clock, Award } from "lucide-react";

const healthPackages = [
  {
    id: 1,
    name: "Basic Health Checkup",
    price: "$99",
    originalPrice: "$129",
    duration: "2-3 Hours",
    tests: 25,
    description: "Essential health screening for general wellness monitoring",
    features: [
      "Complete Blood Count (CBC)",
      "Lipid Profile",
      "Blood Sugar Test",
      "Kidney Function Test",
      "Liver Function Test",
      "Thyroid Profile",
      "Vitamin D & B12",
      "ECG & Chest X-Ray"
    ],
    popular: false,
    icon: Heart
  },
  {
    id: 2,
    name: "Comprehensive Health Package",
    price: "$199",
    originalPrice: "$259",
    duration: "4-5 Hours",
    tests: 45,
    description: "Thorough health assessment with advanced diagnostic tests",
    features: [
      "All Basic Package Tests",
      "Cardiac Risk Assessment",
      "Diabetes Panel",
      "Cancer Markers",
      "Bone Health Analysis",
      "Stress & Hormone Tests",
      "Ultrasound Abdomen",
      "Consultation with Specialist"
    ],
    popular: true,
    icon: Shield
  },
  {
    id: 3,
    name: "Executive Health Screening",
    price: "$299",
    originalPrice: "$389",
    duration: "Full Day",
    tests: 65,
    description: "Premium health package for busy professionals and executives",
    features: [
      "All Comprehensive Tests",
      "Advanced Cardiac Screening",
      "Full Body MRI Scan",
      "Eye & ENT Examination",
      "Nutritionist Consultation",
      "Fitness Assessment",
      "Mental Health Screening",
      "Personalized Health Report"
    ],
    popular: false,
    icon: Award
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Hero />
      
      {/* Packages Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Health Package
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive health screenings designed to detect potential health issues early 
            and keep you on the path to optimal wellness.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {healthPackages.map((pkg) => (
            <PackageCard key={pkg.id} package={pkg} />
          ))}
        </div>
      </section>

      <Features />
      <Contact />
    </div>
  );
};

export default Index;
