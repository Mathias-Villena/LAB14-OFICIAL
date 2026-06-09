import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types";
import { FiExternalLink, FiInfo } from "react-icons/fi";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isThesis = project.slug === 'stockella';

  return (
    <div
      className="group relative flex flex-col h-full rounded-2xl glass-panel glass-panel-hover overflow-hidden transition-all duration-500"
    >
      {/* Imagen Section */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          loading="lazy"
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60" />

        {/* Thesis Badge */}
        {isThesis && (
          <span className="absolute top-4 right-4 bg-purple-500/25 text-purple-300 border border-purple-500/30 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md">
            Proyecto de Tesis
          </span>
        )}
      </div>

      {/* Info Section */}
      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 font-display group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-slate-600 dark:text-gray-400 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-medium bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-700 dark:text-gray-300 px-2 py-0.5 rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-[11px] font-medium bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-300 px-2 py-0.5 rounded-md">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-4 border-t border-black/5 dark:border-white/5 mt-auto">
          <Link
            href={`/projects/${project.slug}`}
            className="flex-grow flex items-center justify-center gap-2 bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 text-slate-800 dark:text-white text-xs font-semibold py-2.5 px-4 rounded-xl transition-all duration-300"
          >
            <FiInfo className="text-sm" /> Detalle
          </Link>

          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-grow flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-xs font-semibold py-2.5 px-4 rounded-xl shadow-lg shadow-indigo-500/20 transition-all duration-300"
            >
              <FiExternalLink className="text-sm" /> Demo
            </a>
          ) : (
            isThesis && (
              <span className="flex-grow flex items-center justify-center gap-1.5 bg-slate-200 dark:bg-zinc-800 text-slate-400 dark:text-zinc-500 text-xs font-semibold py-2.5 px-4 rounded-xl border border-slate-300 dark:border-zinc-700/50 cursor-not-allowed">
                Próximamente
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
}


