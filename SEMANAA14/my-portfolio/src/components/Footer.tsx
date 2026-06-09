import { personalInfo } from '@/lib/data';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="w-full border-t border-black/5 dark:border-white/5 bg-slate-100/80 dark:bg-slate-950/80 py-10 backdrop-blur-sm transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-slate-500 dark:text-gray-500 text-sm order-2 md:order-1 text-center md:text-left">
            © {new Date().getFullYear()} <span className="text-slate-700 dark:text-gray-300 font-medium">{personalInfo.name}</span>. Todos los derechos reservados.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 order-1 md:order-2">
            {/* GitHub */}
            {personalInfo.github && (
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:border-black/20 dark:hover:border-white/20 transition-all duration-300"
                aria-label="GitHub"
              >
                <FiGithub className="text-lg" />
              </a>
            )}

            {/* LinkedIn */}
            {personalInfo.linkedin && (
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:border-black/20 dark:hover:border-white/20 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="text-lg" />
              </a>
            )}

            {/* Email */}
            {personalInfo.email && (
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:border-black/20 dark:hover:border-white/20 transition-all duration-300"
                aria-label="Email"
              >
                <FiMail className="text-lg" />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}


