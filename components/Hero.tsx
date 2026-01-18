"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-wizia-purple/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-6 mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-sm md:text-base text-wizia-cyan mb-6 backdrop-blur-sm">
            ✨ L'IA au service de votre communauté
          </span>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Automatisez votre impact <br />
            <span className="text-gradient">sans perdre l'humain</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Wizia est la plateforme tout-en-un pour planifier vos réseaux sociaux et gérer vos newsletters. Laissez l'IA s'occuper de la routine.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-wizia-purple to-wizia-pink rounded-full text-white font-semibold shadow-lg hover:shadow-wizia-pink/25 transition-all hover:scale-105 active:scale-95 flex items-center gap-3">
              <div className="bg-white/20 p-1 rounded-full">
                <Play fill="currentColor" size={16} />
              </div>
              <span>Télécharger pour Android</span>
              <span className="absolute inset-0 rounded-full border border-white/20" />
            </button>

            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white font-medium backdrop-blur-sm transition-all hover:scale-105">
              Découvrir les fonctionnalités
            </button>
          </div>
        </motion.div>

        {/* Floating UI Mockup/Elements placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-20 relative mx-auto max-w-4xl"
        >
          <div className="rounded-2xl glass-panel relative overflow-hidden flex items-center justify-center border-t border-white/20">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/80 z-10" />
            <Image
              src="/dashboard.png"
              alt="Wizia Dashboard"
              width={1200}
              height={675}
              className="w-full h-auto object-cover"
              priority
            />
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-wizia-cyan/20 rounded-full blur-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
