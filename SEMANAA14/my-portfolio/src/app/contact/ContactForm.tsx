"use client";

import { useState } from "react";
import { FiMail, FiUser, FiMessageSquare, FiSend } from "react-icons/fi";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
        Contáctenos
      </h2>
      <p className="text-gray-600 mb-8">
        Completa el formulario y responderé lo antes posible.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setLoading(true);
          setTimeout(() => setLoading(false), 2000);
        }}
        className="space-y-6"
      >
    <div className="relative group">
  <FiUser className="absolute left-4 top-4 text-gray-500 text-xl group-focus-within:text-blue-600 transition" />
  <input
    type="text"
    placeholder="Tu nombre"
    className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-xl shadow-sm
               placeholder-gray-500
               hover:border-blue-400
               focus:border-blue-600 focus:ring-2 focus:ring-blue-300
               outline-none transition"
    required
  />
</div>

<div className="relative group">
  <FiMail className="absolute left-4 top-4 text-gray-500 text-xl group-focus-within:text-blue-600 transition" />
  <input
    type="email"
    placeholder="Correo electrónico"
    className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-xl shadow-sm
               placeholder-gray-500
               hover:border-blue-400
               focus:border-blue-600 focus:ring-2 focus:ring-blue-300
               outline-none transition"
    required
  />
</div>

<div className="relative group">
  <FiMessageSquare className="absolute left-4 top-4 text-gray-500 text-xl group-focus-within:text-blue-600 transition" />
  <textarea
    placeholder="Escribe tu mensaje..."
    rows={5}
    className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-xl shadow-sm
               placeholder-gray-500
               hover:border-blue-400
               focus:border-blue-600 focus:ring-2 focus:ring-blue-300
               outline-none transition"
    required
  ></textarea>
</div>


        {/* Botón */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full flex justify-center items-center gap-2 py-3 rounded-xl text-white font-semibold text-lg shadow-lg transition
            ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
: "bg-blue-600 hover:bg-blue-700"

            }`}
        >
          {loading ? (
            <span className="animate-pulse">Enviando...</span>
          ) : (
            <>
              Enviar <FiSend className="text-xl" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
