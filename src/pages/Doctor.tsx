
import Navbar from "@/components/Navbar";
import { User } from "lucide-react";

const doctors = [
  {
    id: 1,
    name: "Dr. Kavita Rao",
    specialty: "Pathologist",
    experience: "12 years",
    image: "/placeholder.svg",
    bio: "Expert in diagnostic medicine and clinical pathology."
  },
  {
    id: 2,
    name: "Dr. Sameer Kulkarni",
    specialty: "Radiologist",
    experience: "10 years",
    image: "/placeholder.svg",
    bio: "Specializes in advanced imaging and preventive screening."
  },
  {
    id: 3,
    name: "Dr. Anita Sharma",
    specialty: "Consultant Physician",
    experience: "18 years",
    image: "/placeholder.svg",
    bio: "Focused on holistic care and lifestyle coaching."
  }
];

const Doctor = () => (
  <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
    <Navbar />
    <section className="py-12 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Meet Our Doctors</h1>
        <p className="text-xl text-gray-600">Highly qualified experts committed to your health and wellness.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {doctors.map(doc => (
          <div key={doc.id} className="bg-white rounded-2xl shadow p-6 text-center animate-fade-in">
            <img src={doc.image} alt={doc.name} className="w-24 h-24 rounded-full border mx-auto mb-4 object-cover" />
            <div className="font-bold text-xl mb-1">{doc.name}</div>
            <div className="text-blue-500 font-medium mb-1">{doc.specialty}</div>
            <div className="text-xs text-gray-500 mb-2">{doc.experience} experience</div>
            <p className="text-gray-600 text-sm mb-4">{doc.bio}</p>
            <button className="px-4 py-1 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 font-semibold text-sm">Book Appointment</button>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Doctor;
