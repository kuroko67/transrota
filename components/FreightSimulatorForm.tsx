"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Loader2, MapPin, PackageSearch, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const cargoTypes = [
  "Carga geral",
  "Carga fracionada",
  "Carga perigosa",
  "Refrigerada",
  "Carga fechada",
];

const WHATSAPP_NUMBER = "5567981448255";

type SimulationState = "idle" | "loading" | "done";

export default function FreightSimulatorForm() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [cargoType, setCargoType] = useState(cargoTypes[0]);
  const [status, setStatus] = useState<SimulationState>("idle");

  function buildWhatsAppUrl(origin: string, destination: string, cargoType: string) {
    const message = `Olá! Gostaria de solicitar um orçamento de frete.\n\nOrigem: ${origin}\nDestino: ${destination}\nTipo de carga: ${cargoType}\n\nPor favor, me retornem com valores e prazos.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!origin || !destination) return;

    setStatus("loading");
    window.setTimeout(() => {
      const url = buildWhatsAppUrl(origin, destination, cargoType);
      window.open(url, "_blank");
      setStatus("done");
    }, 800);
  }

  function handleReset() {
    setStatus("idle");
    setOrigin("");
    setDestination("");
    setCargoType(cargoTypes[0]);
  }

  return (
    <div className="w-full rounded-2xl border border-graphite-700 bg-black-900/50 p-6 shadow-card-dark backdrop-blur sm:p-7">
      <div className="mb-5 flex items-center gap-2">
        <PackageSearch className="text-gold-500" size={22} />
        <h3 className="font-display text-xl font-semibold text-white">
          Simular frete
        </h3>
      </div>

      <AnimatePresence mode="wait">
        {status !== "done" ? (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="space-y-4"
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-1.5 flex items-center gap-1.5 font-medium text-gray-300">
                  <MapPin size={15} className="text-gold-500" />
                  Origem
                </span>
                <input
                  required
                  type="text"
                  placeholder="Cidade / UF"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className="w-full rounded-lg border border-graphite-700 bg-black-950 px-3.5 py-2.5 text-white outline-none transition-colors focus:border-gold-500"
                />
              </label>

              <label className="block text-sm">
                <span className="mb-1.5 flex items-center gap-1.5 font-medium text-gray-300">
                  <MapPin size={15} className="text-gray-500" />
                  Destino
                </span>
                <input
                  required
                  type="text"
                  placeholder="Cidade / UF"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full rounded-lg border border-graphite-700 bg-black-950 px-3.5 py-2.5 text-white outline-none transition-colors focus:border-gold-500"
                />
              </label>
            </div>

            <label className="block text-sm">
              <span className="mb-1.5 block font-medium text-gray-300">
                Tipo de carga
              </span>
              <select
                value={cargoType}
                onChange={(e) => setCargoType(e.target.value)}
                className="w-full rounded-lg border border-graphite-700 bg-black-950 px-3.5 py-2.5 text-white outline-none transition-colors focus:border-gold-500"
              >
                {cargoTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>

            <button
              type="submit"
              disabled={status === "loading"}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-gold-500 px-5 py-3 font-semibold text-black shadow-gold-glow transition-colors hover:bg-gold-400 hover:shadow-gold-glow-lg disabled:opacity-70"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Preparando WhatsApp...
                </>
              ) : (
                <>
                  Simular e abrir WhatsApp
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <div className="rounded-lg border border-gold-500/20 bg-gold-500/5 p-4">
              <p className="font-mono text-xs uppercase tracking-widest text-gold-500">
                Estimativa de trajeto
              </p>
              <p className="mt-1 font-display text-lg font-semibold text-white">
                {origin} <ArrowRight className="inline" size={16} />{" "}
                {destination}
              </p>
              <p className="mt-1 text-sm text-gray-400">
                Carga: {cargoType} • Prazo estimado: 2 a 4 dias úteis
              </p>
            </div>
            <p className="text-sm text-gray-400">
              Essa é uma estimativa rápida. Para um valor exato e agenda de
              coleta, fale com nosso time comercial.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Gostaria de solicitar um orçamento de frete.\n\nOrigem: ${origin}\nDestino: ${destination}\nTipo de carga: ${cargoType}\n\nPor favor, me retornem com valores e prazos.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-lg bg-gold-500 px-5 py-3 text-center font-semibold text-black shadow-gold-glow transition-colors hover:bg-gold-400 hover:shadow-gold-glow-lg"
              >
                Solicitar orçamento no WhatsApp
              </a>
              <button
                type="button"
                onClick={handleReset}
                className="rounded-lg border border-graphite-700 px-5 py-3 text-sm font-medium text-gray-300 transition-colors hover:border-gold-500 hover:text-gold-400"
              >
                Simular outra rota
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}