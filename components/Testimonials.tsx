"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/data";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="section-padding bg-black-950/50 py-24 lg:py-32" aria-labelledby="testimonials-title">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl text-center mx-auto">
          <span className="manifest-tag">Quem transporta com a gente</span>
          <h2 id="testimonials-title" className="mt-6 font-display text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
            Clientes que confiam a carga à Mudanças e Fretes CID
          </h2>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Histórias reais de quem já experimentou a diferença de um transporte direto,
            sem intermediários e com compromisso total.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              className="group relative rounded-2xl border border-graphite-800 bg-black-900/50 p-8 transition-all duration-500 hover:border-gold-500/30 hover:shadow-[0_20px_40px_-20px_rgba(212,168,67,0.1)]"
            >
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Quote className="text-gold-500/20" size={32} />
              </div>

              <div className="mb-6 flex gap-1" aria-label={`${testimonial.rating} de 5 estrelas`}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-gold-400 text-gold-400"
                  />
                ))}
              </div>

              <blockquote className="mb-8 text-base leading-relaxed text-gray-200 relative z-10">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <figcaption className="flex items-center gap-4 pt-6 border-t border-graphite-800">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-500/20 to-gold-600/20 border border-gold-500/30 text-sm font-semibold text-white">
                  {getInitials(testimonial.name)}
                </span>
                <span>
                  <p className="font-medium text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role} — {testimonial.company}</p>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}