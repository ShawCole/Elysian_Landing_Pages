"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Persona } from "@/lib/personas";

export const FinalCTA = ({ persona }: { persona: Persona }) => {
  const { finalCta } = persona;
  return (
    <section
      id="alignment-audit"
      className="relative bg-[color:var(--color-elysian-cream)] border-y border-[color:var(--color-rule)]"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-10 py-24 lg:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-px bg-[color:var(--color-persona)]" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[color:var(--color-text-soft)]">
              {finalCta.eyebrow}
            </span>
            <span className="w-8 h-px bg-[color:var(--color-persona)]" />
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-balance mb-6">
            {finalCta.headline}
          </h2>

          <p className="text-lg leading-relaxed text-[color:var(--color-text-soft)] max-w-xl mx-auto mb-10 text-pretty">
            {finalCta.subhead}
          </p>

          <a
            href="#"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[color:var(--color-elysian-navy)] text-[color:var(--color-elysian-cream)] font-medium tracking-tight hover:bg-[color:var(--color-elysian-navy-soft)] transition-colors shadow-[0_8px_24px_-8px_rgb(27_43_58/0.4)]"
          >
            {finalCta.button}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <p className="mt-6 text-xs text-[color:var(--color-text-soft)]/80">
            No follow-up if you're not a fit. We mean it.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
