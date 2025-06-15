import Navbar from "@/components/Navbar";
import PackageCard from "@/components/PackageCard";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import { Heart, Shield, Award, Stethoscope, Thermometer, Eye, Brain, Droplet, ActivitySquare } from "lucide-react";
import { useWhatsapp } from "@/components/WhatsappWidget";
import { Button } from "@/components/ui/button";

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
  },
  {
    id: 4,
    name: "Diabetic Screening - Basic",
    price: "৳2,400",
    originalPrice: "৳3,470",
    duration: "1-2 Hours",
    tests: 7,
    description: "Comprehensive diabetes risk evaluation",
    features: [
      "Glucose, fasting",
      "Glucose, 2 hrs post prandial",
      "Creatinine",
      "ALT (SGPT)",
      "Urine Routine Examination",
      "HbA1C",
      "ECG"
    ],
    popular: false,
    icon: Thermometer
  },
  {
    id: 5,
    name: "Liver Screening",
    price: "৳3,900",
    originalPrice: "৳5,685",
    duration: "2 Hours",
    tests: 10,
    description: "Liver function and viral infection assessment",
    features: [
      "Bilirubin, Total",
      "ALT (SGPT)",
      "AST (SGOT)",
      "Alkaline Phosphatase (ALP)",
      "CBC",
      "PT (Prothrombin time)",
      "Anti-HCV",
      "HBsAg",
      "USG Upper Abdomen"
    ],
    popular: false,
    icon: Droplet
  },
  {
    id: 6,
    name: "Cardiac Health Package (Screening)",
    price: "৳5,500",
    originalPrice: "৳7,580",
    duration: "3-4 Hours",
    tests: 11,
    description: "Heart health screening for risk detection and prevention",
    features: [
      "CBC",
      "FBS",
      "Lipid Profile",
      "HBsAg",
      "SGPT",
      "Creatinine",
      "Urine R/M/E",
      "X-Ray Chest P/A View",
      "ECG",
      "Spirometry",
      "Echo 2D"
    ],
    popular: false,
    icon: ActivitySquare
  },
  {
    id: 7,
    name: "Renal Screening",
    price: "৳5,300",
    originalPrice: "৳7,465",
    duration: "2-3 Hours",
    tests: 10,
    description: "Kidney function and urinary health profile",
    features: [
      "CBC",
      "FBS",
      "Creatinine",
      "Urine R/M/E",
      "X-ray KUB",
      "Uric Acid",
      "Electrolytes",
      "Blood Urea",
      "Urine for Micro albumin",
      "USG KUB, PVR and Prostate"
    ],
    popular: false,
    icon: Brain
  },
  {
    id: 8,
    name: "Thyroid Health Package",
    price: "৳5,200",
    originalPrice: "৳7,320",
    duration: "1-2 Hours",
    tests: 5,
    description: "Comprehensive thyroid function evaluation",
    features: [
      "TSH",
      "FT3",
      "FT4",
      "Anti-Thyroid Antibody",
      "USG of Thyroid Gland"
    ],
    popular: false,
    icon: Stethoscope
  }
];

const HealthPackage = () => {
  const { openChat } = useWhatsapp();
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <section className="py-12 px-4 max-w-7xl mx-auto" id="package">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Health Packages</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our range of diagnostic health packages tailored for preventive care and complete wellness.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {healthPackages.map(pkg => <PackageCard key={pkg.id} package={pkg} />)}
        </div>
        <div className="flex justify-center mt-12">
          <Button
            size="lg"
            className="bg-green-500 text-white hover:bg-green-600 font-semibold px-8"
            onClick={() => openChat("Hi! I want to book a health package.")}
          >
            Book Appointment
          </Button>
        </div>
      </section>
      <Features />
      <Contact />
    </div>
  );
};

export default HealthPackage;
