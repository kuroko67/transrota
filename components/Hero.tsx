"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { brandPillars, brandTagline } from "@/lib/data";

const trustPoints = [
  "Seguro de carga incluso",
  "Caminhão próprio, sem terceirização",
  "Contato direto com o motorista",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-black pt-32 lg:pt-40 pb-20 lg:pb-28"
    >
      {/* Video Background - Full Screen Stretched */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/images/hero-poster.jpg"
          aria-hidden="true"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_rgba(212,168,67,0.08)_0%,_transparent_60%)]" />
      </div>
      
      <div className="section-padding relative mx-auto max-w-7xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="manifest-tag inline-flex items-center gap-2">
            <svg className="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Caminhão próprio e atendimento direto
          </span>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs uppercase tracking-widest text-gold-400">
            {brandPillars.map((pillar, index) => (
              <span key={pillar} className="flex items-center gap-3">
                {pillar}
                {index < brandPillars.length - 1 && (
                  <span className="text-white/20">•</span>
                )}
              </span>
            ))}
          </div>

          <h1 className="mt-8 font-display text-5xl font-semibold text-white leading-[1.05] sm:text-6xl lg:text-7xl xl:text-8xl">
            Sua carga no destino certo,
            <br />
            <span className="text-gold-400">direto com quem dirige.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-gray-300 leading-relaxed">
            A Mudanças e Fretes CID transporta sua mercadoria com caminhão
            próprio, atenção direta do motorista e compromisso com o prazo
            combinado — sem intermediários no caminho.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contato"
              className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 px-8 py-4 text-base font-semibold text-black shadow-[0_4px_24px_-4px_rgba(212,168,67,0.5)] transition-all duration-300 hover:from-gold-400 hover:to-gold-500 hover:shadow-[0_8px_32px_-6px_rgba(212,168,67,0.6)] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 focus:ring-offset-black"
            >
              <span className="relative">Solicitar Orçamento</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
            <a
              href="#frota"
              className="group relative inline-flex items-center justify-center gap-2 rounded-xl border-2 border-graphite-700 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-gold-500/50 hover:bg-gold-500/5 hover:shadow-[0_0_30px_rgba(212,168,67,0.1)]"
            >
              Nosso Caminhão
            </a>
          </div>

          <ul className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-x-10 sm:gap-y-4" role="list" aria-label="Diferenciais do serviço">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-3 text-sm text-gray-300">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gold-500/10 text-gold-400">
                  <CheckCircle2 size={16} />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <p className="mt-12 font-display text-base italic text-gray-500">
            &ldquo;{brandTagline}&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}