"use client";

import { motion } from "framer-motion";
import { Zap, Mail, BarChart3, Clock } from "lucide-react";

const features = [
  {
    title: "Automatisation Social Media",
    description: "Planifiez vos posts sur Instagram, LinkedIn et X en un clic. L'IA optimise les horaires pour un engagement maximal.",
    icon: <Zap className="w-8 h-8 text-wizia-purple" />,
    gradient: "from-wizia-purple/20 to-transparent",
  },
  {
    title: "Newsletters Intelligentes",
    description: "Transformez vos meilleurs posts en newsletters captivantes. Gestion complète des abonnés et analyses détaillées.",
    icon: <Mail className="w-8 h-8 text-wizia-pink" />,
    gradient: "from-wizia-pink/20 to-transparent",
  },
  {
    title: "Analyses Précises",
    description: "Comprenez votre audience avec des graphiques clairs. Suivez la croissance de votre communauté en temps réel.",
    icon: <BarChart3 className="w-8 h-8 text-wizia-cyan" />,
    gradient: "from-wizia-cyan/20 to-transparent",
  },
  {
    title: "Gain de Temps",
    description: "Libérez-vous des tâches répétitives. Concentrez-vous sur la création de contenu et l'interaction avec vos abonnés.",
    icon: <Clock className="w-8 h-8 text-white" />,
    gradient: "from-white/10 to-transparent",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-slate-950 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Tout ce dont vous avez besoin <br />
            <span className="text-gradient">pour scaler votre communauté</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Une suite d'outils puissants conçus pour les créateurs de contenu modernes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-panel p-8 rounded-2xl relative overflow-hidden group hover:border-wizia-purple/50 transition-colors"
            >
              <div
                className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${feature.gradient} opacity-20 blur-3xl rounded-full group-hover:opacity-40 transition-opacity`}
              />

              <div className="bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6 border border-white/5 relative z-10">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-3 relative z-10">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed relative z-10">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
