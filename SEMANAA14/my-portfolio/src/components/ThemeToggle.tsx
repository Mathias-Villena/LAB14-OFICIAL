/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    
    // Default to dark mode for premium feel, otherwise load saved
    const initialTheme = savedTheme || "dark";
    setTheme(initialTheme);
    
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  if (!mounted) {
    return <div className="w-10 h-10 rounded-xl" />;
  }

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 text-slate-800 dark:text-slate-200 flex items-center justify-center transition-all duration-300 cursor-pointer active:scale-95"
      aria-label="Alternar Tema"
    >
      {theme === "dark" ? (
        <FiSun className="text-lg text-amber-400" />
      ) : (
        <FiMoon className="text-lg text-indigo-600" />
      )}
    </button>
  );
}
