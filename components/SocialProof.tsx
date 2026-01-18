"use client";

import { Instagram, Linkedin } from "lucide-react";

export default function SocialProof() {
  return (
    <section className="py-10 border-y border-white/5 bg-white/[0.02]">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm text-slate-500 mb-8 font-medium tracking-wide uppercase">
          Connectez-vous à vos plateformes préférées
        </p>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70">
          <div className="flex items-center gap-2 group cursor-default">
            <Instagram size={32} className="text-slate-500 group-hover:text-wizia-pink transition-colors" />
            <span className="text-xl font-semibold text-slate-500 group-hover:text-white transition-colors">Instagram</span>
          </div>

          <div className="flex items-center gap-2 group cursor-default">
            <Linkedin size={32} className="text-slate-500 group-hover:text-blue-500 transition-colors" />
            <span className="text-xl font-semibold text-slate-500 group-hover:text-white transition-colors">LinkedIn</span>
          </div>

          <div className="flex items-center gap-2 group cursor-default">
            {/* X Logo (Custom SVG) */}
            <svg
              viewBox="0 0 24 24"
              width="28"
              height="28"
              fill="currentColor"
              className="text-slate-500 group-hover:text-white transition-colors"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span className="text-xl font-semibold text-slate-500 group-hover:text-white transition-colors">X</span>
          </div>
        </div>
      </div>
    </section>
  );
}
