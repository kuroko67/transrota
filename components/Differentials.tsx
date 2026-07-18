"use client";

import { motion } from "framer-motion";
import { Headset, Radar, Shield, Zap, type LucideIcon } from "lucide-react";
import { differentials, type Differential } from "@/lib/data";

const iconMap: Record<Differential["icon"], LucideIcon> = {
  zap: Zap,
  radar: Radar,
  shield: Shield,
  headset: Headset,
};

export default function Differentials() {
  return (
    <section id="diferenciais" className="section-padding bg-black-950/30 py-24 lg:py-32" aria-labelledby="diferenciais-title">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl text-center mx-auto">
          <span className="manifest-tag">Nossos Diferenciais</span>
          <h2 id="diferenciais-title" className="mt-6 font-display text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
            Feito para quem não pode errar no prazo
          </h2>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Combinamos frota própria, tecnologia e atendimento direto para que sua
            carga chegue intacta, no prazo e com visibilidade total do trajeto.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {differentials.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                className="group relative rounded-2xl border border-graphite-800 bg-black-900/50 p-8 transition-all duration-500 hover:border-gold-500/30 hover:shadow-[0_20px_40px_-20px_rgba(212,168,67,0.15)] hover:-translate-y-1"
              >
                <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-gold-500/15 to-gold-600/15 border border-gold-500/20 text-gold-400 group-hover:from-gold-500/30 group-hover:to-gold-600/30 group-hover:border-gold-500/40 transition-all duration-500">
                  <Icon size={24} strokeWidth={2.25} />
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}