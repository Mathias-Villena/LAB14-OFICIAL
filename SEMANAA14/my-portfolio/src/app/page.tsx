import Image from 'next/image';
import Link from 'next/link';

import { projects, personalInfo } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';
import Typewriter from '@/components/Typewriter';
import { FiArrowRight, FiCode, FiLayers, FiCpu, FiDatabase } from 'react-icons/fi';

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  const miniSkills = [
    { name: 'Frontend', desc: 'React, Next.js, TypeScript, Tailwind', icon: FiLayers, color: 'text-indigo-600 dark:text-indigo-400' },
    { name: 'Backend', desc: 'Node.js, Express, Python, PostgreSQL', icon: FiCode, color: 'text-emerald-600 dark:text-emerald-400' },
    { name: 'Mobile / IA', desc: 'Flutter, Visión Artificial (OpenCV)', icon: FiCpu, color: 'text-purple-600 dark:text-purple-400' },
    { name: 'Automatización & BD', desc: 'Scripts Python, Excel, APIs REST, SQL, MongoDB', icon: FiDatabase, color: 'text-cyan-600 dark:text-cyan-400' },
  ];

  return (
    <div className="container mx-auto px-6 py-12 md:py-20 max-w-6xl relative">
      
      {/* Hero Section */}
      <section className="text-center mb-28 flex flex-col items-center animate-fade-in-up">
        {/* Avatar Ring */}
        <div className="relative w-36 h-36 mb-8 group">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-1 animate-pulse-glow" />
          <div className="absolute inset-0.5 rounded-full bg-slate-50 dark:bg-slate-950 transition-colors duration-500" />
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-50 dark:border-slate-950 transition-colors duration-500">
            <Image
              src={personalInfo.avatar}
              alt={personalInfo.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
              sizes="144px"
            />
          </div>
        </div>

        {/* Title (Typewriter once) */}
        <h1 className="text-4xl md:text-6xl font-black font-display tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-indigo-950 to-purple-900 dark:from-white dark:via-indigo-100 dark:to-purple-300 mb-4 leading-tight min-h-[50px] md:min-h-[72px]">
          <Typewriter words={[personalInfo.name]} typingSpeed={70} />
        </h1>

        {/* Subtitle (Typewriter cycle) */}
        <h2 className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-6 font-display min-h-[36px]">
          <Typewriter words={["Software Developer", "Python · Automatización · IA Aplicada", "Egresado de Software de TECSUP"]} delay={2500} typingSpeed={80} />
        </h2>

        {/* Description */}
        <p className="text-slate-600 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          {personalInfo.description}
        </p>


        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-sm">
          <Link
            href="/projects"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-95 text-white font-semibold px-8 py-3.5 rounded-2xl shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all duration-300 group"
          >
            Ver Proyectos <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/about"
            className="w-full sm:w-auto flex items-center justify-center bg-slate-200/50 hover:bg-slate-200/80 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-300/50 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 text-slate-800 dark:text-white font-semibold px-8 py-3.5 rounded-2xl transition-all duration-300"
          >
            Sobre Mí
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mb-28">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white font-display text-center mb-3">
            Proyectos Destacados
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      </section>

      {/* Skills / Tech Overview Grid */}
      <section className="mb-12">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white font-display text-center mb-3">
            Áreas de Especialización
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {miniSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="p-6 rounded-2xl glass-panel border border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/10 hover:shadow-xl transition-all duration-300 flex flex-col items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-black/5 dark:bg-white/5">
                  <Icon className={`text-xl ${skill.color}`} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display mb-1">{skill.name}</h3>
                  <p className="text-slate-600 dark:text-gray-400 text-xs leading-relaxed">{skill.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      
    </div>
  );
}


