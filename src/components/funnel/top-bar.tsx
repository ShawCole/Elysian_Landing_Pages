"use client";

import Link from "next/link";
import type { Persona } from "@/lib/personas";

export const TopBar = ({ persona }: { persona: Persona }) => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[color:var(--color-bg)]/80 border-b border-[color:var(--color-rule)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-14 flex items-center justify-between">
        <Link href="/" className="font-display text-base tracking-tight text-[color:var(--color-text)]">
          Elysian<span className="text-[color:var(--color-persona)]">Leaders</span>
        </Link>
        <div className="hidden md:flex items-center gap-3 text-[11px] uppercase tracking-widest text-[color:var(--color-text-soft)]">
          <span>Featuring</span>
          <span className="font-display text-[color:var(--color-text)] normal-case tracking-tight">
            {persona.presenter.name}
          </span>
          <span className="text-[color:var(--color-rule-strong)]">·</span>
          <span>{persona.qualifier}</span>
        </div>
        <a
          href="#alignment-audit"
          className="text-xs font-medium px-3 py-1.5 rounded-full ring-1 ring-[color:var(--color-rule-strong)] hover:bg-[color:var(--color-elysian-navy)] hover:text-[color:var(--color-elysian-cream)] hover:ring-[color:var(--color-elysian-navy)] transition-colors"
        >
          Alignment Audit
        </a>
      </div>
    </header>
  );
};
