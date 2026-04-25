"use client";

import { motion } from "framer-motion";
import type { Persona } from "@/lib/personas";

export const MirrorSection = ({ persona }: { persona: Persona }) => {
  const { mirror } = persona;
  return (
    <section className="relative bg-[color:var(--color-elysian-cream)] border-y border-[color:var(--color-rule)]">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-px bg-[color:var(--color-persona)]" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[color:var(--color-text-soft)]">
              {mirror.eyebrow}
            </span>
          </div>

          <h2 className="font-display text-3xl md:text-[40px] leading-[1.15] text-balance mb-8 max-w-3xl">
            {mirror.title}
          </h2>

          <div className="space-y-5 text-lg leading-relaxed text-[color:var(--color-text-soft)] max-w-2xl text-pretty">
            {mirror.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
