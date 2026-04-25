"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import type { Persona } from "@/lib/personas";

export const FAQSection = ({ persona }: { persona: Persona }) => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative bg-[color:var(--color-bg)]">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-[color:var(--color-persona)]" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[color:var(--color-text-soft)]">
              Honest answers
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-[40px] leading-[1.15] text-balance">
            What people actually want to know.
          </h2>
        </motion.div>

        <div className="border-t border-[color:var(--color-rule)]">
          {persona.faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-[color:var(--color-rule)]">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full py-6 flex items-start justify-between gap-6 text-left group"
                >
                  <span className="flex-1 font-display text-lg leading-snug text-[color:var(--color-text)] group-hover:text-[color:var(--color-persona)] transition-colors">
                    {item.q}
                  </span>
                  <span className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center ring-1 ring-[color:var(--color-rule-strong)] text-[color:var(--color-text)]">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
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
                      <p className="pb-6 pr-14 text-[15px] leading-relaxed text-[color:var(--color-text-soft)] text-pretty">
                        {item.a}
                      </p>
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
};
