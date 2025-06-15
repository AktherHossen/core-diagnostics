import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PackageCard from "@/components/PackageCard";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import { Heart, Shield, Award } from "lucide-react";

const healthPackages = [
  {
    id: 1,
    name: "Basic Health Package",
    price: "৳5,800",
    originalPrice: "৳8,320",
    duration: "2-3 Hours",
    tests: 15,
    description: "Essential health screening for general wellness monitoring",
    features: [
      "CBC with ESR",
      "Fasting Blood Sugar",
      "Fasting Lipid Profile",
      "HBsAg Screening",
      "S. Bilirubin",
      "SGPT",
      "Uric Acid",
      "S. Creatinine",
      "Urine R/M/E",
      "TSH",
      "Blood Grouping and Rh Factor",
      "X-Ray Chest P/A View",
      "USG Whole Abdomen",
      "ECG",
      "Doctor's Consultation"
    ],
    popular: false,
    icon: Heart
  },
  {
    id: 2,
    name: "Executive Health Check Up - Female (40+)",
    price: "৳9,000",
    originalPrice: "৳12,440",
    duration: "4-5 Hours",
    tests: 16,
    description: "Complete health checkup designed for women above 40",
    features: [
      "CBC with ESR",
      "Fasting Blood Sugar",
      "Fasting Lipid Profile",
      "HBsAg Screening",
      "S. Bilirubin",
      "SGPT",
      "Uric Acid",
      "S. Creatinine",
      "Urine R/M/E",
      "TSH",
      "Blood Grouping and Rh Factor",
      "X-Ray Chest P/A View",
      "USG Whole Abdomen",
      "USG of Both Breasts",
      "Pap's Smear",
      "ECG"
    ],
    popular: true,
    icon: Shield
  },
  {
    id: 3,
    name: "Executive Health Check Up - Male (40+)",
    price: "৳8,900",
    originalPrice: "৳12,835",
    duration: "Full Day",
    tests: 17,
    description: "Premium health screening tailored for men above 40",
    features: [
      "CBC with ESR",
      "Fasting Blood Sugar and 2 hrs ABF",
      "HbA1C",
      "Fasting Lipid Profile",
      "S. Electrolyte",
      "S. Bilirubin",
      "SGPT",
      "Uric Acid",
      "S. Creatinine",
      "Urine R/M/E",
      "TSH",
      "PSA",
      "Ft4",
      "X-Ray Chest P/A View",
      "USG Whole Abdomen with PVR, Prostate and MCC",
      "HBsAg Screening",
      "ECG"
    ],
    popular: false,
    icon: Award
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
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