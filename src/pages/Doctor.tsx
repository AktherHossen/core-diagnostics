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
    bio: "MBBS, MD (Medicine) – BSMMU CCD (Certified Diabetologist) – BIRDEM Member, American College of Physicians Assistat Professor, Department of Medicine, USTC",
    timing: "Monday & Thursday: 3:00 PM – 6:30 PM | Friday: 7:00 PM – 9:00 PM",
    regNo: "A-60609"
  },
  {
    id: 2,
    name: "Dr. Abu Ishak Md. Arafat",
    specialty: "Medicine and Diabetes Specialist",
    image: "Images/dr_abu_ishak_md._arafat.jpg.jpeg",
    bio: "MBBS,FCPS (Endocrinology-FP) Diabetes & Hormonal Disease Department Chittagong Medical College Hospital",
    timing: "Every day from 7:00 PM – 9:00 PM (Closed on Friday)",
    regNo: "A-61854"
  },
  {
    id: 3,
    name: "Dr. Nadia Ireen (Chowdhury)",
    specialty: "Medicine and Diabetes Specialist",
    image: "Images/dr_nadia_ireen _chowdhury.jpg.jpeg",
    bio: "MBBS, CCD (BIRDEM) MMEd (BSMMU), FCPS Medicine (FP) Medical Officer Chittagong Medical College Hospital",
    timing: "Sunday to Thursday: 6:00 PM – 9:00 PM",
    regNo: "A-61292"
  },
  {
    id: 4,
    name: "Dr. Yusuf Ahmed",
    specialty: "Medicine and Diabetes Specialist",
    image: "Images/dr_yusuf_ahmed.jpg.jpeg",
    bio: "MBBS (CU) FCPS (Medicine-F.P) CCD (BIRDEM), DOC (Skin), DMU, Chittagong Medical College Hospital",
    timing: "Every day: 6:30 PM – 8:00 PM",
    regNo: "A-95564"
  },
  {
    id: 5,
    name: "Dr. Fahmida Akhter",
    specialty: "Obstetrics and Gynecology Specialist",
    image: "Images/dr_fahmida_akhter.jpg.jpeg",
    bio: "MBBS, FCPS Attending Consultant, Gynecology and Obstetrics Evercare Hospital Chittagong",
    timing: "Monday: 4:00 PM – 7:00 PM",
    regNo: ""
  },
  {
    id: 6,
    name: "Dr. Begum Tahmina Sultana",
    specialty: "Obstetrics and Gynecology Specialist",
    image: "Images/dr_begum_tahmina_sultana.jpg.jpeg",
    bio: "MBBS (SMOC), DMU FCPS (Gynae & Obs), Assistant Professor (Gynecology and Obstetrics), Chittagong International Medical College (CIMC)",
    timing: "Sat, Mon & Wed: 7:30 PM – 9:30 PM",
    regNo: "A-46592"
  },
  {
    id: 7,
    name: "Dr. Fazilatun Nessa (Rina)",
    specialty: "Obstetrics and Gynecology Specialist",
    image: "/placeholder.svg",
    bio: "MBBS, MRCOG Training (KSA) Licensed Obstetrician and Gynecologist (KSA) BGC Trust Medical College & Hospital",
    timing: "Everyday: 3:00 PM - 5:00 PM(Closed on Friday)",
    regNo: ""
  },
  {
    id: 8,
    name: "Dr. Nafiz Iqbal Siddiqui",
    specialty: "Cardiologist",
    image: "Images/dr_nafiz_iqbal_siddiqui.jpeg",
    bio: "MBBS (CMC) D-Card (BSMU), MRCP (Part-2) Post Graduate Training in Medicine & Neuro Medicine. Former Consultant, Fortis Heart Institute",
    timing: "Sunday, Tuesday & Thursday 10:00 AM to 12:00 PM",
    regNo: ""
  },
  {
    id: 9,
    name: "Dr. Dhiman Das",
    specialty: "Pediatrics Specialist",
    image: "Images/dr_dhiman_das.jpg.jpeg",
    bio: "MBBS, BCS (Health) DCH (BSMMU) ENS, PGPN (Child Nutrition) Chittagong Medical College Hospital",
    timing: "Every day from 4:00 PM to 7:00 PM (Closed on Fridays)",
    regNo: ""
  },
  {
    id: 10,
    name: "Dr. Sifatullah Naeem Nuri",
    specialty: "Pediatrics Specialist",
    image: "Images/dr_sifatullah_naeem_noori.jpeg",
    bio: "MBBS (CMC), FCPS (Medicine-FP) PGT (Child Health), ICPPN (Child Nutrition) MACP (USA) Chittagong Medical College Hospital",
    timing: "Sunday – Thursday: 6:00 PM – 9:00 PM",
    regNo: "A-94227"
  },
  {
    id: 11,
    name: "Dr. Dibakar Barua",
    specialty: "Diabetes Specialist",
    image: "Images/dr_dibakar_barua.jpg.jpeg",
    bio: "MBBS (CU), DMU (DU) EDC (Diabetology,BIRDEM) MRCP (C) – Medicine Diabetologist and Family Physician CMO, Patiya Diabetic Hospital",
    timing: "Everyday: 9:00 AM – 12:00 PM (closed on Friday)",
    regNo: "A-27777"
  },
  {
    id: 12,
    name: "Dr. Mamun Mustafa",
    specialty: "Orthopedics Specialist",
    image: "Images/dr_mamun_mustafa.jpg.jpeg",
    bio: "MBBS, BCS (Health) MS (Orthopedics) Chittagong Medical College Hospital",
    timing: "Saturday, Sunday & Wednesday: 3:00 PM – 4:30 PM",
    regNo: "A-45852"
  },
  {
    id: 13,
    name: "Dr. Bilkis Akhter",
    specialty: "Orthopedic Surgeon",
    image: "/placeholder.svg",
    bio: "MBBS, MS (Orthopedic Surgery) Orthopedics, Trauma (Accident and Microvascular Surgeon)",
    timing: "Sat, Mon & Wed: 7:30 PM – 9:00 PM + Sun, Tues,Thu and Fri:4:00 PM - 7:00 PM",
    regNo: "A-45497"
  },
  {
    id: 14,
    name: "Dr. Ekram Hossain Chowdhury",
    specialty: "Chest Disease Specialist",
    image: "Images/dr_ekram_hossain_chowdhury.jpeg",
    bio: "MBBS, BCS (Health) CCD (BIRDEM), DTCCD (Chest Diseases) National Institute of Chest Diseases & Hospital, Dhaka",
    timing: "Sat,Sun,Wed & Thu: 5:30 PM – 8:30 PM",
    regNo: "A-54902"
  },
  {
    id: 15,
    name: "Dr. Md. Aminul Islam (Tarek)",
    specialty: "Dermatologist",
    image: "Images/dr_md_aminul_islam_tarek.jpeg",
    bio: "MBBS (CMC), BCS (Health) FCPS Medicine(F.P) DDV (BSMMU) Chittagong Medical College Hospital",
    timing: "Every day from 8:00 PM to 9:00 PM",
    regNo: ""
  },
  {
    id: 16,
    name: "Dr. Tanvir Alam",
    specialty: "Dermatologist",
    image: "Images/dr_tanvir_alam.jpg.jpeg",
    bio: "MBBS, PGT (Medicine) PGT (Skin & VD),CCD (Diabetology) Chittagong Medical College & Hospital",
    timing: "Every Day From 7:00 PM to 10:00 PM",
    regNo: "99734"
  },
  {
    id: 17,
    name: "Dr. Maleka Afroz",
    specialty: "ENT Specialist",
    image: "Images/dr-maleka_afroz.jpg.jpeg",
    bio: "MBBS, FCPS (ENT) Head of Department (ENT) Chittagong International Medical College",
    timing: "Sunday, Tuesday & Thursday From 5:00 PM to 7:00 PM",
    regNo: "A-26830"
  },
  {
    id: 18,
    name: "Dr. Tousif Bin Mamun",
    specialty: "ENT Specialist",
    image: "Images/dr_tousif_bin_mamun.jpg.jpeg",
    bio: "MBBS, MCPS (ENT) Assistant Registrar (ENT) Chittagong Medical College & Hospital",
    timing: "Saturday, Monday & Wednesday From 7.30 PM to 9:00 PM",
    regNo: "A-75986"
  },
  {
    id: 19,
    name: "Dr. Himadri Mohajan",
    specialty: "Psychiatrist",
    image: "Images/dr_himadri_mohajan.jpg.jpeg",
    bio: "MBBS, BCS (Health) MD (Psychiatry) Assistant Professor, Department of Psychiatry Chittagong Medical College & Hospital",
    timing: "Sun, Tue & Thu: 4:00 PM – 7:00 PM",
    regNo: ""
  },
  {
    id: 20,
    name: "Dr. Kazi Zohaida Noor",
    specialty: "Oral and Dental Specialist",
    image: "/placeholder.svg",
    bio: "BDS (CIDC) PGT or Conservative Dentistry Oral & Dental Surgeon Chittagong Medical College Specialized in Root Canal Treatment Specialized in Smile Design",
    timing: "Every day from 4:00 PM to 10:00 PM",
    regNo: "A-99734"
  },
  {
    id: 21,
    name: "Dr. Chowdhury Tanvir Ivne Kashem",
    specialty: " Medicine, Diabetes & Hormone Specialist",
    image: "Images/dr_chowdury_tanvern_ibne_hashem.jpeg",
    bio: "MBBS , BCS (Health) FCPS (Part -2), Medicine PGT in Medicine Medicine, Diabetes & Hormone  specialist",
    timing: "Saturday, Monday & Wednesday (7 pm - 10 pm)",
    regNo: ""
  },
  {
    id: 22,
    name: "Dr. Maliha Subat",
    specialty: "Surgery specialist",
    image: "Images/dr_maliha_subat.jpeg",
    bio: "MBBS, MRCS (England) , Registrar, Department of SurgeryInstitute of Applied Health Sciences (IAHS)",
    timing: "Saturday, Monday & Wednesday (7 pm - 10 pm)",
    regNo: "A-112631"
  },
  {
    id: 23,
    name: "Dr. Tazmira Islam Tanni",
    specialty: "Pediatric & Child Health",
    image: "Images/dr_tazmira_islam_tanni.jpeg",
    bio: "MBBS, DCH (BSMMU)Newborne, pediatric & Child specialist Consultant - Pediatrics Department CIMCH, BMD",
    timing: "Saturday,Monday and Webnesday from 10:00 AM to 12:30 PM",
    regNo: "A-64180"
  },
  {
    id: 24,
    name: "Dr. Nishrat Jahan Nishu",
    specialty: " Skin & VD specialist",
    image: "Images/dr_nishrat_jahan_nishu.jpeg",
    bio: "MBBS (CU), PGT (Medicine, Skin & VD)Medical OfficerScin & VD DepartmentChattogram International Medical College & HospitalBMDC",
    timing: "Every day from 4:00 PM to 7:00 PM (Closed on Friday)",
    regNo: "A-109663"
  },
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