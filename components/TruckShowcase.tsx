"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Boxes, PackageCheck, Truck, Weight, X, Expand } from "lucide-react";
import { truckGallery, truckSpecs } from "@/lib/data";
import { useState } from "react";

export default function TruckShowcase() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="frota" className="bg-black-950/50 py-24 lg:py-32" aria-labelledby="frota-title">
      <div className="section-padding mx-auto max-w-7xl">
        <div className="max-w-3xl text-center mx-auto">
          <span className="manifest-tag">Nosso Caminhão</span>
          <h2 id="frota-title" className="mt-6 font-display text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
            Conheça o caminhão que vai levar sua carga
          </h2>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Nada de frota terceirizada: este é o veículo que sai comigo para cada
            rota, com manutenção em dia e pronto para o seu frete.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {truckGallery.map((photo, index) => (
            <motion.figure
              key={photo.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              className="group relative h-80 overflow-hidden rounded-2xl shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)] cursor-zoom-in"
              onClick={() => setSelectedImage(photo.src)}
            >
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between">
                <p className="font-medium text-white text-base">{photo.caption}</p>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Expand size={14} />
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mt-16 rounded-2xl border border-graphite-800 bg-black-900/50 p-8 sm:p-10"
        >
          <div className="flex items-center gap-3 justify-center mb-8">
            <Truck size={24} className="text-gold-500" />
            <h3 className="font-display text-xl font-semibold text-white">Ficha técnica</h3>
          </div>

          <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 max-w-4xl mx-auto">
            {[
              { icon: Truck, label: "Modelo", value: truckSpecs.model },
              { icon: Truck, label: "Carroceria", value: truckSpecs.bodyType },
              { icon: Weight, label: "Capacidade", value: truckSpecs.capacity },
              { icon: Boxes, label: "Volume útil", value: truckSpecs.volume },
              { icon: PackageCheck, label: "Ideal para", value: truckSpecs.idealFor },
            ].map((item) => (
              <div key={item.label} className="border-l-2 border-gold-500/30 pl-6 text-center">
                <dt className="flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-widest text-gold-400 mb-2">
                  <item.icon size={14} />
                  {item.label}
                </dt>
                <dd className="font-display text-lg font-semibold text-white">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 text-xs text-gray-500 text-center">
            * Valores de capacidade e volume são estimados — atualize com os
            dados reais do seu caminhão antes de publicar a página.
          </p>
        </motion.div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Visualização em tela cheia"
            style={{ zIndex: 9999 }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-[95vw] max-h-[95vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-video max-h-[90vh] max-w-[95vw]">
                <Image
                  src={selectedImage}
                  alt="Caminhão em tela cheia"
                  fill
                  className="object-contain rounded-xl shadow-[0_0_60px_rgba(0,0,0,0.8)]"
                  priority
                  sizes="100vw"
                />
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white hover:bg-black/90 transition-colors duration-200"
                aria-label="Fechar visualização"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}