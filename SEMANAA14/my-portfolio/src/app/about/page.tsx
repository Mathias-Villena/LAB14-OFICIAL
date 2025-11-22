import { Metadata } from "next";
import Image from "next/image";
import { personalInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sobre Mí",
  description: `Conoce más sobre ${personalInfo.name}, ${personalInfo.title}`,
};

export default function AboutPage() {
  const skills = [
    "JavaScript / TypeScript",
    "React & Next.js",
    "Node.js & Express",
    "PostgreSQL & MongoDB",
    "Git & GitHub",
    "Docker",
    "AWS",
  ];

  return (
    <div className="container mx-auto px-4 py-12">

      {/* Título */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Sobre Mí</h1>
      </div>

      {/* Grid principal */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">

        {/* Foto */}
        <div className="md:col-span-1">
          <div className="relative w-full aspect-square rounded-lg overflow-hidden">
            <Image
              src={personalInfo.avatar}
              alt={personalInfo.name}
              fill
              loading="lazy"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        {/* Presentación */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ¡Hola! Soy {personalInfo.name}
          </h2>

          <div className="prose text-gray-700 space-y-4">
            <p>
              Soy un desarrollador full stack en formación y apasionado por construir experiencias digitales modernas, escalables y con un enfoque real en solucionar problemas.

Estudio Diseño y Desarrollo de Software en TECSUP, donde he tenido la oportunidad de crear proyectos usando tecnologías como Next.js, React, Node.js, Django, Spring Boot, Kotlin, Flutter y AWS. Me gusta trabajar con arquitectura limpia, buenas prácticas y herramientas actuales que me permitan entregar software de calidad.

Disfruto mucho crear productos de principio a fin: desde el diseño de la arquitectura, pasando por el backend y la API, hasta el frontend o la aplicación móvil. Me considero una persona curiosa, perseverante y con la mentalidad de siempre aprender y mejorar.

            </p>

            <p>
              Actualmente estoy desarrollando un proyecto enfocado en PYMES: un sistema inteligente de inventarios basado en código de barras y visión por computadora, integrando cloud, IA y desarrollo multiplataforma.

Cuando no estoy programando, me gusta investigar nuevas tecnologías, mejorar proyectos personales y compartir conocimientos con mis compañeros. Me motiva crear soluciones que hagan la diferencia.
            </p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Habilidades Técnicas</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <p className="font-semibold text-gray-800">{skill}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
