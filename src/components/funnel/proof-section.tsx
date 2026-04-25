"use client";

import { motion } from "framer-motion";
import type { Persona } from "@/lib/personas";

export const ProofSection = ({ persona }: { persona: Persona }) => {
  const { proof } = persona;
  return (
    <section className="relative bg-[color:var(--color-elysian-navy)] text-[color:var(--color-elysian-cream)] overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 800px 400px at 80% 50%, var(--color-persona) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-px bg-[color:var(--color-persona)]" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[color:var(--color-elysian-cream)]/70">
                The proof
              </span>
            </div>

            <div className="font-display text-5xl md:text-6xl lg:text-[88px] leading-[0.95] tracking-tight mb-6 text-balance">
              <span className="text-[color:var(--color-persona)]">26,000+</span>
              <span className="block text-[color:var(--color-elysian-cream)]/95 mt-2">
                {proof.headline}
              </span>
            </div>

            <p className="text-lg leading-relaxed text-[color:var(--color-elysian-cream)]/70 max-w-xl text-pretty">
              {proof.body}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="grid grid-cols-2 gap-3">
              <ProofStat label="Commission per sale" value="$350–1,400" />
              <ProofStat label="Members in the network" value="26,000+" />
              <ProofStat label="VSL runtime" value="5:00" />
              <ProofStat label="Audit completion time" value="~4 min" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProofStat = ({ label, value }: { label: string; value: string }) => (
  <div className="p-5 rounded-xl bg-[color:var(--color-elysian-cream)]/[0.06] ring-1 ring-[color:var(--color-elysian-cream)]/[0.08] backdrop-blur">
    <div className="text-[10px] uppercase tracking-widest text-[color:var(--color-elysian-cream)]/60 mb-2">
      {label}
    </div>
    <div className="font-display text-xl text-[color:var(--color-elysian-cream)]">{value}</div>
  </div>
);
