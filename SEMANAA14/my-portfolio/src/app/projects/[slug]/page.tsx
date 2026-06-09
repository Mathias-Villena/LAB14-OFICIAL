import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import { projects } from '@/lib/data';
import { FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi';

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate static params
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata dynamically
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Proyecto no encontrado',
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

// Component Page
export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const isThesis = project.slug === 'stockella';

  return (
    <div className="container mx-auto px-6 py-12 md:py-20 max-w-4xl animate-fade-in-up">
      {/* Back button */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white mb-8 transition-colors"
      >
        <FiArrowLeft /> Volver a Proyectos
      </Link>

      <article className="glass-panel border border-black/5 dark:border-white/5 rounded-3xl overflow-hidden p-8 md:p-12 shadow-2xl">
        
        {/* Title */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white font-display tracking-tight">
            {project.title}
          </h1>
          {isThesis && (
            <span className="bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/20 px-4 py-1.5 rounded-full text-xs font-bold">
              Proyecto de Tesis
            </span>
          )}
        </div>

        {/* Image */}
        <div className="relative w-full h-64 md:h-[400px] mb-8 rounded-2xl overflow-hidden p-1 bg-gradient-to-tr from-black/5 to-black/10 dark:from-white/5 dark:to-white/10 shadow-lg">
          <div className="relative w-full h-full rounded-[14px] overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              priority
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-display mb-3">Sobre el Proyecto</h2>
            <p className="text-slate-700 dark:text-gray-300 text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-display mb-4">
              Tecnologías Utilizadas
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-700 dark:text-gray-300 px-3.5 py-1.5 rounded-xl text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-6 border-t border-black/5 dark:border-white/5">
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold px-6 py-3.5 rounded-2xl shadow-lg shadow-indigo-500/20 transition-all duration-200"
              >
                Ver Demo En Vivo <FiExternalLink />
              </a>
            ) : (
              isThesis && (
                <span className="inline-flex items-center gap-2 bg-slate-200 dark:bg-zinc-800 text-slate-400 dark:text-zinc-500 border border-slate-300 dark:border-zinc-700/50 font-bold px-6 py-3.5 rounded-2xl cursor-not-allowed">
                  Despliegue Próximamente
                </span>
              )
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 text-slate-800 dark:text-white font-bold px-6 py-3.5 rounded-2xl transition-all duration-300"
              >
                Ver Código <FiGithub />
              </a>
            )}
          </div>
        </div>

      </article>
    </div>
  );
}

