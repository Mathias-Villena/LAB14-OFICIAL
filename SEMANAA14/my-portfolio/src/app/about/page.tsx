import { Metadata } from "next";
import Image from "next/image";
import { personalInfo } from "@/lib/data";
import { FiBookOpen, FiCode, FiAward, FiLayers, FiZap, FiTrendingUp, FiBarChart2 } from "react-icons/fi";
import {
  SiPython, SiJavascript, SiTypescript, SiKotlin, SiReact, SiNextdotjs,
  SiTailwindcss, SiNodedotjs, SiDjango, SiSpringboot, SiPostgresql,
  SiMongodb, SiDocker, SiGithub, SiFlutter,
  SiOpencv, SiPandas, SiBootstrap, SiMysql, SiPostman,
  SiR, SiScikitlearn, SiOpenai, SiDotnet
} from "react-icons/si";
import { FaJava, FaAws, FaMicrosoft, FaFileExcel } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";

export const metadata: Metadata = {
  title: "Sobre Mí",
  description: `Conoce más sobre ${personalInfo.name}, ${personalInfo.title}`,
};

const techIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "Python": SiPython,
  "JavaScript": SiJavascript,
  "TypeScript": SiTypescript,
  "Kotlin": SiKotlin,
  "Java": FaJava,
  "React": SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  "Express": SiNodedotjs,
  "Django": SiDjango,
  "Spring Boot": SiSpringboot,
  "PostgreSQL": SiPostgresql,
  "MongoDB": SiMongodb,
  "AWS (Básico)": FaAws,
  "AWS": FaAws,
  "Docker": SiDocker,
  "Git & GitHub (Avanzado)": SiGithub,
  "Power BI": FiBarChart2,
  "Flutter": SiFlutter,
  "Flutter (Android e iOS)": SiFlutter,
  "Vision por Computadora": SiOpencv,
  "Visión Artificial (OpenCV)": SiOpencv,
  "OpenCV": SiOpencv,
  "Pandas": SiPandas,
  "Microsoft Fabric": FaMicrosoft,
  "Bootstrap": SiBootstrap,
  "HTML5 & CSS3": SiJavascript,
  "Scripts Python CRM": SiPython,
  "Excel Automatizado": FaFileExcel,
  "APIs REST": FiCode,
  "WebSocket": FiZap,
  "MySQL": SiMysql,
  "VS Code": TbBrandVscode,
  "Postman": SiPostman,
  "Metodologías Ágiles (Scrum)": FiTrendingUp,
  "R": SiR,
  "Machine Learning": SiScikitlearn,
  "LLMs Básico": SiOpenai,
  ".NET (en formación)": SiDotnet
};

