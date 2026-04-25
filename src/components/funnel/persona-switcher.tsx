"use client";

import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { personaList } from "@/lib/personas";

export const PersonaSwitcher = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 px-4 pointer-events-none">
      <div className="pointer-events-auto bg-[color:var(--color-elysian-navy)]/90 backdrop-blur-md ring-1 ring-[color:var(--color-elysian-cream)]/10 rounded-full p-1 flex items-center gap-0.5 shadow-[0_12px_30px_-10px_rgb(27_43_58/0.45)]">
        {personaList.map((p) => {
          const path = `/${p.slug}`;
          const isActive = pathname === path;
          return (
            <button
              key={p.id}
              onClick={() => router.push(path)}
              className={`relative px-4 py-1.5 rounded-full text-[10px] font-medium uppercase tracking-widest transition-colors ${
                isActive
                  ? "text-[color:var(--color-elysian-navy)]"
                  : "text-[color:var(--color-elysian-cream)]/70 hover:text-[color:var(--color-elysian-cream)]"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-persona-pill"
                  className="absolute inset-0 bg-[color:var(--color-elysian-cream)] rounded-full"
                  transition={{ type: "spring", bounce: 0.18, duration: 0.55 }}
                />
              )}
              <span className="relative z-10">{p.shortName}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
