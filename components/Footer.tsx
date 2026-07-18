"use client";

import { Facebook, Instagram, MapPin, Phone, Truck, Send } from "lucide-react";
import { brandName, brandPillars, brandTagline, navLinks } from "@/lib/data";

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/cid.transportes?utm_source=qr&igsh=MzJmeDVlZ2I4eDRi" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com/mudancasefretescid" },
];

const WHATSAPP_URL = "https://wa.me/5567999130112";

export default function Footer() {
  return (
    <footer className="bg-black-950 border-t border-graphite-800">
      <div className="section-padding mx-auto max-w-7xl py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <a href="#top" className="flex items-center gap-3 text-white" aria-label="Mudancas e Fretes CID - Inicio">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-gold-500 to-gold-600 shadow-[0_4px_16px_-4px_rgba(212,168,67,0.5)]">
                <Truck size={24} strokeWidth={2.5} className="text-black" />
              </span>
              <div className="leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                <div className="font-serif text-2xl lg:text-3xl font-bold tracking-tight leading-none text-white">
                  <span className="text-gold-400">C</span><span className="text-white">ID</span>
                </div>
                <div className="mt-1 font-light uppercase tracking-widest text-gold-400 text-[10px] lg:text-xs leading-none">
                  FRETES E MUDANCAS
                </div>
                <div className="mt-1 font-light text-white/90 text-[8px] lg:text-[9px] leading-none">
                  SEGURANCA <span className="mx-1 text-gold-400">|</span> AGILIDADE <span className="mx-1 text-gold-400">|</span> COMPROMISSO
                </div>
                <div className="mt-1 font-[cursive] italic text-gold-400 text-[8px] lg:text-[9px] leading-none">
                  Deus no comando, destino ao frente!
                </div>
              </div>
            </a>
            <p className="mt-6 text-sm text-gray-400 leading-relaxed">
              Transporte com caminhao proprio, atendimento direto, sem
              intermediarios. Do combinado a entrega.
            </p>
            <p className="mt-4 font-display text-sm italic text-gray-500">
              &ldquo;{brandTagline}&rdquo;
            </p>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-gray-500">
              {brandPillars.join(" \u2022 ")}
            </p>
            <div className="mt-8 flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-graphite-700 text-gray-300 transition-all duration-300 hover:border-gold-500/50 hover:text-gold-400 hover:bg-gold-500/5"
                >
                  <Icon size={18} />
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp - Mudancas e Fretes CID"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white transition-all duration-300 hover:bg-green-500 hover:scale-105 hover:shadow-[0_8px_24px_-8px_rgba(37,211,102,0.5)]"
              >
                <Send size={18} className="rotate-45" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-gray-500 mb-6">
              Navegacao
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors duration-200 hover:text-gold-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contato"
                  className="text-sm text-gray-300 transition-colors duration-200 hover:text-gold-400"
                >
                  Solicitar orcamento
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-gray-500 mb-6">
              Servicos
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>Mudancas residenciais e comerciais</li>
              <li>Frete fracionado e carga fechada</li>
              <li>Transporte de moveis e eletrodomesticos</li>
              <li>Rotas sob encomenda para todo Mato Grosso do Sul</li>
              <li>Embalagem e montagem de moveis</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-gray-500 mb-6">
              Contato
            </h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold-500 shrink-0" />
                <a href="tel:+5567999130112" className="hover:text-gold-400 transition-colors">
                  (67) 99913-0112
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold-500 shrink-0 mt-0.5" />
                <span>Atendimento em Campo Grande - MS e regiao</span>
              </li>
              <li className="flex items-center gap-3">
                <Send size={18} className="text-green-500 shrink-0" />
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                  WhatsApp direto
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-graphite-800 pt-8 text-xs text-gray-500 lg:flex-row lg:items-center lg:justify-between">
          <p>\u00A9 {new Date().getFullYear()} {brandName}. Todos os direitos reservados.</p>
          <p className="flex items-center gap-2">
            Transporte com qualidade, seguranca e pontualidade.
          </p>
        </div>
      </div>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-[0_8px_30px_-8px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_40px_-10px_rgba(37,211,102,0.6)] animate-bounce-gentle"
      >
        <Send size={28} className="rotate-45" />
      </a>

      <style jsx>{`
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-bounce-gentle {
          animation: bounce-gentle 2.5s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}