"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { personalInfo } from '@/lib/data';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Inicio', path: '/' },
    { label: 'Proyectos', path: '/projects' },
    { label: 'Sobre Mí', path: '/about' },
    { label: 'Contacto', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-black/5 dark:border-white/5 backdrop-blur-md transition-all duration-300">
      <nav className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <Link href="/" className="group flex items-center gap-2">
            <span className="text-lg md:text-xl font-bold font-display tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 group-hover:opacity-85 transition-opacity">
              {personalInfo.name}
            </span>
          </Link>

          {/* Links & Toggle */}
          <div className="flex items-center gap-2 md:gap-4">
            <ul className="flex items-center gap-0.5 md:gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className={`relative px-2.5 md:px-4 py-2 text-xs md:text-sm font-medium rounded-full transition-all duration-300 ${
                        isActive
                          ? 'text-slate-900 dark:text-white bg-black/5 dark:bg-white/10'
                          : 'text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400"></span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}


