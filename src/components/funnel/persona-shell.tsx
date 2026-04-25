"use client";

import { Suspense } from "react";
import type { Persona } from "@/lib/personas";
import { TopBar } from "@/components/funnel/top-bar";
import { VSLHero } from "@/components/funnel/vsl-hero";
import { MirrorSection } from "@/components/funnel/mirror-section";
import { MechanismSection } from "@/components/funnel/mechanism-section";
import { ProofSection } from "@/components/funnel/proof-section";
import { FAQSection } from "@/components/funnel/faq-section";
import { FinalCTA } from "@/components/funnel/final-cta";
import { Footer } from "@/components/funnel/footer";

export const PersonaShell = ({ persona }: { persona: Persona }) => {
  return (
    <div data-persona={persona.id} className="min-h-screen bg-[color:var(--color-bg)]">
      <Suspense fallback={null}>
        <TopBar persona={persona} />
      </Suspense>
      <main>
        <VSLHero persona={persona} />
        <MirrorSection persona={persona} />
        <MechanismSection persona={persona} />
        <ProofSection persona={persona} />
        <FAQSection persona={persona} />
        <FinalCTA persona={persona} />
      </main>
      <Footer />
    </div>
  );
};
