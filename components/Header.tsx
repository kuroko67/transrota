"use client";

import { useState } from "react";
import { Menu, Truck, X } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header className="bg-black-950 border-b border-graphite-800">
      <div className="section-padding mx-auto flex max-w-7xl items-center justify-between h-20 min-h-[72px]">
        <a href="#top" className="flex items-center gap-3 text-white" aria-label="Mudanças e Fretes CID - Início">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-gold-500 to-gold-600 shadow-[0_4px_16px_-4px_rgba(212,168,67,0.4)]">
            <Truck size={24} strokeWidth={2.5} className="text-black" />
          </span>
          <div className="leading-none hidden sm:block text-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
            <div className="font-serif text-2xl lg:text-3xl font-bold tracking-tight leading-none text-white">
              <span className="text-gold-400">C</span><span className="text-white">ID</span>
            </div>
            <div className="mt-1 font-light uppercase tracking-widest text-gold-400 text-[10px] lg:text-xs leading-none">
              FRETES E MUDANÇAS
            </div>
            <div className="mt-1 font-light text-white/90 text-[8px] lg:text-[9px] leading-none">
              SEGURANÇA <span className="mx-1 text-gold-400">|</span> AGILIDADE <span className="mx-1 text-gold-400">|</span> COMPROMISSO
            </div>
            <div className="mt-1 font-[cursive] italic text-gold-400 text-[8px] lg:text-[9px] leading-none">
              Deus no comando, destino ao frente!
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-3 py-2 text-sm font-medium text-gray-300 transition-all duration-200 hover:text-gold-400 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-gold-500 after:transition-all after:duration-200 hover:after:left-0 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 px-5 py-2 text-sm font-semibold text-black shadow-[0_4px_20px_-4px_rgba(212,168,67,0.5)] transition-all duration-200 hover:from-gold-400 hover:to-gold-500 hover:shadow-[0_8px_30px_-6px_rgba(212,168,67,0.6)] hover:-translate-y-0.5 md:inline-flex"
        >
          Solicitar Orçamento
        </a>

        <button
          type="button"
          className="text-white md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-graphite-800 bg-black/95 px-6 py-4 md:hidden animate-slide-down">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-3 py-3 text-base font-medium text-gray-200 rounded-xl transition-colors hover:bg-white/5 hover:text-gold-400"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 px-5 py-3 text-center text-sm font-semibold text-black"
            >
              Solicitar Orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}