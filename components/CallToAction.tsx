"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Phone, Send, User, MessageSquare } from "lucide-react";

const WHATSAPP_NUMBER = "5567981448255";

function buildWhatsAppUrl(formData: FormData) {
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;

  let text = `Olá! Gostaria de solicitar um orçamento.\n\n`;
  text += `Nome: ${name}\n`;
  if (phone) text += `Telefone: ${phone}\n`;
  if (message) text += `Mensagem: ${message}\n`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export default function CallToAction() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const url = buildWhatsAppUrl(formData);
    window.open(url, "_blank");
    setSubmitted(true);
  }

  function handleReset() {
    setSubmitted(false);
  }

  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-gradient-to-b from-black via-black-950 to-black py-24 lg:py-32"
      aria-labelledby="cta-title"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,168,67,0.03)_0%,_transparent_70%)]" />
      
      <div className="section-padding relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="manifest-tag inline-flex items-center gap-2">
            <MessageSquare size={12} className="text-gold-400" />
            Fale com o time comercial
          </span>
          <h2 id="cta-title" className="mt-6 font-display text-4xl font-semibold text-white sm:text-5xl lg:text-6xl leading-tight">
            Peça um orçamento <span className="text-gold-400">sem compromisso</span>
          </h2>
          <p className="mt-6 max-w-md text-lg text-gray-300 leading-relaxed">
            Preencha seus dados e abrimos o WhatsApp com a mensagem pronta.
            Retornamos em até 2 horas úteis.
          </p>

          <ul className="mt-10 space-y-4" role="list" aria-label="Benefícios do orçamento">
            {[
              { icon: MessageSquare, text: "Proposta personalizada por tipo de carga" },
              { icon: User, text: "Atendimento por um especialista, não um robô" },
              { icon: CheckCircle2, text: "Sem taxa de orçamento ou de cancelamento" },
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-gray-300"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gold-500/10 text-gold-400">
                  <item.icon size={18} />
                </span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-2xl bg-gradient-to-br from-black-900/80 to-black-950/60 p-8 border border-graphite-800 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/5 via-transparent to-transparent pointer-events-none rounded-2xl" aria-hidden="true" />
          
          {submitted ? (
            <div className="relative flex flex-col items-center justify-center py-12 text-center z-10">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gold-500 to-gold-600 shadow-[0_8px_30px_-8px_rgba(212,168,67,0.5)]">
                <CheckCircle2 size={32} className="text-black" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-white mb-2">
                Redirecionando para o WhatsApp...
              </h3>
              <p className="text-gray-400 mb-8 max-w-sm">
                Sua mensagem foi preparada. Continue a conversa por lá.
              </p>
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 rounded-xl border border-graphite-700 bg-black-900/50 px-6 py-3 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-gold-500/50 hover:text-gold-400 hover:bg-gold-500/5"
              >
                Fazer outra solicitação
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="mb-2 flex items-center gap-2 font-medium text-gray-200">
                    <User size={16} className="text-gold-400" />
                    Nome completo
                  </span>
                  <input
                    name="name"
                    required
                    type="text"
                    placeholder="Seu nome completo"
                    className="w-full rounded-xl border border-graphite-700 bg-black-950/50 px-4 py-3.5 text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 focus:ring-offset-2 focus:ring-offset-black-950"
                  />
                </label>

                <label className="block text-sm">
                  <span className="mb-2 flex items-center gap-2 font-medium text-gray-200">
                    <Phone size={16} className="text-gold-400" />
                    Telefone/WhatsApp
                  </span>
                  <input
                    name="phone"
                    required
                    type="tel"
                    placeholder="(67) 99999-9999"
                    className="w-full rounded-xl border border-graphite-700 bg-black-950/50 px-4 py-3.5 text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 focus:ring-offset-2 focus:ring-offset-black-950"
                  />
                </label>
              </div>

              <label className="block text-sm">
                <span className="mb-2 flex items-center gap-2 font-medium text-gray-200">
                  <MessageSquare size={16} className="text-gold-400" />
                  Mensagem <span className="text-gray-500 text-xs font-normal">(opcional)</span>
                </span>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Detalhes sobre sua mudança ou frete..."
                  className="w-full rounded-xl border border-graphite-700 bg-black-950/50 px-4 py-3.5 text-white outline-none transition-all duration-300 placeholder:text-gray-600 resize-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 focus:ring-offset-2 focus:ring-offset-black-950"
                />
              </label>

              <button
                type="submit"
                className="group relative w-full rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 px-6 py-4 font-semibold text-black shadow-[0_4px_24px_-4px_rgba(212,168,67,0.5)] transition-all duration-300 hover:from-gold-400 hover:to-gold-500 hover:shadow-[0_8px_32px_-6px_rgba(212,168,67,0.6)] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 focus:ring-offset-black"
              >
                <span className="relative flex items-center justify-center gap-2">
                  Enviar no WhatsApp
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" aria-hidden="true" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}