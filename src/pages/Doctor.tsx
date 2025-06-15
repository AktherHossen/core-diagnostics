
import Navbar from "@/components/Navbar";
import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import WhatsappWidget from "@/components/WhatsappWidget";

const doctors = [
  {
    id: 1,
    name: "Dr. Kavita Rao",
    specialty: "Pathologist",
    experience: "12 years",
    image: "/placeholder.svg",
    bio: "Expert in diagnostic medicine and clinical pathology.",
  },
  {
    id: 2,
    name: "Dr. Sameer Kulkarni",
    specialty: "Radiologist",
    experience: "10 years",
    image: "/placeholder.svg",
    bio: "Specializes in advanced imaging and preventive screening.",
  },
  {
    id: 3,
    name: "Dr. Anita Sharma",
    specialty: "Consultant Physician",
    experience: "18 years",
    image: "/placeholder.svg",
    bio: "Focused on holistic care and lifestyle coaching.",
  },
];

const specializations = [
  ...new Set(doctors.map((doc) => doc.specialty)),
];

const WHATSAPP_PHONE = "15551234567"; // Use the same WhatsApp number as in the widget

const Doctor = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("all");

  const filteredDoctors =
    selectedSpecialty && selectedSpecialty !== "all"
      ? doctors.filter((doc) => doc.specialty === selectedSpecialty)
      : doctors;

  const getWhatsAppLink = (doctorName: string) =>
    `https://wa.me/${WHATSAPP_PHONE}?text=Hi!%20I%20want%20to%20book%20an%20appointment%20with%20${encodeURIComponent(doctorName)}.`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <WhatsappWidget />
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
                className="w-24 h-24 rounded-full border mx-auto mb-4 object-cover"
              />
              <div className="font-bold text-xl mb-1">{doc.name}</div>
              <div className="text-blue-500 font-medium mb-1">
                {doc.specialty}
              </div>
              <div className="text-xs text-gray-500 mb-2">
                {doc.experience} experience
              </div>
              <p className="text-gray-600 text-sm mb-4">{doc.bio}</p>
              <a
                href={getWhatsAppLink(doc.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-1 bg-green-500 text-white rounded hover:bg-green-600 font-semibold text-sm transition-colors"
              >
                Book Appointment
              </a>
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
