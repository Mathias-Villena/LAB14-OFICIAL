import { Metadata } from 'next';
import { projects } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';

export const metadata: Metadata = {
  title: 'Proyectos',
  description: 'Explora mi colección de proyectos de desarrollo web, tesis y aplicaciones full stack.',
  openGraph: {
    title: 'Proyectos – Portafolio',
    description: 'Explora mi colección de proyectos de desarrollo web, tesis y aplicaciones full stack.',
    images: ['/og-projects.jpg'],
  },
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-6 py-12 md:py-20 max-w-6xl animate-fade-in-up">
      {/* Header */}
      <div className="flex flex-col items-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white font-display text-center mb-3">
          Mis Proyectos
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-4"></div>
        <p className="text-slate-600 dark:text-gray-400 text-sm md:text-base text-center max-w-md leading-relaxed">
          Una muestra seleccionada de plataformas full stack, paneles de administración e investigación de tesis.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
          />
        ))}
      </div>
    </div>
  );
}

