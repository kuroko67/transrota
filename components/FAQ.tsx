"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { faqItems } from "@/lib/data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggle(index: number) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <section id="faq" className="section-padding bg-black-950/30 py-24 lg:py-32" aria-labelledby="faq-title">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <span className="manifest-tag">Dúvidas frequentes</span>
          <h2 id="faq-title" className="mt-6 font-display text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
            Perguntas frequentes
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Não encontrou o que procura? <a href="#contato" className="text-gold-400 hover:text-gold-300 underline underline-offset-2">Fale conosco</a>.
          </p>
        </div>

        <div className="mt-14 divide-y divide-graphite-800">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="group rounded-2xl border border-graphite-800 bg-black-900/50 transition-all duration-300 hover:border-graphite-700"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left"
                >
                  <span className="font-display text-lg font-medium text-white pr-10">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={22}
                    className={`shrink-0 text-gold-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-base leading-relaxed text-gray-300">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}