"use client";

import { Truck } from "lucide-react";
import { motion } from "framer-motion";

export default function RouteDivider() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto h-8 w-full max-w-7xl select-none overflow-hidden px-6"
    >
      <svg
        className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2"
        preserveAspectRatio="none"
      >
        <line
          x1="0"
          y1="0.5"
          x2="100%"
          y2="0.5"
          stroke="#D4A843"
          strokeWidth="2"
          strokeDasharray="10 10"
          opacity="0.3"
        />
      </svg>

      <motion.div
        className="absolute top-1/2 -translate-y-1/2"
        initial={{ left: "0%", opacity: 0 }}
        whileInView={{ left: "92%", opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
      >
        <Truck size={20} className="text-gold-500" strokeWidth={2.25} />
      </motion.div>
    </div>
  );
}