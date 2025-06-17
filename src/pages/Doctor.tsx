import Navbar from "../components/Navbar";
import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../components/ui/select";
import { useWhatsapp } from "../components/WhatsappWidget";

const doctors = [
  {
    id: 1,
    name: "Dr. Zahedul Hoque",
    specialty: "Medicine and Diabetes Specialist",
    image: "Images/dr_zahedul_hoque.jpg.jpeg",
    bio: "MBBS, MD (Medical) – BRMCM. CEO, CoreMed Diagnostics. Member, American College of Physicians.",
    timing: "Friday: 2:00 PM – 8:00 PM",
    regNo: "A-96190"
  },
  {
    id: 2,
    name: "Dr. Abu Ishak Md. Arafat",
    specialty: "Medicine and Diabetes Specialist",
    image: "Images/dr_abu_ishak_md._arafat.jpg.jpeg",
    bio: "MBBS, BCS (Health), Endocrinology (FP). CMOSHMC.",
    timing: "Saturday – Thursday: 7:00 PM – 9:00 PM",
    regNo: "A-48184"
  },
  {
    id: 3,
    name: "Dr. Nadia Ireen (Chowdhury)",
    specialty: "Medicine and Diabetes Specialist",
    image: "Images/dr_nadia_ireen _chowdhury.jpg.jpeg",
    bio: "MBBS (BSMMU), FCPS (Medicine), CMOSHMC.",
    timing: "Sunday – Thursday: 6:00 PM – 9:00 PM",
    regNo: "A-48613"
  },
  {
    id: 4,
    name: "Dr. Yusuf Ahmed",
    specialty: "Medicine and Diabetes Specialist",
    image: "Images/dr_yusuf_ahmed.jpg.jpeg",
    bio: "MBBS, FCPS (Medicine), CMOSHMC.",
    timing: "Saturday – Thursday: 7:00 PM – 9:00 PM",
    regNo: "A-50426"
  },
  {
    id: 5,
    name: "Dr. Fahmida Akhter",
    specialty: "Obstetrics and Gynecology Specialist",
    image: "Images/dr_fahmida_akhter.jpg.jpeg",
    bio: "MBBS, FCPS. Evercare Hospital Chattogram.",
    timing: "Friday: 3:00 PM – 5:00 PM",
    regNo: "A-41649"
  },
  {
    id: 6,
    name: "Dr. Begum Tahmina Sultana",
    specialty: "Obstetrics and Gynecology Specialist",
    image: "Images/dr_begum_tahmina_sultana.jpg.jpeg",
    bio: "MBBS, DGO, DMU. Chittagong Medical College.",
    timing: "Saturday – Thursday: 4:00 PM – 8:00 PM",
    regNo: "A-31268"
  },
  {
    id: 7,
    name: "Dr. Fazilatun Nessa (Rina)",
    specialty: "Obstetrics and Gynecology Specialist",
    image: "/placeholder.svg",
    bio: "MBBS, MRCOG Training (KSA). Consultant at BGC Trust Hospital.",
    timing: "Friday: 6:00 PM – 8:00 PM",
    regNo: "A-46338"
  },
  {
    id: 8,
    name: "Dr. Nafiz Iqbal Siddiqui",
    specialty: "Cardiologist",
    image: "/placeholder.svg",
    bio: "MBBS, D-CARD. Medicine & Heart Institute Chattogram.",
    timing: "Friday: 6:00 PM – 9:00 PM",
    regNo: "A-26941"
  },
  {
    id: 9,
    name: "Dr. Dhiman Das",
    specialty: "Pediatrics Specialist",
    image: "Images/dr_dhiman_das.jpg.jpeg",
    bio: "MBBS, DCH. Chattogram Medical College Hospital.",
    timing: "Friday: 10:00 AM – 1:00 PM",
    regNo: "A-33738"
  },
  {
    id: 10,
    name: "Dr. Sifatullah Naeem Noori",
    specialty: "Pediatrics Specialist",
    image: "Images/dr_sifatullah_naeem_noori.jpeg",
    bio: "MBBS, FCPS (Pediatrics). BMDC Reg No: A-63522.",
    timing: "Sunday – Thursday: 6:00 PM – 9:00 PM",
    regNo: "A-63522"
  },
  {
    id: 11,
    name: "Dr. Dibakar Barua",
    specialty: "Diabetes Specialist",
    image: "Images/dr_dibakar_barua.jpg.jpeg",
    bio: "MBBS, CCD. CMOSHMC. Principal, Parkview Hospital.",
    timing: "Friday: 9:00 AM – 12:00 PM",
    regNo: "A-22567"
  },
  {
    id: 12,
    name: "Dr. Mamun Mustafa",
    specialty: "Orthopedics Specialist",
    image: "Images/dr_mamun_mustafa.jpg.jpeg",
    bio: "MBBS, BCS (Health), D-Ortho.",
    timing: "Saturday – Thursday: 5:00 PM – 7:00 PM",
    regNo: "A-40681"
  },
  {
    id: 13,
    name: "Dr. Bilkis Akhter",
    specialty: "Orthopedic Surgeon",
    image: "/placeholder.svg",
    bio: "MBBS, MS (Ortho Surgery). Chattogram Medical College.",
    timing: "Friday: 3:00 PM – 6:00 PM",
    regNo: "A-26493"
  },
  {
    id: 14,
    name: "Dr. Ekram Hossain Chowdhury",
    specialty: "Chest Disease Specialist",
    image: "Images/dr_ekram_hossain_chowdhury.jpeg",
    bio: "DCD (Respiratory), DTC (Chest Disease).",
    timing: "Saturday – Thursday: 6:00 PM – 9:00 PM",
    regNo: "A-23780"
  },
  {
    id: 15,
    name: "Dr. Md. Aminul Islam (Tarek)",
    specialty: "Chest Disease Specialist",
    image: "Images/dr_md_aminul_islam_tarek.jpeg",
    bio: "MBBS, FCCP (USA). CMOSHMC.",
    timing: "Friday: 5:00 PM – 7:00 PM",
    regNo: "A-46895"
  },
  {
    id: 16,
    name: "Dr. Tanvir Alam",
    specialty: "Dermatologist",
    image: "Images/dr_tanvir_alam.jpg.jpeg",
    bio: "MBBS, PGT (Dermatology), CCD. CMOSHMC.",
    timing: "Saturday – Thursday: 7:00 PM – 9:00 PM",
    regNo: "A-51402"
  },
  {
    id: 17,
    name: "Dr. Maleka Afroz",
    specialty: "ENT Specialist",
    image: "Images/dr-maleka_afroz.jpg.jpeg",
    bio: "MBBS, FCPS (ENT). Chittagong International Medical College.",
    timing: "Friday: 11:00 AM – 2:00 PM",
    regNo: "A-33325"
  },
  {
    id: 18,
    name: "Dr. Tousif Bin Mamun",
    specialty: "ENT Specialist",
    image: "Images/dr_tousif_bin_mamun.jpg.jpeg",
    bio: "MBBS, MS (ENT). Chattogram Medical College & Hospital.",
    timing: "Saturday – Thursday: 6:00 PM – 9:00 PM",
    regNo: "A-37625"
  },
  {
    id: 19,
    name: "Dr. Himadri Mohajan",
    specialty: "Psychiatrist",
    image: "Images/dr_himadri_mohajan.jpg.jpeg",
    bio: "MBBS, BCS (Health), Department of Medicine.",
    timing: "Friday: 3:00 PM – 6:00 PM",
    regNo: "A-48703"
  },
  {
    id: 20,
    name: "Dr. Kazi Zohaida Noor",
    specialty: "Oral and Dental Specialist",
    image: "/placeholder.svg",
    bio: "BCS (Dental), Oral & Dental Surgery Specialist.",
    timing: "Saturday – Thursday: 5:00 PM – 8:00 PM",
    regNo: "A-63098"
  }
];

