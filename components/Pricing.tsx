"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

const priceTiers = [
  {
    name: "Gratuit",
    price: "0",
    description: "Pour découvrir la puissance de l'IA.",
    features: [
      { name: "1 réseau social", included: true },
      { name: "4 publications de posts", included: true },
      { name: "2 newsletters (max 100 contacts)", included: true },
      { name: "20 générations d'images", included: true },
      { name: "Génération de texte illimitée", included: false },
    ],
    cta: "Commencer gratuitement",
    highlight: false,
  },
  {
    name: "Premium",
    monthlyPrice: "17.99",
    yearlyPrice: "179.90",
    description: "Pour les créateurs en pleine croissance.",
    features: [
      { name: "Réseaux sociaux illimités", included: true },
      { name: "100 publications de posts", included: true },
      { name: "10 newsletters (max 500 contacts)", included: true },
      { name: "125 générations d'images", included: true },
      { name: "Génération de texte illimitée", included: true },
    ],
    cta: "Passer au Premium",
    highlight: true,
  },
  {
    name: "Professionnel",
    monthlyPrice: "29.99",
    yearlyPrice: "299.90",
    description: "Pour les experts et agences.",
    features: [
      { name: "Réseaux sociaux illimités", included: true },
      { name: "Publications illimitées", included: true },
      { name: "30 newsletters (max 2000 contacts)", included: true },
      { name: "200 générations d'images", included: true },
      { name: "Génération de texte illimitée", included: true },
    ],
    cta: "Devenir Pro",
    highlight: false,
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Des tarifs simples <br />
            <span className="text-gradient">pour tous les profils</span>
          </h2>

          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm ${!isYearly ? "text-white font-medium" : "text-slate-400"}`}>Mensuel</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="w-14 h-8 bg-white/10 rounded-full relative transition-colors hover:bg-white/20"
            >
              <div
                className={`absolute top-1 w-6 h-6 bg-wizia-cyan rounded-full transition-all duration-300 ${isYearly ? "left-7" : "left-1"
                  }`}
              />
            </button>
            <span className={`text-sm ${isYearly ? "text-white font-medium" : "text-slate-400"}`}>
              Annuel <span className="text-wizia-cyan text-xs ml-1">-20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {priceTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative rounded-3xl p-8 backdrop-blur-xl border transition-all duration-300 flex flex-col ${tier.highlight
                ? "bg-white/10 border-wizia-purple/50 shadow-[0_0_30px_rgba(178,164,255,0.15)] scale-105 z-10"
                : "bg-white/5 border-white/10 hover:border-white/20"
                }`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-wizia-purple to-wizia-pink px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  Populaire
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
                <p className="text-slate-400 text-sm h-10">{tier.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">
                    {tier.price || (isYearly ? tier.yearlyPrice : tier.monthlyPrice)}€
                  </span>
                  <span className="text-slate-400">/{isYearly ? "an" : "mois"}</span>
                </div>
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    {feature.included ? (
                      <Check size={18} className="text-wizia-cyan shrink-0 mt-0.5" />
                    ) : (
                      <X size={18} className="text-slate-600 shrink-0 mt-0.5" />
                    )}
                    <span className={feature.included ? "text-slate-200" : "text-slate-600"}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full font-bold transition-all ${tier.highlight
                  ? "bg-white text-slate-950 hover:bg-slate-200"
                  : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
                  }`}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
