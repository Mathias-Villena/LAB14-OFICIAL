import { Metadata } from "next";
import ContactForm from "./ContactForm";
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiPhone } from "react-icons/fi";
import { personalInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Ponte en contacto conmigo para consultas, proyectos o colaboraciones.",
};

export default function ContactPage() {
  return (
    <div className="min-h-[85vh] flex justify-center items-center px-6 py-12 md:py-20 animate-fade-in-up">
      <div className="w-full max-w-5xl rounded-3xl glass-panel overflow-hidden grid md:grid-cols-12 border border-black/5 dark:border-white/5 shadow-2xl transition-colors duration-500">
        
        {/* PANEL IZQUIERDO – INFORMACIÓN DE CONTACTO */}
        <div className="md:col-span-5 bg-black/[0.02] dark:bg-white/5 p-8 md:p-12 flex flex-col justify-center gap-8 border-b md:border-b-0 md:border-r border-black/5 dark:border-white/5">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white font-display mb-2">
              Contacto
            </h2>
            <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
              ¿Tienes un proyecto en mente o quieres conversar? No dudes en escribirme.
            </p>
          </div>

          <div className="space-y-6">
            {/* EMAIL */}
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                <FiMail className="text-xl" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 dark:text-gray-500 uppercase tracking-wider">Email</p>
                <a href={`mailto:${personalInfo.email}`} className="text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white text-sm font-medium transition-colors">
                  {personalInfo.email}
                </a>
              </div>
            </div>

            {/* TELÉFONO */}
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                <FiPhone className="text-xl" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 dark:text-gray-500 uppercase tracking-wider">Teléfono / WhatsApp</p>
                <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white text-sm font-medium transition-colors">
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            {/* UBICACIÓN */}
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                <FiMapPin className="text-xl" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 dark:text-gray-500 uppercase tracking-wider">Ubicación</p>
                <p className="text-slate-700 dark:text-gray-300 text-sm font-medium">{personalInfo.location}</p>
              </div>
            </div>

            {/* REDES SOCIALES */}
            <div className="flex flex-col gap-3 pt-4 border-t border-black/5 dark:border-white/5">
              <p className="text-xs font-bold text-slate-400 dark:text-gray-500 uppercase tracking-wider">Redes Sociales</p>
              <div className="flex gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white text-xs font-semibold transition-all duration-300"
                >
                  <FiGithub className="text-sm" /> GitHub
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white text-xs font-semibold transition-all duration-300"
                >
                  <FiLinkedin className="text-sm" /> LinkedIn
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* PANEL DERECHO – FORMULARIO */}
        <div className="md:col-span-7 p-8 md:p-12">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}