export default function AboutPage() {
  const skillCategories = [
    {
      title: "Lenguajes & Automatización",
      icon: FiCode,
      skills: ["Python", "JavaScript", "TypeScript", "Kotlin", "Java", "R", "Scripts Python CRM", "Excel Automatizado", "APIs REST"],
      color: "from-blue-500/25 to-indigo-500/25 text-blue-900 dark:text-blue-300 border-blue-500/30"
    },
    {
      title: "IA, Datos & Cloud",
      icon: FiZap,
      skills: ["Machine Learning", "LLMs Básico", "Microsoft Fabric", "Power BI", "Pandas", "AWS (Básico)", "Docker"],
      color: "from-purple-500/25 to-pink-500/25 text-purple-900 dark:text-purple-300 border-purple-500/30"
    },
    {
      title: "Desarrollo Web & Móvil",
      icon: FiLayers,
      skills: ["React", "Next.js", "Flutter (Android e iOS)", "Kotlin Nativo", "Tailwind CSS", "Bootstrap", "Django", "Spring Boot", ".NET (en formación)"],
      color: "from-emerald-500/25 to-teal-500/25 text-emerald-900 dark:text-emerald-300 border-emerald-500/30"
    },
    {
      title: "Bases de Datos & Herramientas",
      icon: FiBookOpen,
      skills: ["MySQL", "MongoDB", "Git & GitHub (Avanzado)", "VS Code", "Postman", "Metodologías Ágiles (Scrum)"],
      color: "from-cyan-500/25 to-blue-500/25 text-cyan-900 dark:text-cyan-300 border-cyan-500/30"
    }
  ];

  const experience = [
    {
      period: "Abril 2026 – Actual",
      role: "Practicante de Automatización – Python",
      company: "Futura",
      location: "San Isidro, Lima",
      achievements: [
        "Automatización de flujos de trabajo del CRM de ventas mediante scripts en Python, reduciendo tiempos de gestión manual.",
        "Minado y extracción de datos de múltiples canales comerciales (Osiptel, clientes retail y otros) para análisis y toma de decisiones.",
        "Generación automatizada de fichas de datos y reportes en Excel con Python, integrando fuentes de información heterogéneas.",
        "Uso de VS Code como entorno principal de desarrollo y control de versiones con Git."
      ]
    },
    {
      period: "Agosto 2025 – Noviembre 2025",
      role: "Pasante de Desarrollo Backend",
      company: "TRUMONT",
      location: "Lima, Perú",
      achievements: [
        "Documentación técnica de endpoints y servicios backend, asegurando claridad y consistencia de las APIs para el equipo de desarrollo.",
        "Análisis y revisión de servicios en servidor para optimizar el flujo de datos entre backend e interfaces de usuario.",
        "Validación de requerimientos técnicos bajo metodologías ágiles (Scrum) garantizando calidad en las entregas."
      ]
    }
  ];

  const education = [
    {
      period: "2023 - Presente",
      degree: "Diseño y Desarrollo de Software (Último Ciclo)",
      institution: "Instituto de Educación Superior TECSUP",
      location: "Lima, Perú",
      details: "Cursos relevantes: Desarrollo de Apps Web, Base de Datos Avanzada, Ingeniería de Requerimientos, Pruebas de Software, Programación Móvil, SAP, .NET, Inteligencia de Negocios (Python/R)."
    }
  ];

  const certifications = [
    { name: "Scrum Fundamentals Certified (SFC)", issuer: "SCRUMstudy" },
    { name: "Certificado en Power BI", issuer: "Netzum | Asignado por Interbank" },
    { name: "Participante en DATA INSIGHTS", issuer: "Data Science Research Perú" },
    { name: "Participante Junior Achievement Perú", issuer: "USIL" }
  ];

  return (
    <div className="container mx-auto px-6 py-12 md:py-20 max-w-6xl animate-fade-in-up">
      {/* Título */}
      <div className="flex flex-col items-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white font-display text-center mb-3">
          Sobre Mí
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
      </div>

      {/* Grid Principal: Info & Foto */}
      <div className="grid md:grid-cols-3 gap-12 items-start mb-24">
        {/* Foto de Perfil */}
        <div className="md:col-span-1 flex justify-center">
          <div className="relative w-full max-w-[280px] aspect-square rounded-2xl overflow-hidden p-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-xl shadow-indigo-500/10">
            <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors duration-500">
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
        </div>

        {/* Presentación */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
            ¡Hola! Soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">{personalInfo.name}</span>
          </h2>

          <div className="text-slate-700 dark:text-gray-300 space-y-4 leading-relaxed text-sm md:text-base">
            <p>
              Estudiante de último ciclo de Diseño y Desarrollo de Software en TECSUP, con experiencia práctica en automatización de procesos con Python, consumo de APIs REST y desarrollo fullstack.
            </p>
            <p>
              Actualmente me desempeño automatizando flujos de datos y procesos CRM en entornos empresariales reales, reduciendo tareas repetitivas mediante código limpio y eficiente. Cuento con formación complementaria y en curso en <strong>Machine Learning, LLMs, Microsoft Fabric y Power BI</strong>.
            </p>
            <p>
              Mi enfoque principal radica en aplicar la automatización, la arquitectura de software avanzada y la inteligencia artificial para resolver problemas prácticos de negocio, análisis de datos y ciberseguridad.
            </p>
          </div>
        </div>
      </div>

      {/* Experiencia Profesional */}
      <section className="mb-24">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white font-display text-center mb-3">
            Experiencia Laboral
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
        </div>

        {/* Timeline Visual Vertical */}
        <div className="relative border-l-2 border-slate-200 dark:border-white/10 pl-8 ml-4 md:ml-8 space-y-12">
          {experience.map((job) => (
            <div key={job.company} className="grid md:grid-cols-12 gap-6 relative group animate-fade-in-up">
              {/* Bullet point glowing */}
              <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-slate-50 dark:bg-slate-950 border-4 border-amber-400 group-hover:scale-125 transition-all duration-300 shadow-[0_0_12px_rgba(245,158,11,0.5)] dark:shadow-[0_0_15px_rgba(245,158,11,0.8)]" />
              
              {/* Columna Izquierda (Cargo, Empresa, Periodo) */}
              <div className="md:col-span-4 space-y-2">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 leading-tight">
                  {job.role}
                </h3>
                <p className="text-sm font-semibold text-slate-700 dark:text-gray-400">{job.company}</p>
                <div className="inline-block text-xs font-semibold px-2.5 py-1 rounded-lg bg-indigo-500/10 dark:bg-indigo-400/10 text-indigo-600 dark:text-indigo-300 border border-indigo-500/20 dark:border-indigo-400/20 mt-1">
                  {job.period}
                </div>
                <p className="text-xs text-slate-600 dark:text-gray-500">{job.location}</p>
              </div>

              {/* Columna Derecha (Logros en tarjeta glass) */}
              <div className="md:col-span-8 p-6 rounded-2xl glass-panel border border-black/5 dark:border-white/5 group-hover:border-indigo-500/10 dark:group-hover:border-indigo-500/20 transition-all duration-300">
                <ul className="list-disc pl-5 space-y-2.5 text-sm text-slate-700 dark:text-gray-300">
                  {job.achievements.map((achievement, idx) => (
                    <li key={idx} className="leading-relaxed">{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Habilidades Técnicas Categorizadas */}
      <section className="mb-24">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white font-display text-center mb-3">
            Habilidades Técnicas
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="p-6 rounded-2xl glass-panel border border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-black/5 dark:bg-white/5 text-indigo-600 dark:text-indigo-400">
                    <Icon className="text-xl" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => {
                    const IconComponent = techIconMap[skill];
                    return (
                      <span
                        key={skill}
                        className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl border bg-gradient-to-r transition-all duration-300 hover:scale-[1.03] ${category.color}`}
                      >
                        {IconComponent && <IconComponent className="text-sm shrink-0" />}
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Educación */}
      <section className="mb-24">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white font-display text-center mb-3">
            Educación
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
        </div>

        <div className="space-y-6">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="p-6 rounded-2xl glass-panel border border-black/5 dark:border-white/5 hover:border-indigo-500/10 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-500" />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-slate-700 dark:text-gray-400 font-semibold">{edu.institution} — {edu.location}</p>
                </div>
                <span className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-indigo-500/10 dark:bg-indigo-400/10 text-indigo-600 dark:text-indigo-300 border border-indigo-500/20 dark:border-indigo-400/20 self-start md:self-auto">
                  {edu.period}
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed font-medium">{edu.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certificaciones & Formación */}
      <section className="mb-12">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white font-display text-center mb-3">
            Certificaciones y Formación
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="p-5 rounded-2xl glass-panel border border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/10 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="p-2.5 rounded-xl bg-black/5 dark:bg-white/5 text-purple-600 dark:text-purple-400 self-start mb-4">
                <FiAward className="text-xl" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white font-display mb-1">{cert.name}</h3>
                <p className="text-slate-600 dark:text-gray-400 text-xs">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
