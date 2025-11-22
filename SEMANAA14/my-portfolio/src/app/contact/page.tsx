import { Metadata } from "next";
import ContactForm from "./ContactForm";
import { FiMail, FiMapPin, FiLink } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Ponte en contacto conmigo para consultas, proyectos o colaboraciones.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center px-4 py-20">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">

{/* PANEL IZQUIERDO – INFORMACIÓN DE CONTACTO */}
<div className="bg-gradient-to-br from-blue-50 to-blue-100 p-12 flex flex-col justify-center gap-10 rounded-l-3xl">

  <h2 className="text-3xl font-bold text-gray-900">
    Información de contacto
  </h2>

  {/* EMAIL */}
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center">
      <FiMail className="text-2xl text-blue-700" />
    </div>
    <div>
      <p className="font-semibold text-gray-900">Email</p>
      <p className="text-gray-700">mathias.villena@tecsup.edu.pe</p>
    </div>
  </div>

  {/* UBICACIÓN */}
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center">
      <FiMapPin className="text-2xl text-blue-700" />
    </div>
    <div>
      <p className="font-semibold text-gray-900">Ubicación</p>
      <p className="text-gray-700">Disponible para trabajo remoto</p>
    </div>
  </div>

  {/* REDES SOCIALES */}
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center">
      <FiLink className="text-2xl text-blue-700" />
    </div>
    <div>
      <p className="font-semibold text-gray-900">Redes Sociales</p>
      <p className="text-gray-700 flex gap-4">
        <a href="https://github.com/mvillena" className="hover:underline">GitHub</a>
        <a href="https://linkedin.com" className="hover:underline">LinkedIn</a>
      </p>
    </div>
  </div>

</div>



        {/* PANEL DERECHO – FORM GOD */}
        <div className="p-12 bg-white">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
