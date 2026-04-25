"use client";

import { motion } from "framer-motion";
import type { Persona } from "@/lib/personas";

export const MechanismSection = ({ persona }: { persona: Persona }) => {
  const { mechanism, hero } = persona;
  return (
    <section className="relative bg-[color:var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[color:var(--color-persona)]">
                The mechanism
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-[40px] leading-[1.15] text-balance mb-6">
              {mechanism.title}
            </h2>
            <p className="text-lg leading-relaxed text-[color:var(--color-text-soft)] text-pretty">
              {mechanism.body}
            </p>
            <div className="mt-8 inline-flex items-center gap-3 text-sm">
              <span className="font-display text-xs uppercase tracking-widest text-[color:var(--color-text-soft)]">
                Featured asset
              </span>
              <span className="font-serif italic text-[color:var(--color-text)]">
                {hero.leadMagnet}
              </span>
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {mechanism.pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-6 rounded-2xl bg-[color:var(--color-elysian-white)] ring-1 ring-[color:var(--color-rule)] hover:ring-[color:var(--color-persona-ring)] transition-all"
              >
                <div className="text-xs font-mono text-[color:var(--color-text-soft)] mb-4">
                  0{i + 1}
                </div>
                <h3 className="font-display text-lg leading-tight mb-2 text-[color:var(--color-text)]">
                  {pillar.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-[color:var(--color-text-soft)]">
                  {pillar.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