const specializations = [...new Set(doctors.map((doc) => doc.specialty))];

const WHATSAPP_PHONE = "15551234567";

const Doctor = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("all");
  const { openChat } = useWhatsapp();

  const filteredDoctors =
    selectedSpecialty && selectedSpecialty !== "all"
      ? doctors.filter((doc) => doc.specialty === selectedSpecialty)
      : doctors;

  const handleBookAppointment = (doctorName: string) => {
    openChat(`Hi! I want to book an appointment with ${doctorName}.`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Meet Our Doctors
          </h1>
          <p className="text-xl text-gray-600">
            Highly qualified experts committed to your health and wellness.
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between mb-8">
          <span className="font-medium text-gray-700">Filter by Specialization:</span>
          <div className="w-full md:w-56">
            <Select
              value={selectedSpecialty}
              onValueChange={setSelectedSpecialty}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All Specializations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                {specializations.map((spec) => (
                  <SelectItem key={spec} value={spec}>
                    {spec}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {filteredDoctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-2xl shadow p-6 text-center animate-fade-in"
            >
              <img
                src={doc.image}
                alt={doc.name}
                onError={(e) => (e.currentTarget.src = "/placeholder.svg")}
                className="w-24 h-24 rounded-full border mx-auto mb-4 object-cover"
              />
              <div className="font-bold text-xl mb-1">{doc.name}</div>
              <div className="text-blue-500 font-medium mb-1">
                {doc.specialty}
              </div>
              <p className="text-gray-600 text-sm mb-1">{doc.bio}</p>
              <p className="text-gray-600 text-sm mb-1 font-medium">
                Available: {doc.timing}
              </p>
              <p className="text-gray-500 text-xs mb-4">
                BMDC Reg No: {doc.regNo}
              </p>
              <button
                onClick={() => handleBookAppointment(doc.name)}
                className="inline-block px-4 py-1 bg-green-500 text-white rounded hover:bg-green-600 font-semibold text-sm transition-colors"
              >
                Book Appointment
              </button>
            </div>
          ))}
        </div>
        {filteredDoctors.length === 0 && (
          <div className="text-center text-gray-500 mt-12 text-lg">
            No doctors found for this specialization.
          </div>
        )}
      </section>
    </div>
  );
};

export default Doctor;