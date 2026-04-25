"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { useState } from "react";
import { CommitmentModal } from "./commitment-modal";
import type { Persona } from "@/lib/personas";

interface VSLHeroProps {
  persona: Persona;
}

export const VSLHero = ({ persona }: VSLHeroProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [vslPlaying, setVslPlaying] = useState(false);

  const handlePrimaryClick = () => setModalOpen(true);
  const handleCommit = () => {
    setModalOpen(false);
    setVslPlaying(true);
  };

  const { hero, vsl, presenter } = persona;

  return (
    <section className="relative overflow-hidden">
      {/* soft persona-tinted wash, very low opacity, top-left only */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 1200px 600px at 10% -10%, var(--color-persona-soft) 0%, transparent 60%), radial-gradient(ellipse 800px 400px at 90% 0%, rgb(255 215 0 / 0.04) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-10 lg:pt-16 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* VSL — left, dominant */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 order-1"
          >
            <VSLPlayer persona={persona} playing={vslPlaying} onPlay={handlePrimaryClick} />

            <div className="mt-4 flex items-center gap-3 text-sm text-[color:var(--color-text-soft)]">
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[color:var(--color-persona)]" />
                {presenter.name}
              </span>
              <span className="text-[color:var(--color-rule-strong)]">·</span>
              <span>{presenter.role}</span>
              <span className="text-[color:var(--color-rule-strong)]">·</span>
              <span>{vsl.runtime} runtime</span>
            </div>
          </motion.div>

          {/* Copy + CTA — right */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 order-2 flex flex-col gap-7"
          >
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-[color:var(--color-persona-soft)] border border-[color:var(--color-persona-ring)] text-xs font-medium tracking-wide text-[color:var(--color-text)] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-persona)]" />
              {hero.eyebrow}
            </div>

            <h1 className="font-display text-5xl md:text-6xl leading-[1.02] tracking-tight text-balance">
              {hero.headline}{" "}
              {hero.headlineEmphasis && (
                <span className="font-serif italic font-normal text-[color:var(--color-persona)]">
                  {hero.headlineEmphasis}
                </span>
              )}
            </h1>

            <p className="text-lg leading-relaxed text-[color:var(--color-text-soft)] text-pretty max-w-xl">
              {hero.subhead}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={handlePrimaryClick}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[color:var(--color-elysian-navy)] text-[color:var(--color-elysian-cream)] font-medium text-sm tracking-tight hover:bg-[color:var(--color-elysian-navy-soft)] transition-colors shadow-[0_8px_24px_-8px_rgb(27_43_58/0.4)]"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                {hero.ctaPrimary}
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                href="#alignment-audit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[color:var(--color-rule-strong)] text-[color:var(--color-text)] font-medium text-sm tracking-tight hover:border-[color:var(--color-elysian-navy)] transition-colors"
              >
                {hero.ctaSecondary}
              </a>
            </div>

            <div className="pt-2 flex items-center gap-3 text-xs text-[color:var(--color-text-soft)]">
              <span className="font-display tracking-wide uppercase text-[10px] text-[color:var(--color-elysian-navy)]">
                Featured asset
              </span>
              <span className="text-[color:var(--color-rule-strong)]">·</span>
              <span className="font-serif italic">{hero.leadMagnet}</span>
            </div>
          </motion.div>
        </div>
      </div>

      <CommitmentModal isOpen={modalOpen} onCommit={handleCommit} onCancel={() => setModalOpen(false)} persona={persona} />
    </section>
  );
};

interface VSLPlayerProps {
  persona: Persona;
  playing: boolean;
  onPlay: () => void;
}

const VSLPlayer = ({ persona, playing, onPlay }: VSLPlayerProps) => {
  const { vsl, presenter } = persona;

  return (
    <div className="relative group">
      {/* Outer subtle glow */}
      <div
        aria-hidden
        className="absolute -inset-1 rounded-3xl opacity-30 blur-xl pointer-events-none"
        style={{ background: "var(--color-persona)" }}
      />

      <div className="relative aspect-video rounded-2xl overflow-hidden bg-[color:var(--color-elysian-navy)] ring-1 ring-[color:var(--color-rule-strong)] shadow-[0_30px_60px_-20px_rgb(27_43_58/0.25)]">
        {/* Poster image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={vsl.posterImage}
          alt={vsl.posterAlt}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />

        {/* Subtle gradient for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-elysian-navy)]/60 via-transparent to-[color:var(--color-elysian-navy)]/10" />

        {!playing && (
          <button
            onClick={onPlay}
            className="absolute inset-0 flex items-center justify-center"
            aria-label={`Play ${persona.shortName}'s walkthrough with ${presenter.firstName}`}
          >
            <span className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24">
              <span className="absolute inset-0 rounded-full bg-[color:var(--color-elysian-cream)] opacity-95 group-hover:scale-110 transition-transform duration-500" />
              <span className="absolute inset-0 rounded-full bg-[color:var(--color-persona)] opacity-30 animate-ping" />
              <Play className="relative w-7 h-7 md:w-8 md:h-8 text-[color:var(--color-elysian-navy)] fill-current ml-1" />
            </span>
          </button>
        )}

        {playing && (
          <div className="absolute inset-0 flex items-center justify-center bg-[color:var(--color-elysian-navy)]">
            <div className="text-center text-[color:var(--color-elysian-cream)] px-8">
              <div className="text-sm uppercase tracking-widest text-[color:var(--color-persona)] mb-3">
                Playing
              </div>
              <div className="font-display text-2xl mb-1">
                {presenter.firstName}'s walkthrough
              </div>
              <div className="text-sm text-[color:var(--color-elysian-cream)]/70">
                Replace this player with your hosted VSL embed (Wistia, Mux, etc.)
              </div>
            </div>
          </div>
        )}

        {/* Bottom info strip */}
        <div className="absolute bottom-0 left-0 right-0 px-5 py-4 flex items-center justify-between text-[color:var(--color-elysian-cream)]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[color:var(--color-elysian-cream)]/15 backdrop-blur ring-1 ring-[color:var(--color-elysian-cream)]/20 flex items-center justify-center text-[10px] font-semibold">
              {presenter.firstName.charAt(0)}
            </div>
            <div className="text-sm font-medium leading-tight">
              {presenter.firstName} Carling
              <div className="text-[10px] uppercase tracking-widest text-[color:var(--color-elysian-cream)]/70 mt-0.5">
                {persona.hero.leadMagnet}
              </div>
            </div>
          </div>
          <div className="text-xs font-mono text-[color:var(--color-elysian-cream)]/80">{vsl.runtime}</div>
        </div>
      </div>
    </div>
  );
};
