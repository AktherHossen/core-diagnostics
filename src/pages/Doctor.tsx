
import Navbar from "@/components/Navbar";
import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

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

const Doctor = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | "">("");

  const filteredDoctors =
    selectedSpecialty && selectedSpecialty !== "All"
      ? doctors.filter((doc) => doc.specialty === selectedSpecialty)
      : doctors;

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
                <SelectItem value="">All</SelectItem>
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
              <button className="px-4 py-1 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 font-semibold text-sm">
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
