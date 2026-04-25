"use client";

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[color:var(--color-bg)] border-t border-[color:var(--color-rule)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="max-w-md">
            <div className="font-display text-lg tracking-tight text-[color:var(--color-text)]">
              Elysian<span className="text-[color:var(--color-persona)]">Leaders</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-text-soft)]">
              A high-ticket distribution model for professionals who want a real business — not a side hustle.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-widest text-[color:var(--color-text-soft)]">
            <Link href="#" className="hover:text-[color:var(--color-text)] transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-[color:var(--color-text)] transition-colors">Terms</Link>
            <Link href="#" className="hover:text-[color:var(--color-text)] transition-colors">Earnings Disclosure</Link>
            <Link href="#" className="hover:text-[color:var(--color-text)] transition-colors">Contact</Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[color:var(--color-rule)] text-[11px] leading-relaxed text-[color:var(--color-text-soft)]/80 max-w-3xl">
          © 2026 Elysian Leaders. All rights reserved. Income examples are not guarantees. Earnings depend on
          time invested, network, and market conditions. Read the full earnings disclosure for representative outcomes.
        </div>
      </div>
    </footer>
  );
};
