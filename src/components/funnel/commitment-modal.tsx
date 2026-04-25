"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ShieldCheck, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { Persona } from "@/lib/personas";

interface CommitmentModalProps {
  isOpen: boolean;
  persona: Persona;
  onCommit: () => void;
  onCancel: () => void;
}

export const CommitmentModal = ({ isOpen, persona, onCommit, onCancel }: CommitmentModalProps) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!hasMounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          <motion.div
            className="absolute inset-0 bg-[color:var(--color-elysian-navy)]/40 backdrop-blur-md"
            onClick={onCancel}
          />

          <motion.div
            initial={{ scale: 0.96, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 16 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="relative w-full max-w-md bg-[color:var(--color-elysian-cream)] rounded-2xl p-8 md:p-10 shadow-[0_30px_80px_-20px_rgb(27_43_58/0.4)] ring-1 ring-[color:var(--color-rule-strong)]"
          >
            <button
              onClick={onCancel}
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-[color:var(--color-text-soft)] hover:text-[color:var(--color-text)] hover:bg-[color:var(--color-rule)] transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex flex-col items-start">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
                style={{ background: "var(--color-persona-soft)", color: "var(--color-persona)" }}
              >
                <ShieldCheck className="w-5 h-5" />
              </div>

              <div className="text-[10px] uppercase tracking-widest text-[color:var(--color-text-soft)] mb-2">
                Before you watch
              </div>

              <h2 className="font-display text-2xl md:text-[28px] leading-tight text-[color:var(--color-text)] mb-3">
                This is a 5-minute walkthrough, not a sales pitch.
              </h2>

              <p className="text-[15px] leading-relaxed text-[color:var(--color-text-soft)] mb-6">
                {persona.presenter.firstName} will show you the actual mechanism behind the
                {" "}{persona.hero.leadMagnet}. If by the end you want to talk further, you take the
                Alignment Audit. If not, no follow-up. Sound fair?
              </p>

              <div className="w-full flex flex-col gap-2.5">
                <button
                  onClick={onCommit}
                  className="w-full py-3.5 bg-[color:var(--color-elysian-navy)] text-[color:var(--color-elysian-cream)] font-medium text-sm tracking-tight rounded-full hover:bg-[color:var(--color-elysian-navy-soft)] transition-colors flex items-center justify-center gap-2"
                >
                  Yes — start the walkthrough
                </button>
                <button
                  onClick={onCancel}
                  className="w-full py-3 text-[color:var(--color-text-soft)] text-sm hover:text-[color:var(--color-text)] transition-colors"
                >
                  Not right now
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
