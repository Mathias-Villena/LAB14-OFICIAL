import { personalInfo } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} {personalInfo.name}. Todos los derechos reservados.
          </p>

          {/* Social Links */}
          <div className="flex gap-6">

            {/* GitHub */}
            {personalInfo.github && (
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="GitHub"
              >
                GitHub
              </a>
            )}

            {/* LinkedIn */}
            {personalInfo.linkedin && (
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
            )}

            {/* Email */}
            {personalInfo.email && (
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-gray-400 hover:text-white transition"
                aria-label="Email"
              >
                Email
              </a>
            )}

          </div>
        </div>

      </div>
    </footer>
  );
}
