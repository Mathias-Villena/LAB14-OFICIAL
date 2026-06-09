"use client";

import { useState } from "react";
import { FiMail, FiUser, FiMessageSquare, FiSend, FiCheckCircle } from "react-icons/fi";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simular envío de datos
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1800);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in-up">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 animate-bounce">
          <FiCheckCircle className="text-3xl" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display mb-2">¡Mensaje Enviado!</h3>
        <p className="text-slate-600 dark:text-gray-400 text-sm max-w-sm mb-6 leading-relaxed">
          Muchas gracias por escribir. Me pondré en contacto contigo lo antes posible.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-xs text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-semibold underline decoration-2 underline-offset-4 cursor-pointer"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white font-display mb-2">
        Enviar Mensaje
      </h2>
      <p className="text-slate-600 dark:text-gray-400 text-sm mb-8 leading-relaxed">
        Completa el formulario y responderé a tu correo en la brevedad posible.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* NOMBRE */}
        <div className="relative group">
          <FiUser className="absolute left-4 top-4 text-slate-400 dark:text-gray-500 text-xl group-focus-within:text-indigo-600 dark:group-focus-within:text-indigo-400 transition-colors" />
          <input
            type="text"
            placeholder="Tu nombre"
            className="w-full pl-12 pr-4 py-3.5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl text-slate-950 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 outline-none hover:border-black/25 dark:hover:border-white/20 focus:border-indigo-500/80 focus:ring-4 focus:ring-indigo-500/15 transition-all duration-300"
            required
          />
        </div>

        {/* EMAIL */}
        <div className="relative group">
          <FiMail className="absolute left-4 top-4 text-slate-400 dark:text-gray-500 text-xl group-focus-within:text-indigo-600 dark:group-focus-within:text-indigo-400 transition-colors" />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full pl-12 pr-4 py-3.5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl text-slate-950 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 outline-none hover:border-black/25 dark:hover:border-white/20 focus:border-indigo-500/80 focus:ring-4 focus:ring-indigo-500/15 transition-all duration-300"
            required
          />
        </div>

        {/* MENSAJE */}
        <div className="relative group">
          <FiMessageSquare className="absolute left-4 top-4 text-slate-400 dark:text-gray-500 text-xl group-focus-within:text-indigo-600 dark:group-focus-within:text-indigo-400 transition-colors" />
          <textarea
            placeholder="Escribe tu mensaje..."
            rows={5}
            className="w-full pl-12 pr-4 py-3.5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl text-slate-950 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 outline-none hover:border-black/25 dark:hover:border-white/20 focus:border-indigo-500/80 focus:ring-4 focus:ring-indigo-500/15 transition-all duration-300"
            required
          ></textarea>
        </div>

        {/* BOTÓN */}
        <button
          type="submit"
          disabled={loading}
          className="w-full flex justify-center items-center gap-2 py-3.5 rounded-2xl text-white font-bold text-base bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-95 shadow-lg shadow-indigo-500/20 active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              <span>Enviando...</span>
            </div>
          ) : (
            <>
              Enviar Mensaje <FiSend className="text-lg" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}


